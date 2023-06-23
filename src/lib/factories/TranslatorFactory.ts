import { Translator } from "../translation";
import { TranslationConstructor } from "../types";

class TranslatorFactory {
  public create(options: TranslationConstructor) {
    return new Translator(options);
  }
}
export default TranslatorFactory;
