import { createI18n } from 'vue-i18n';
import nb from './locales/nb-no.json';

const i18n = createI18n({
  locale: import.meta.env.VITE_I18N_LOCALE || 'nb-no',
  fallbackLocale: import.meta.env.VITE_I18N_FALLBACK_LOCALE || 'nb-no',
  messages: {
    'nb-no': nb,
  },
});

export default i18n;
