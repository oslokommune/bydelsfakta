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
            <v-flex xs11 style="margin-top: 0.7rem">
              <router-link :to="{ path: `/bydel/${link.key}` }" class="oslo__navigation-link--label">{{link.value}}</router-link>
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
        <v-container>
         <h4>Bydel {{this.$route.params.bydel}}</h4>
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
  },
  watch: {
    $route(to) {
      if (to.name === 'Bydel') {
        this.selected = [to.params.bydel];
        this.selectedSubpage = null;
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

.oslo__navigation-drawer {
  background-color: #292858;
}

.oslo__navigation-link {
  margin-left: 2rem;
  &--active {
    padding-left: 2rem;
    background-color: #6ee9ff;

    a {
      color: #292858;
    }
  }
}

.oslo__navigation-link--label {
  margin-left: 1rem;
}

.oslo__navigation-topbar {
  background-color: white;
  border-bottom: 1px solid rgba(0, 0, 0, 0.32);
}

.v-input--selection-controls {
  margin-top: 0.6rem;
  padding-top: 0;
}

.v-select__selection--uppercase {
  text-transform: uppercase;
  font-size: 24px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: 0.7px;
}

.oslo__logo {
  margin-top: 3rem;
  margin-bottom: 2rem;
}
</style>
