import { createI18n } from "vue-i18n";

class I18nFactory {
  public create() {
    return createI18n({
      locale: "be-fr",
      fallbackLocale: "be-fr",
      messages: {
        "be-fr": {},
        "be-en": {},
        "be-nl": {},
        "be-de": {},
        "fr-fr": {},
        "fr-en": {},
        "nl-nl": {},
        "nl-en": {},
      },
    });
  }
}
export default I18nFactory;
