<template>
  <footer class="footer">
    <div class="columns">
      <div class="column">
        <h2>{{ $t('footer.columnOne.title') }}</h2>
        <p>{{ $tm('footer.columnOne.p1') }}</p>
        <p>{{ $tm('footer.columnOne.p2') }}</p>
        <i18n-t keypath="footer.columnOne.p3" tag="p">
          <template #more>
            <a href="https://statistikkbanken.oslo.kommune.no/">Statistikkbanken</a>
          </template>
        </i18n-t>
      </div>
      <div class="column">
        <h2>{{ $t('footer.columnTwo.title') }}</h2>
        <i18n-t keypath="footer.columnTwo.p1" tag="p">
          <template #publisher>
            <a href="https://www.oslo.kommune.no/politikk-og-administrasjon/politikk/byradet/byrad-for-finans/">
              Byrådsavdeling for finans
            </a>
          </template>
          <template #developer>
            <a href="https://labs.oslo.kommune.no/">Oslo Origo</a>
          </template>
        </i18n-t>
        <i18n-t keypath="footer.columnTwo.p2" tag="p">
          <template #contact>
            <a href="mailto:oslostatistikken@byr.oslo.kommune.no?subject=Bydelsfakta"
              >oslostatistikken@byr.oslo.kommune.no</a
            >
          </template>
        </i18n-t>
      </div>
      <div class="column">
        <h2>{{ $t('footer.columnThree.title') }}</h2>
        <ul>
          <li><a href="https://statistikkbanken.oslo.kommune.no/">Statistikkbanken</a></li>
          <li>
            <a href="https://www.oslo.kommune.no/politikk-og-administrasjon/statistikk/statistiske-publikasjoner/">
              Oslo kommunes statistiske publikasjoner
            </a>
          </li>
          <li><a href="https://www.ssb.no/">Statistisk sentralbyrå</a></li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style lang="scss">
@use '@/styles/colors' as *;
@use '@/styles/variables' as *;

.footer {
  margin-bottom: 3rem;
  padding: 1rem;
  color: $color-grey-800;

  @media screen and (min-width: $break-md) {
    padding: 2rem;
  }

  a {
    color: $color-grey-900;
    font-weight: 500;
    text-decoration: underline;
  }

  .columns {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 1.5rem 0.5rem;
    border-top: 1px solid $color-grey-100;

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
    padding: 0;
    list-style-type: none;
  }

  li {
    margin: 0 0 1em;
  }
}
</style>
