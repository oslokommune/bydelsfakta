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
      >
        <div class="oslo__navigation-drawer__checkbox">
          <div>
            <input
              type="checkbox"
              v-model="selected"
              :value="link.key"
              @change="onChangeCheckbox"
            />
          </div>
          <div
            style="padding-top: 0.7rem; cursor: pointer; width: 100%"
            @click="onClickBydel(link.uri)"
          >
            <span class="oslo__navigation-link--label">{{link.value}}</span>
          </div>
        </div>
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
  position: relative;
  padding-left: 300px;
  flex-wrap: wrap;
  height: 100vh;
  max-height: 100%;
}

.oslo__logo {
  margin-top: 3rem;
  margin-bottom: 2rem;
  cursor: pointer;
}

.oslo__navigation-drawer {
  display: flex;
  flex-direction: column;
  background-color: $color-purple;

  &__checkbox {
    display: flex;
    flex-direction: row;
    height: 40px;
  }
}

.oslo__navigation-link {
  $p: &;

  background-color: $color-purple;
  transition: background-color 0.3s ease-in-out;
  padding-left: 2rem;
  color: rgba(white, 0.9);

  &--active {
    padding-left: 2rem;
    background-color: $color-blue;

    #{$p}--label {
      color: $color-purple;
      font-weight: 500;
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
  font-weight: bold;
  color: $color-purple;
  margin-bottom: 2rem;

  &-text {
    letter-spacing: 0.8px;
    margin-top: 0.3rem;
    margin-left: 1rem;
  }
}

.v-input--selection-controls {
  margin-top: 0.6rem;
  padding-top: 0;
}

.v-select__selection--uppercase {
  text-transform: uppercase;
  font-size: 24px;
  font-weight: bold;
  letter-spacing: 0.7px;
}

input[type='checkbox'] {
  border-bottom-color: white !important;
}
</style>
