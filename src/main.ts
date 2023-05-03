import { createApp } from "vue";
import App from "./App.vue";
import "./main.css";
// import translationPlugin from "./lib/plugins/translationPlugin";
import { Translator } from "./lib";

const translator = new Translator(import.meta.env.VITE_APP_NAME);

await translator.check();

createApp(App).use(translator.i18n).mount("#app");
