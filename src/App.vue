<template>
  <v-app>
    <div id="navbar">
      <div style="align-self: center">
        <img :src="osloIcon" alt="oslo-logo" class="oslo__logo" @click="onClickHome">
      </div>
      <div
        v-for="link in links"
        :key="link.key"
        :label="link.value"
        class="oslo__navigation-link"
        :class="{ 'oslo__navigation-link--active': checkActiveBydel(link.uri), 'oslo__navigation-link--compare': checkMultipleBydeler(link.key) }"
        style="cursor: pointer; width: 100%"
      >
        <input
          type="checkbox"
          v-model="selected"
          :value="link.key"
          :id="link.key"
          @change="onChangeCheckbox"
          :disabled="disableChecbox(link.key)"
        >
        <label :for="link.key"></label>
        <span class="oslo__navigation-link--label" @click="onClickBydel(link.uri)">{{link.value}}</span>
      </div>
      <div
        class="oslo__navigation-link"
        :class="{ 'oslo__navigation-link--active': $route.path.includes('sammenlign') }"
        style="margin-top: 0.7rem; cursor: pointer;"
        @click="onClickSammenlign"
        role="button"
      >
        <span class="oslo__navigation-link--label">Sammenlign bydeler</span>
      </div>
    </div>
    <div id="content">
      <div class="oslo__navigation-topbar">
        <div @click="backButton" role="button" style="display: flex; flex-direction: row;">
          <v-icon class="oslo__topbar">arrow_back</v-icon>
          <h4
            class="text-uppercase oslo__topbar oslo__topbar-text"
          >{{ getBydel(this.$route.params.bydel) }}</h4>
        </div>
        <v-select
          v-model="selectedSubpage"
          :items="items"
          label="VELG TEMA"
          class="v-select__selection--uppercase"
        ></v-select>
      </div>
      <router-view/>
    </div>
  </v-app>
</template>

<script>
import bydeler from './config/bydeler';
import subpages from './config/subpages';

import osloIcon from './assets/oslo-logo.svg';

export default {
  name: 'App',
  computed: {
    selectedBydel() {
      return this.$store.state.selectedBydel;
    },
  },

  data() {
    return {
      links: bydeler,
      selected: [],
      items: subpages,
      selectedSubpage: '',
      osloIcon: osloIcon,
      bydel: this.getBydel(this.$route.params.bydel),
    };
  },

  mounted() {
    const routes = this.$route.path.split('/');
    const path = this.$route.path;
    if (this.$route.params.bydel === undefined) {
      return;
    } else if (path.includes('sammenlign')) {
      this.selected = this.$route.params.bydel.split('-');
    } else if (path.includes('bydel')) {
      const bydelKey = bydeler.find(item => item.uri === this.$route.params.bydel).key;
      this.selected = [bydelKey];
    }
    if (routes.length > 3) {
      this.selectedSubpage = routes[3];
    }
  },
  methods: {
    onChangeCheckbox() {
      const routes = this.$route.path.split('/');

      if (this.selected.length === 0) {
        routes.length > 3
          ? this.$router.push({ path: `/sammenlign/alle/${routes[3]}` })
          : this.$router.push({ path: `/sammenlign/alle` });
      } else if (this.selected.length > 0) {
        routes.length > 3
          ? this.$router.push({ path: `/sammenlign/${this.selected.join('-')}/${routes[3]}` })
          : this.$router.push({ path: `/sammenlign/${this.selected.join('-')}` });
      }
    },

    checkActiveBydel(link) {
      return this.$route.params.bydel === link && this.$route.path.includes('bydel');
    },

    checkActiveSammenlign() {
      return this.$route.path.includes('sammenlign');
    },

    checkMultipleBydeler(key) {
      return this.$route.path.includes('sammenlign') && this.selected.includes(key);
    },

    onClickBydel(bydel) {
      const routes = this.$route.path.split('/');
      const bydelUri = bydeler.find(item => item.uri === bydel).uri;
      routes.length > 3
        ? this.$router.push({ path: `/bydel/${bydelUri}/${routes[3]}` })
        : this.$router.push({ path: `/bydel/${bydelUri}` });
    },

    onClickSammenlign() {
      const routes = this.$route.path.split('/');
      if (this.selected.length < 2) {
        this.selected = [];
        this.$router.push({ name: 'Sammenlign' });
      }
      routes.length > 3
        ? this.$router.push({ path: `/sammenlign/${this.selected.join('-')}/${routes[3]}` })
        : this.$router.push({ path: `/sammenlign/${this.selected.join('-')}` });
    },

    getBydel(id) {
      return this.$route.path.includes('sammenlign')
        ? 'Sammenligne bydeler'
        : id !== undefined
        ? bydeler.find(bydel => bydel.uri === id).value
        : 'Velg bydel';
    },

    onClickHome() {
      this.selected = [];
      this.$router.push({ name: 'Home' });
    },

    backButton() {
      const route = this.$route;
      if (this.selectedSubpage === null) {
        this.selected = [];
        this.$router.push({ path: '/' });
      } else if (route.path.includes('bydel')) {
        this.$router.push({ path: `/bydel/${route.params.bydel}` });
      } else if (route.path.includes('sammenlign')) {
        this.$router.push({ path: `/sammenlign/${route.params.bydel}` });
      }
      this.selectedSubpage = null;
    },

    disableChecbox(key) {
      return this.$route.path.includes('bydel') && this.selected.length === 1 && this.selected[0] === key;
    },
  },
  watch: {
    $route(to) {
      const routes = this.$route.path.split('/');
      if (to.path.includes('bydel')) {
        const bydel = bydeler.find(item => item.uri === routes[2]).key;
        this.selected = [bydel];
        this.selectedSubpage = null;
      }
      if (routes.length > 3) {
        this.selectedSubpage = routes[3];
      }
    },

    selectedSubpage(subpage) {
      if (this.$route.path.includes('sammenlign') && subpage !== null) {
        this.$router.push({
          path: `/sammenlign/${this.$route.params.bydel}/${subpage}`,
        });
      } else if (this.$route.path.includes('bydel') && subpage !== null) {
        this.$router.push({
          path: `/bydel/${this.$route.params.bydel}/${subpage}`,
        });
      }
    },
  },
};
</script>

