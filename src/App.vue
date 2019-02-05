<template>
  <div id="app">
    <navigation-drawer />
    <div id="content">
      <navigation-topbar />
      <main>
        <router-view />
      </main>
    </div>
  </div>
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
#content {
  margin-left: 300px;
}
</style>
