import { createI18n } from "vue-i18n";
import { Translation } from "../api/endpoints";
import { Messages, TranslationOptions } from "../types";

class Translator {
  private _isLoading: boolean;
  private _endpoint;
  private _appName: string;
  private _i18n;

  constructor(options: TranslationOptions) {
    this._isLoading = true;
    this._endpoint = new Translation();
    this._appName = options.appName;
    this._i18n = createI18n({
      locale: "fr",
      fallbackLocale: "fr",
      messages: { fr: {}, en: {}, de: {}, nl: {} },
    });
  }

  public get isLoading() {
    return this._isLoading;
  }

  public get i18n() {
    return this._i18n;
  }

  private async setMessages() {
    const messages: Messages = await this._endpoint.index(this._appName);
    const locales = Object.keys(messages);
    locales.forEach((locale) =>
      this._i18n.global.setLocaleMessage(locale, messages[locale])
    );
  }

  public async init() {
    this._isLoading = true;
    await this.setMessages();
    this._isLoading = false;
  }
}
export default Translator;
