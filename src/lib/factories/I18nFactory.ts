import { createI18n } from "vue-i18n";

class I18nFactory {
  public create() {
    return createI18n({
      locale: "fr",
      fallbackLocale: "fr",
      messages: { fr: {}, en: {}, de: {}, nl: {} },
    });
  }
}
export default I18nFactory;
