import {resources} from "@/i18n/resource";
import i18n from 'i18next';
import LanguageDetector from "i18next-browser-languagedetector";
import {initReactI18next} from 'react-i18next';
import {i18nextPlugin} from "translation-check";

i18n
  .use(i18nextPlugin)

  // load translation using http -> see /public/locales
  // learn more: https://github.com/i18next/i18next-http-backend
  // .use(Backend)

  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)

  // pass the i18n instance to react-i18next.
  .use(initReactI18next)

  .init({
    // 仅在非生产环境中开启
    debug: process.env.NODE_ENV !== 'production',

    // 默认显示语言
    lng: process.env.VITE_DEFAULT_LANG || 'en',

    // 如果用户语言的翻译不可用时使用的语言。
    fallbackLng: 'en',

    // 命名空间有哪些。如果新增了需要在这里修改
    ns: ['translate', 'common'],

    // 加载策略
    load: 'languageOnly',

    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },

    // 语言包
    resources: resources,
  });

export default i18n;
export const t = i18n.t
