import { Locales, Translation } from "../api/endpoints";
import {
  AvailableLocale,
  LocaleI,
  Messages,
  TranslationConstructor,
} from "../types";
import { Loader } from "@henrotaym/helpers";

class Translator {
  private _loader;
  private _endpoint;
  private _localeEndpoint;
  private _appName: string;
  private _i18n;
  private _availableLocales: LocaleI[] = [];

  constructor({ i18n, appName }: TranslationConstructor) {
    this._endpoint = new Translation();
    this._localeEndpoint = new Locales();
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

  public async setAvailableLocales() {
    const locales = await this._localeEndpoint.index();
    if (!locales) return;

    this._availableLocales = locales;
  }

  public get availableLocales() {
    return this._availableLocales;
  }

  public getAvailableLocales() {
    return this.availableLocales;
  }

  public get groupedLocales() {
    return this.getGroupedByCountryLocales();
  }

  public getGroupedByCountryLocales() {
    const locales = this.availableLocales;

    const grouped: Record<string, LocaleI[]> = {};
    for (const locale of locales) {
      const country = locale.country;

      if (!grouped[country]) {
        grouped[country] = [];
      }

      grouped[country].push(locale);
    }

    return grouped;
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
    await this.setAvailableLocales();
    return this._loader.loadTill(() => this.setMessages());
  }
}
export default Translator;
