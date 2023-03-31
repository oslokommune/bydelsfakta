import Vue from 'vue';
import VueI18n from 'vue-i18n';
import nb from './locales/nb-no.json';

export default function setupI18n() {
  Vue.use(VueI18n);

  return new VueI18n({
    locale: import.meta.env.VITE_I18N_LOCALE || 'nb-no',
    fallbackLocale: import.meta.env.VITE_I18N_FALLBACK_LOCALE || 'nb-no',
    messages: {
      'nb-no': nb,
    },
  });
}
