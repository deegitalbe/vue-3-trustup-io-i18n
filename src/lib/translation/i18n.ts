import { createI18n } from "vue-i18n";
import { Translation } from "../api/endpoints";

// TODO fetch translation with endpoint
const endpoint = new Translation();
const messages = await endpoint.index(import.meta.env.VITE_APP_NAME);
console.log(messages);

export default createI18n({
  locale: "fr",
  fallbackLocale: "fr",
  messages,
});
