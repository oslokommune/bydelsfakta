<template>
  <div class="uxsignals-wrapper" data-uxsignals-embed="panel-ikxmf8p595" :data-uxsignals-mode="mode"></div>
</template>

<script>
export default {
  name: 'UxSignals',

  computed: {
    mode() {
      return import.meta.env.PROD ? '' : 'demo';
    },
  },

  mounted() {
    const uxSignalsScript = document.createElement('script');
    uxSignalsScript.async = true;
    uxSignalsScript.src = 'https://uxsignals-frontend.uxsignals.app.iterate.no/embed.js';
    document.head.appendChild(uxSignalsScript);
  },
};
</script>

<style lang="scss" scoped>
@use '@/styles/colors' as *;
@use '@/styles/variables' as *;

.uxsignals-wrapper {
  flex: 2 1 800px;
}

:deep(.uxsignals-container) {
  margin: 1rem;
  padding: 1.5rem;
  color: $color-purple;
  font-family: 'OsloSans', serif !important;
  background-color: #ffffff;
  border: 0;
  border-radius: 0;

  @media screen and (min-width: $break-md) {
    margin-right: 1.5rem;
    margin-left: 1.5rem;
  }

  @media screen and (min-width: $break-lg) {
    margin-right: 2rem;
    margin-left: 2rem;
  }
}

:deep(.uxsignals-embed > div) {
  padding: 0;
}

:deep(.uxsignals-header) {
  h2 {
    font-weight: 500;
    font-size: $font-large;
  }
}

:deep(.uxsignals-description) {
  p {
    font-size: $font-body;
  }
}

:deep(.uxsignals-cta-container) {
  margin: 0;

  button {
    padding: 16px;
    color: #ffffff;
    background-color: $color-purple;
    border-radius: 0;

    span {
      font-weight: 500;
      font-size: $font-body;
    }

    &:hover {
      background-color: #1f42aa;
      outline: 0;

      span {
        text-decoration: underline;
        text-underline-offset: 0.3em;
      }
    }

    &:focus {
      background-color: #1f42aa;
      outline-color: #e0adff;
    }

    &:active {
      outline: 0;

      span {
        text-decoration: none;
      }
    }
  }
}
</style>
