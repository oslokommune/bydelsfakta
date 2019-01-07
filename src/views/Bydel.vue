<template>
    <v-container fluid>
      <v-layout row>
        <v-flex lg8>
          <h1>Undersider</h1>
        </v-flex>
        <v-flex lg4>
          <h1>Delbydeler - kart</h1>
        </v-flex>
      </v-layout>
      <router-view />
    </v-container>
</template>

<script>
export default {
  name: 'Bydel',
};
</script>

<style scoped>
</style>
