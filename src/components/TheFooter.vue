<template>
  <footer class="footer">
    <div class="columns">
      <div class="column">
        <h3>Bydelsfakta</h3>
        <p>
          Bydelsfakta blir publisert av <a href="#">Seksjon for Plan og Strategi</a> i Oslo kommune og er utviklet av
          <a href="#">Oslo Origo</a>.
        </p>
      </div>
      <div class="column">
        <h3>Noe du lurer på?</h3>
        <p>
          Dette nettstedet er under utvikling. Har du innspill eller noe du lurer på setter vi stor pris på
          tilbakemelding til
          <a href="mailto:bydelsfakta@oslo.kommune.no">bydelsfakta@oslo.kommune.no</a>
        </p>
      </div>
      <div class="column">
        <h3>Se også</h3>
        <ul>
          <li><a href="#">Statistikkbanken</a></li>
          <li><a href="#">Statistiske publikasjoner</a></li>
          <li><a href="#">Statistisk sentralbyrå</a></li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import '../styles/_variables';
@import '../styles/_colors';

.footer {
  padding: 1rem;
  margin-bottom: 3rem;
  color: $color-grey-500;
  font-size: 0.9em;

  @media screen and (min-width: $break-md) {
    padding: 2rem;
  }

  a {
    color: $color-grey-500;
    font-weight: 500;
    text-decoration: underline;
  }
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
  padding: 1rem 1rem 0 0;
  @media screen and (min-width: $break-lg) {
    padding: 1rem 2.5rem 0 0;
  }
}

ul {
  padding: 0;
  list-style-type: none;
}

li {
  margin: 0;
}
</style>
