import { Plugin, UnwrapNestedRefs, reactive } from "vue";
import { Translator } from "../translation";

const translationPlugin: Plugin = {
  install: (app, options) => {
    const translator = reactive(new Translator(options));
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
