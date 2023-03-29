<template>
  <div class="overlay">
    <div class="modal">
      <div class="modal__header">
        <h1>{{ $t('modal.header') }}</h1>
        <button
          class="modal__header__icon"
          tabindex="1"
          title="Lukk modal"
          aria-label="Lukk modal"
          @click="$emit('close')"
        >
          <ok-icon icon-ref="close" :options="{ margin: '16px' }"></ok-icon>
        </button>
      </div>

      <div class="modal__main">
        <h4>{{ $t('modal.subheader') }}</h4>
        {{ $t('modal.main') }}
      </div>

      <div class="modal__footer">
        <ul>
          <li>
            <a
              class="modal__footer--link"
              href="https://www.google.com/intl/no/chrome/"
              target="_blank"
              rel="noopener noreferrer"
              tabindex="1"
              >{{ $t('modal.footer.download', { browser: 'Chrome' }) }}</a
            >
            <ok-icon icon-ref="new-window-small" :options="{ size: 'tiny' }"></ok-icon>
          </li>
          <li>
            <a
              class="modal__footer--link"
              href="https://support.microsoft.com/nb-no/help/4501095/download-the-new-microsoft-edge-based-on-chromium"
              target="_blank"
              rel="noopener noreferrer"
              tabindex="1"
              >{{ $t('modal.footer.download', { browser: 'Edge' }) }}</a
            >
            <ok-icon icon-ref="new-window-small" :options="{ size: 'tiny' }"></ok-icon>
          </li>
          <li>
            <a
              class="modal__footer--link"
              href="https://www.mozilla.org/nb-NO/firefox/new/"
              target="_blank"
              rel="noopener noreferrer"
              tabindex="1"
              >{{ $t('modal.footer.download', { browser: 'Firefox' }) }}</a
            >
            <ok-icon icon-ref="new-window-small" :options="{ size: 'tiny' }"></ok-icon>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import OkIcon from './OkIcon.vue';

export default {
  name: 'Modal',

  components: {
    OkIcon,
  },

  methods: {
    close() {
      this.$emit('close');
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/styles/_colors.scss';

.overlay {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background: rgba(black, 0.5);
}

.modal {
  z-index: 100;
  display: flex;
  flex-direction: column;

  width: 100%;
  max-width: 535px;
  overflow: hidden;
  background: $color-light-blue;
  border-radius: 3px;
  box-shadow: 0 0.25rem 0.45rem rgba(black, 0.5);

  &__header {
    position: relative;
    display: flex;
    align-items: center;
    padding: 30px 40px 0.5rem 40px;

    .btn {
      margin: 0;
      padding: 0 1.15rem;
    }

    .fa {
      margin: 0;
      font-size: inherit;
    }

    .title-2 {
      margin-right: auto;
      font-size: inherit;
    }

    &__icon {
      position: absolute;
      top: 16px;
      right: 0;
      cursor: pointer;
    }
  }

  &__main {
    display: flex;
    flex-direction: column;
    padding: 0 40px 1rem;
  }

  &__footer {
    display: flex;
    padding: 1rem 40px 30px;
    font-size: 12px;

    &--link {
      color: $color-grey-900;
      font-weight: 500;
      text-decoration: underline;
    }
  }
}
</style>
