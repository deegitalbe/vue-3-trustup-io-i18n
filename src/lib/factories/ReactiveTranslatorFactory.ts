import { reactive } from "vue";
import { TranslationConstructor } from "../types";
import TranslatorFactory from "./TranslatorFactory";

class ReactiveTranslatorFactory {
  private factory;
  public constructor() {
    this.factory = new TranslatorFactory();
  }
  public create(options: TranslationConstructor) {
    return reactive(this.factory.create(options));
  }
}

export default ReactiveTranslatorFactory;
