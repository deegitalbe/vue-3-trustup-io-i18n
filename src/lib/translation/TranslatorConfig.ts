import { TranslationOptions } from "../types";
import Translator from "./Translator";

class TranslatorConfig {
  private _translator?: Translator;

  public get translator() {
    return this._translator;
  }

  public create(options: TranslationOptions) {
    this._translator = new Translator(options);
    return this;
  }
}
export default TranslatorConfig;
