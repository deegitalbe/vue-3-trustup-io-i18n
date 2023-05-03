import { createI18n } from "vue-i18n";
import { Translation } from "../api/endpoints";

class Translator {
  private _isLoading: boolean;
  private _endpoint;
  private _messages?: any;
  private _appName: string;
  private _i18n: any;

  constructor(appName: string) {
    this._isLoading = true;
    this._endpoint = new Translation();
    this._appName = appName;
  }

  public get isLoading() {
    return this._isLoading;
  }

  public get messages() {
    return this._messages;
  }

  public get i18n() {
    return this._i18n;
  }

  private async setMessages() {
    this._messages = await this._endpoint.index(this._appName);
    this._isLoading = false;
  }

  public async check() {
    await this.setMessages();
    this._i18n = createI18n({
      locale: "fr",
      fallbackLocale: "fr",
      messages: this._messages,
    });
  }
}
export default Translator;
