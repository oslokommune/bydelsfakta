<template>
  <v-app>
    <navigation-drawer />
    <div id="content">
      <navigation-topbar />
      <router-view/>
    </div>
  </v-app>
</template>

<script>
import NavigationDrawer from './components/NavigationDrawer.vue';
import NavigationTopbar from './components/NavigationTopbar.vue';

export default {
  name: 'App',
  components: { NavigationTopbar, NavigationDrawer },
};
</script>

<style scoped lang="scss">
@import './styles/colors';

#content {
  margin-left: 300px;
}
</style>
