import { Plugin } from "vue";
import translationPlugin from "./translationPlugin";

const runtimePlugin: Plugin = {
  install: (app, options) => {
    app.use(translationPlugin, options);
  },
};

export default runtimePlugin;
