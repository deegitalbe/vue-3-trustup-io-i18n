import { Plugin } from "vue";
import { ReactiveTranslator, TranslationOptions } from "../types";
import { I18nFactory, ReactiveTranslatorFactory } from "../factories";

declare global {
  interface Window {
    translationPlugin: {
      translator: ReactiveTranslator;
    };
  }
}

declare module "vue" {
  interface ComponentCustomProperties {
    $translator: ReactiveTranslator;
  }
}

const translationPlugin: Plugin<TranslationOptions> = {
  install: (app, options) => {
    const i18nFactory = new I18nFactory();
    const translatorFactory = new ReactiveTranslatorFactory();
    const i18n = i18nFactory.create();
    app.use(i18n);
    const translator = translatorFactory.create({ ...options, i18n });
    window.translationPlugin = { translator: translator };
    app.config.globalProperties.$translator = translator;
    translator.init();
  },
};

export default translationPlugin;
