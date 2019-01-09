<template>
  <v-app>
    <v-navigation-drawer
      class="oslo__navigation-drawer"
      permanent
      absolute
      app
    >
      <v-layout column>
        <v-flex lg12 align-self-center>
          <img :src="osloIcon" alt="oslo-logo" class="oslo__logo" />
        </v-flex>
        <v-flex v-for="link in links" :key="link.key" :class="checkActiveBydel(link.key)" >
          <v-layout row style="height: 40px">
            <v-flex xs1>
              <v-checkbox v-model="selected" :value="link.key" color="#6ee9ff" @change="onCheckboxChange"/>
            </v-flex>
            <v-flex xs11 style="margin-top: 0.7rem; cursor: pointer;" @click="onClickBydel(link.key)">
              <span class="oslo__navigation-link--label">{{link.value}}</span>
            </v-flex>
          </v-layout>
        </v-flex>
        <v-spacer />
        <v-flex :class="checkActiveSammenlign()">
          <router-link :to="{ path: `/sammenlign/${selected.join('%20')}` }">Sammenlign bydeler</router-link>
        </v-flex>
      </v-layout>
    </v-navigation-drawer>
    <v-content>
      <v-layout column class="oslo__navigation-topbar">
        <v-container fluid>
          <v-layout row >
            <v-icon class="oslo__topbar">arrow_back</v-icon>
            <h4 class="text-uppercase oslo__topbar oslo__topbar-text">{{ getBydel(this.$route.params.bydel) }}</h4>
          </v-layout>
          <v-flex lg6 md8 sm8 xs10>
            <v-select
              v-model="selectedSubpage"
              :items="items"
              label="VELG TEMA"
              class="v-select__selection--uppercase"
            ></v-select>
          </v-flex>
        </v-container>
      </v-layout>
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
  async mounted() {
    if (this.$route.name === 'Home') {
      return;
    }
    const selectedBydel = this.$route.params.bydel.split(' ');
    await this.$store.dispatch('SET_SELECTED_BYDEL', { selectedBydel });
    this.selected = this.selectedBydel;
  },
  methods: {
    async onCheckboxChange(newValue) {
      await this.$store.dispatch('SET_SELECTED_BYDEL', {
        selectedBydel: [...newValue],
      });
      if (this.selectedBydel.length > 1) {
        this.$router.push({ path: `/sammenlign/${this.selected.join('%20')}` });
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
      routes.length > 3
        ? this.$router.push({ path: `/bydel/${bydel}/${routes[3]}` })
        : this.$router.push({ path: `/bydel/${bydel}` });
    },
    getBydel(id) {
      return this.$route.name === 'Sammenlign' ? 'Sammenligne bydeler' : bydeler.find(bydel => bydel.key === id).value;
    },
  },
  watch: {
    $route(to) {
      const routes = this.$route.path.split('/');
      if (to.name === 'Bydel') {
        this.selected = [to.params.bydel];
        this.selectedSubpage = null;
      }
      if (routes.length > 3) {
        this.selected = [to.params.bydel];
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
a {
  color: white;
  text-decoration: none;
}

.oslo__logo {
  margin-top: 3rem;
  margin-bottom: 2rem;
}

.oslo__navigation-drawer {
  background-color: #292858;
}

.oslo__navigation-link {
  margin-left: 2rem;
  &--active {
    padding-left: 2rem;
    background-color: #6ee9ff;

    span {
      color: #292858;
    }
  }

  &--label {
    letter-spacing: 0.3px;
    color: rgb(255, 255, 255);
    margin-left: 1rem;
  }
}

.oslo__navigation-topbar {
  background-color: white;
  border-bottom: 1px solid rgba(0, 0, 0, 0.32);
}

.oslo__topbar {
  font-weight: bold;
  color: rgb(41, 40, 88);
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
</style>
