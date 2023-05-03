import { Plugin, UnwrapNestedRefs } from "vue";
import { Translator } from "../translation";
import { useTranslation, useTranslationConfig } from "../composables";

const translationPlugin: Plugin = {
  install: (app, options) => {
    const config = useTranslationConfig();
    config.create(options);
    const translator = useTranslation();
    translator.init();
    app.config.globalProperties.$trustupT = translator;
    app.use(translator.i18n);
  },
};

declare module "vue" {
  interface ComponentCustomProperties {
    $trustupT: UnwrapNestedRefs<Translator>;
  }
}

export default translationPlugin;
