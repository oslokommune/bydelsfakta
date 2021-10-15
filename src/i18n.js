import Vue from 'vue';
import VueI18n from 'vue-i18n';
import nb from './locales/nb-NO.json';

Vue.use(VueI18n);

const i18n = new VueI18n({
  locale: import.meta.env.VITE_I18N_LOCALE || 'nb-NO',
  fallbackLocale: import.meta.env.VITE_I18N_FALLBACK_LOCAL || 'nb-NO',
  messages: {
    'nb-NO': nb,
  },
});

export default i18n;
