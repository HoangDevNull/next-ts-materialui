import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';
import { __prod__ } from './constants';

export const initI18n = () => {
  i18n
    // import & load translations from -> /public/locales
    .use(Backend)
    // https://github.com/i18next/i18next-browser-languageDetector
    .use(LanguageDetector)
    // pass the i18n instance to react-i18next.
    .use(initReactI18next)
    // init i18next
    // see opts @ https://www.i18next.com/overview/configuration-options
    .init({
      fallbackLng: 'de',
      supportedLngs: ['en', 'de'],
      load: 'languageOnly', // we only provide en, de -> no region specific locals like en-US, de-DE
      // have a common namespace used around the full app
      //   debug: !__prod__,
      saveMissing: true,
      interpolation: {
        escapeValue: false,
        format: (value, format, lng) => {
          if (format === 'uppercase') return value.toUpperCase();
          return value;
        },
      },
      react: {
        useSuspense: false, // fixes 'no fallback UI was specified' in react i18next when using hooks
      },
    });
};
