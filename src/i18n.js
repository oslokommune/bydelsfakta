import Vue from 'vue';
import VueI18n from 'vue-i18n';

function loadLocaleMessages() {
  const locales = require('./locales/nb-no.json');
  return {
    'nb-no': locales,
  };
}

export default function setupI18n() {
  Vue.use(VueI18n);

  return new VueI18n({
    locale: process.env.VUE_APP_I18N_LOCALE || 'en',
    fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || 'en',
    messages: loadLocaleMessages(),
  });
}
