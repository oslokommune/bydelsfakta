<template>
  <VApp>
      <VNavigationDrawer
        class="oslo__navigation-drawer"
        permanent
        absolute
        app
      >
          <VLayout column>
            <VFlex v-for="link in links" :key="link.key" :class="checkActiveBydel(link.key)" >
              <VLayout row style="height: 40px">
                <VFlex xs2>
                  <VCheckbox v-model="selected" :value="link.key" color="#6ee9ff" @change="onCheckboxChange"/>
                </VFlex>
                <VFlex xs10 style="margin-top: 0.6rem">
                  <RouterLink :to="{ path: `/bydel/${link.key}` }" class="oslo__navigation-link--label">{{link.value}}</RouterLink>
                </VFlex>
              </VLayout>
            </VFlex>
            <VSpacer />
            <VFlex :class="checkActiveSammenlign()">
              <RouterLink :to="{ path: `/sammenlign/${selected.join('%20')}` }">Sammenlign bydeler</RouterLink>
            </VFlex>
          </VLayout>
      </VNavigationDrawer>
    <VContent>
      <RouterView/>
    </VContent>
  </VApp>
</template>

<script>
import bydeler from './config/bydeler';

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
    };
  },
  mounted() {
    if (this.$route.name === 'Home') {
      return;
    }
    const selectedBydel = this.$route.params.bydel.split(' ');
    this.$store.dispatch('SET_SELECTED_BYDEL', { selectedBydel });
    this.selected = this.selectedBydel;
  },
  methods: {
    onCheckboxChange(newValue) {
      this.$store.dispatch('SET_SELECTED_BYDEL', {
        selectedBydel: [...newValue],
      });
      if (this.$route.name === 'Sammenlign') {
        this.$router.push({ path: `/sammenlign/${this.selected.join('%20')}` });
      }
    },
    checkActiveBydel(link) {
      return this.$route.params.bydel === link && this.$route.name === 'Bydel'
        ? 'oslo__navigation-link--active'
        : 'oslo__navigation-link';
    },
    checkActiveSammenlign() {
      return this.$route.name === 'Sammenlign'
        ? 'oslo__navigation-link--active'
        : 'oslo__navigation-link';
    },
  },
  watch: {
    $route(to, from) {
      if (to.name === 'Bydel') {
        this.selected = this.selected.filter(
          item => item !== from.params.bydel
        );
        this.selected = [to.params.bydel];
      } else if (from.name === 'Sammenlign' && to.name === 'Bydel') {
        this.selected = [to.params.bydel];
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
  padding-left: 2rem;
  &--active {
    padding-left: 2rem;
    background-color: #6ee9ff;

    a {
      color: #292858;
    }
  }
}

.oslo__navigation-link--label {
  padding-top: 1.5rem;
}

.v-input--selection-controls {
  margin-top: 0.6rem;
  padding-top: 0;
}
</style>
