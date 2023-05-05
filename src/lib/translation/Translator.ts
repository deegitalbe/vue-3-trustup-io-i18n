import { createI18n } from "vue-i18n";
import { Translation } from "../api/endpoints";
import { Messages, TranslationOptions } from "../types";
import { Loader } from "@henrotaym/helpers";

class Translator {
  private _loader;
  private _endpoint;
  private _appName: string;
  private _i18n;

  constructor(options: TranslationOptions) {
    this._endpoint = new Translation();
    this._appName = options.appName;
    this._i18n = createI18n({
      locale: "fr",
      fallbackLocale: "fr",
      messages: { fr: {}, en: {}, de: {}, nl: {} },
    });
    this._loader = new Loader(true);
  }

  public get i18n() {
    return this._i18n;
  }

  public get loader() {
    return this._loader;
  }

  public get t() {
    return this._i18n.global.t;
  }

  private async setMessages() {
    const messages: Messages = await this._endpoint.index(this._appName);
    const locales = Object.keys(messages);
    locales.forEach((locale) =>
      this._i18n.global.setLocaleMessage(locale, messages[locale])
    );
  }

  public async init() {
    return this._loader.loadTill(() => this.setMessages());
  }
}
export default Translator;
