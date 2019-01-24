<template>
  <div id="navbar">
    <img :src="osloIcon" alt="oslo-logo" class="oslo__logo" @click="onClickHome">
    <div
      v-for="link in links"
      :key="link.key"
      class="oslo__navigation-link"
      :class="{ 'oslo__navigation-link--active': checkActiveBydel(link.uri), 'oslo__navigation-link--compare': checkMultipleBydeler(link.key) }"
    >
      <input
        type="checkbox"
        v-model="selected"
        :value="link.key"
        :id="`checkbox-${link.key}`"
        @change="onChangeCheckbox"
        :disabled="disableChecbox(link.key)"
      >
      <label :for="`checkbox-${link.key}`"></label>
      <span class="oslo__navigation-link--label" @click="onClickBydel(link.uri)">{{link.value}}</span>
    </div>
    <div
      class="oslo__navigation-link oslo__navigation-link--label-compare"
      :class="{ 'oslo__navigation-link--active': $route.path.includes('sammenlign') }"
      @click="onClickSammenlign"
      role="button"
    >
      <span class="oslo__navigation-link--label">Sammenlign bydeler</span>
    </div>
    <div class="oslo__navigation-drawer__button-container">
      <div class="button-container">
        <button class="oslo__navigation-button" @click="selectAll">Velg alle</button>
        <button class="oslo__navigation-button" :disabled="selected.length === 0" @click="unselectAll">Fjern alle
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import bydeler from '../config/bydeler';
import osloIcon from '../assets/oslo-logo.svg';

export default {
  name: 'navigation-drawer',
  data() {
    return {
      links: bydeler,
      osloIcon: osloIcon,
      showAllCheckbox: false,
      selected: [],
    };
  },

  mounted() {
    const routes = this.$route.path.split('/');
    const path = this.$route.path;
    if (this.$route.params.bydel === undefined) {
      return;
    } else if (path.includes('sammenlign')) {
      const bydeler = this.$route.params.bydel.split('-');
      this.selected = bydeler[0] === 'alle' ? [] : bydeler;
    } else if (path.includes('bydel')) {
      const bydelKey = bydeler.find(item => item.uri === this.$route.params.bydel).key;
      this.selected = [bydelKey];
    }
    if (routes.length > 3) {
      this.selectedSubpage = routes[3];
    }
  },

  methods: {
    checkActiveBydel(link) {
      return this.$route.params.bydel === link && this.$route.path.includes('bydel');
    },

    checkMultipleBydeler(key) {
      return this.$route.path.includes('sammenlign') && this.selected.includes(key);
    },

    disableChecbox(key) {
      return this.$route.path.includes('bydel') && this.selected.length === 1 && this.selected[0] === key;
    },

    onChangeCheckbox() {
      const routes = this.$route.path.split('/');

      if (this.selected.length === 0) {
        this.showAllCheckbox = false;
        routes.length > 3
          ? this.$router.push({ path: `/sammenlign/alle/${routes[3]}` })
          : this.$router.push({ path: `/sammenlign/alle` });
      } else if (this.selected.length === bydeler.length) {
        this.showAllCheckbox = true;
        routes.length > 3
          ? this.$router.push({ path: `/sammenlign/alle/${routes[3]}` })
          : this.$router.push({ path: `/sammenlign/alle` });
      } else if (this.selected.length > 0) {
        routes.length > 3
          ? this.$router.push({ path: `/sammenlign/${this.selected.join('-')}/${routes[3]}` })
          : this.$router.push({ path: `/sammenlign/${this.selected.join('-')}` });
      }
    },

    onClickBydel(bydel) {
      const routes = this.$route.path.split('/');
      const bydelUri = this.links.find(item => item.uri === bydel).uri;
      routes.length > 3
        ? this.$router.push({ path: `/bydel/${bydelUri}/${routes[3]}` })
        : this.$router.push({ path: `/bydel/${bydelUri}` });
    },

    onClickHome() {
      this.selected = [];
      this.$router.push({ name: 'Home' });
    },

    onClickSammenlign() {
      const routes = this.$route.path.split('/');
      if (this.selected.length < 2) {
        this.selected = [];
        routes.length > 3
          ? this.$router.push({ path: `/sammenlign/alle/${routes[3]}` })
          : this.$router.push({ path: `/sammenlign/alle` });
      } else if (this.selected.length === bydeler.length) {
        routes.length > 3
          ? this.$router.push({ path: `/sammenlign/alle/${routes[3]}` })
          : this.$router.push({ path: `/sammenlign/alle` });
      } else {
        routes.length > 3
          ? this.$router.push({ path: `/sammenlign/${this.selected.join('-')}/${routes[3]}` })
          : this.$router.push({ path: `/sammenlign/${this.selected.join('-')}` });
      }
    },

    selectAll() {
      const routes = this.$route.path.split('/');
      this.selected = [];
      this.showAllCheckbox = true;
      bydeler.forEach(bydel => this.selected.push(bydel.key));
      routes.length > 3
        ? this.$router.push({ path: `/sammenlign/alle/${routes[3]}` })
        : this.$router.push({ path: `/sammenlign/alle` });
    },

    unselectAll() {
      const routes = this.$route.path.split('/');
      this.selected = [];
      routes.length > 3
        ? this.$router.push({ path: `/sammenlign/alle/${routes[3]}` })
        : this.$router.push({ path: `/sammenlign/alle` });
    },
  },

  watch: {
    $route(to) {
      const routes = this.$route.path.split('/');
      if (to.path.includes('bydel')) {
        const bydel = bydeler.find(item => item.uri === routes[2]).key;
        this.selected = [bydel];
      } else if (to.path.includes('sammenlign') && !this.showAllCheckbox) {
        const paramBydel = routes[2].split('-');
        this.selected = paramBydel;
      }
    },
  },
};
</script>

