<template>
  <v-app>
    <v-navigation-drawer class="oslo__navigation-drawer" permanent app>
      <div style="align-self: center">
        <img :src="osloIcon" alt="oslo-logo" class="oslo__logo" @click="onClickHome">
      </div>
      <div
        v-for="link in links"
        :key="link.key"
        :label="link.value"
        :class="checkActiveBydel(link.uri)"
        style="cursor: pointer; width: 100%"
        @click="onClickBydel(link.uri)"
      >
        <input
          type="checkbox"
          v-model="selected"
          :value="link.key"
          :id="link.key"
          @change="onChangeCheckbox"
        />
        <label :for="link.key"></label>
        <span
          class="oslo__navigation-link--label"
        >
          {{link.value}}
        </span>
      </div>
      <div
        :class="checkActiveSammenlign()"
        style="margin-top: 0.7rem; cursor: pointer;"
        @click="onClickSammenlign"
        role="button"
      >
        <span class="oslo__navigation-link--label">Sammenlign bydeler</span>
      </div>
    </v-navigation-drawer>
    <v-content>
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
    </v-content>
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
        this.$router.push({ name: 'Home' });
      } else if (this.selected.length === 1) {
        const bydel = bydeler.find(item => item.key === this.selected[0]).uri;
        this.$router.push({ path: `/bydel/${bydel}` });
      } else if (this.selected.length > 1) {
        routes.length > 3
          ? this.$router.push({ path: `/sammenlign/${this.selected.join('-')}/${routes[3]}` })
          : this.$router.push({ path: `/sammenlign/${this.selected.join('-')}` });
      }
    },

    checkActiveBydel(link) {
      return this.$route.params.bydel === link && this.$route.path.includes('bydel')
        ? 'oslo__navigation-link--active'
        : 'oslo__navigation-link';
    },

    checkActiveSammenlign() {
      return this.$route.path.includes('sammenlign') ? 'oslo__navigation-link--active' : 'oslo__navigation-link';
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

a {
  color: white;
  text-decoration: none;
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

  background-color: $color-purple;
  color: rgba(white, 0.9);
  transition: background-color 0.3s ease-in-out;

  &--active {
    background-color: $color-blue;

    #{$p}--label {
      color: $color-purple;
      font-weight: 500;
    }

    input[type='checkbox']:checked + label {
      background-color: $color-blue;
      &::before {
        background-color: $color-blue;
      }
    }
  }

  &:hover {
    background-color: lighten($color-purple, 10%);
  }

  &--label {
    letter-spacing: 0.3px;
    margin-left: 1rem;
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
    opacity: 0.5;
    position: relative;
    vertical-align: middle;
    width: 40px;

    // unchecked border
    &::before {
      -moz-border-radius: 1px;
      -webkit-border-radius: 1px;
      border: 1px solid white;
      border-radius: 1px;
      content: '';
      height: 18px;
      left: 10px;
      opacity: 0.2;
      position: absolute;
      top: 10px;
      width: 18px;
    }
  }

  &:checked + label {
    opacity: 100;
    position: relative;

    // checked inside border
    &::after {
      background-color: $color-blue;
      border-radius: 1px;
      content: '';
      height: 10px;
      left: 14px;
      position: absolute;
      top: 14px;
      width: 10px;
    }

    // checked border
    &::before {
      background-color: $color-purple;
      border: 1px solid $color-blue;
      border-radius: 1px;
      content: '';
      height: 18px;
      left: 10px;
      position: absolute;
      top: 10px;
      width: 18px;
    }
  }
}
</style>
