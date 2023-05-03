import { createApp } from "vue";
import App from "./App.vue";
import "./main.css";
import { translationPlugin } from "./lib/plugins";

const app = createApp(App);

app.use(translationPlugin, { appName: import.meta.env.VITE_APP_NAME });

app.mount("#app");