<style scoped lang="scss">
@import '../styles/colors';

#navbar {
  display: flex;
  flex-direction: column;

  height: 100%;
  width: 300px;
  background-color: $color-purple;
  position: fixed;
  z-index: 100;
}

.oslo__logo {
  cursor: pointer;
  margin-top: 3rem;
  margin-bottom: 2rem;
  align-self: center;
}

.oslo__navigation-link {
  $p: &;

  position: relative;
  background-color: $color-purple;
  color: rgba(white, 0.9);
  transition: all 0.3s ease-in-out;
  display: flex;
  align-items: center;

  cursor: pointer;
  width: 100%;

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
    position: relative;

    &-compare {
      margin-bottom: 2rem;
      margin-top: 2rem;
      padding-left: 3.6rem;
    }

    // Add visual border on the left side of text on hover
    &::before {
      content: '';
      display: none;
      position: absolute;
      width: 10px;
      top: 0;
      left: -10px;
      bottom: 0;
      background: $color-purple;
      pointer-events: none;
    }
  }

  &:not(&--active) &--label:hover {
    background-color: darken($color-purple, 5%);

    // Show the visual border on hover
    &::before {
      background-color: darken($color-purple, 5%);
      display: block;
    }
  }
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

.oslo__navigation-drawer__button-container {
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  padding-right: 1rem;
}

.button-container {
  align-self: flex-end;

  .oslo__navigation-button {
    border: 1px solid rgb(248, 198, 107);
    color: rgb(248, 198, 107);
    padding: 0.3rem 1rem 0.3rem 1rem;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
    margin: 0.5rem;
    transition: all 0.3s ease-in-out;

    &:disabled {
      opacity: 0.2;
      transition: opacity 0.3s ease-in-out;
    }

    &:hover:not([disabled]) {
      box-shadow: 0 0 0 1px #e0e0e0;
    }
  }
}
</style>
