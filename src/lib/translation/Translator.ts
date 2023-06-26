import { Translation } from "../api/endpoints";
import { AvailableLocale, Messages, TranslationConstructor } from "../types";
import { Loader } from "@henrotaym/helpers";

class Translator {
  private _loader;
  private _endpoint;
  private _appName: string;
  private _i18n;

  constructor({ i18n, appName }: TranslationConstructor) {
    this._endpoint = new Translation();
    this._loader = new Loader(true);
    this._appName = appName;
    this._i18n = i18n;
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

  public get currentLocale() {
    return this._i18n.global.locale;
  }

  public getCurrentLocale() {
    return this.currentLocale;
  }

  public get availableLocales() {
    return this._i18n.global.availableLocales;
  }

  public getAvailableLocales() {
    return this.availableLocales;
  }

  public setCurrentLocale(locale: AvailableLocale) {
    this._i18n.global.locale = locale;
  }

  public async addTranslationsByKey(appKey: string) {
    const messages: Messages = await this._endpoint.index(appKey);
    if (!messages) return;
    const locales = Object.keys(messages);
    locales.forEach((locale) =>
      this._i18n.global.mergeLocaleMessage(locale, {
        [appKey]: messages[locale],
      })
    );
  }

  private async setMessages() {
    const messages: Messages = await this._endpoint.index(this._appName);
    if (!messages) return;
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
