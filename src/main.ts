import { createApp } from "vue";
import App from "./App.vue";
import "./main.css";
import { i18n } from "./lib";

createApp(App).use(i18n).mount("#app");
