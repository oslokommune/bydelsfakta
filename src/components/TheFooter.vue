<template>
  <footer class="footer">
    <div class="columns">
      <div class="column" v-html="$t('footer.columnOne')"></div>
      <div class="column" v-html="$t('footer.columnTwo')"></div>
      <div class="column" v-html="$t('footer.columnThree')"></div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import '../styles/_variables';
@import '../styles/_colors';

.footer {
  color: $color-grey-800;
  margin-bottom: 3rem;
  padding: 1rem;

  @media screen and (min-width: $break-md) {
    padding: 2rem;
  }

  a {
    color: $color-grey-900;
    font-weight: 500;
    text-decoration: underline;
  }

  .columns {
    border-top: 1px solid $color-grey-100;
    display: grid;
    gap: 1.5rem 0.5rem;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));

    @media screen and (min-width: $break-lg) {
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    }

    // Fallback to flexbox
    @media all and (-ms-high-contrast: none) {
      display: flex;
      flex-wrap: wrap;
    }
  }

  .column {
    flex: 1;
    padding: 1rem 1rem 0 0;

    @media screen and (min-width: $break-lg) {
      padding: 1rem 2.5rem 0 0;
    }

    h2 {
      color: $color-purple;
      font-weight: 500;
    }
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    margin: 0 0 1em;
  }
}
</style>