<style scoped lang="scss">
@import './styles/colors';

#navbar {
  display: flex;
  flex-direction: column;

  height: 100%;
  width: 300px;
  background-color: $color-purple;
  position: fixed;
  z-index: 100;
}

#content {
  margin-left: 300px;
}

.oslo__content {
  display: flex;
  flex-wrap: wrap;
  height: 100vh;
  max-height: 100%;
  padding-left: 300px;
  position: relative;
}

.oslo__logo {
  cursor: pointer;
  margin-top: 3rem;
  margin-bottom: 2rem;
}

.oslo__navigation-drawer {
  background-color: $color-purple;
  display: flex;
  flex-direction: column;
}

.oslo__navigation-link {
  $p: &;

  position: relative;
  background-color: $color-purple;
  color: rgba(white, 0.9);
  transition: all 0.3s ease-in-out;
  display: flex;
  align-items: center;

  &--active {
    background-color: $color-blue;
    transition: all 0.3s ease-in-out;

    #{$p}--label {
      color: $color-purple;
      font-weight: 500;
    }

    label:hover {
      background: none !important;
    }

    input[type='checkbox']:checked + label {
      &::after {
        transform: scale(0);
      }
    }
  }

  &--compare {
    background-color: lighten($color-purple, 5%);
    transition: background-color 0.3s ease-in-out;
  }

  &--label {
    letter-spacing: 0.3px;
    display: flex;
    flex-grow: 1;
    height: 40px;
    align-items: center;
  }

  &:not(&--active) &--label:hover {
    background-color: darken($color-purple, 5%);
  }
}

.oslo__navigation-topbar {
  background-color: white;
  border-bottom: 1px solid $color-grey-300;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  width: 100%;
}

.oslo__topbar {
  color: $color-purple;
  font-weight: bold;
  margin-bottom: 2rem;

  &-text {
    letter-spacing: 0.8px;
    margin-left: 1rem;
    margin-top: 0.3rem;
  }
}

.v-input--selection-controls {
  margin-top: 0.6rem;
  padding-top: 0;
}

.v-select__selection--uppercase {
  font-size: 24px;
  font-weight: bold;
  letter-spacing: 0.7px;
  text-transform: uppercase;
}

input[type='checkbox'] {
  display: none;

  & + label {
    cursor: pointer;
    display: inline-block;
    height: 40px;
    position: relative;
    vertical-align: middle;
    width: 50px;
    padding-left: 1rem;

    &:hover {
      background: darken($color-purple, 10%);
      &::before {
        opacity: 0.8;
        background: rgba(white, 0.15);
      }
    }

    // checked inside border
    &::after {
      background-color: $color-blue;
      border-radius: 1px;
      content: '';
      height: 10px;
      left: 24px;
      position: absolute;
      top: 14px;
      width: 10px;
      transform: scale(0);
      transition: all 0.3s ease-in-out;
    }

    // unchecked border
    &::before {
      -moz-border-radius: 1px;
      -webkit-border-radius: 1px;
      border: 1px solid white;
      border-radius: 1px;
      content: '';
      height: 18px;
      left: 20px;
      opacity: 0.35;
      position: absolute;
      top: 10px;
      width: 18px;
      transition: all 0.3s ease-in-out;
    }
  }

  &:checked + label {
    position: relative;
    opacity: 1;

    // checked inside border
    &::after {
      transform: scale(1);
      transition: transform 0.3s cubic-bezier(0.29, -0.01, 0.41, 1.9);
    }

    // checked border
    &::before {
      border: 1px solid $color-blue;
      opacity: 1;
      transition: all 0.3s cubic-bezier(0.29, -0.01, 0.41, 1.9);
    }
  }
}
</style>
