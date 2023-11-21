import { computed, reactive } from "vue";
import { TranslationConstructor } from "../types";
import TranslatorFactory from "./TranslatorFactory";
import ReactiveLoaderFactory from "./ReactiveLoaderFactory";

class ReactiveTranslatorFactory {
  private translatorFactory;
  private loaderFactory;
  public constructor() {
    this.translatorFactory = new TranslatorFactory();
    this.loaderFactory = new ReactiveLoaderFactory();
  }
  public create(options: TranslationConstructor) {
    const translator = reactive(this.translatorFactory.create(options));
    const loader = this.loaderFactory.create(translator.loader);

    return {
      loader: loader,
      isLoading: loader.isLoading,
      t: translator.t.bind(translator),
      getCurrentLocale: translator.getCurrentLocale.bind(translator),
      currentLocale: computed(() => translator.currentLocale),
      getAvailableLocales: translator.getAvailableLocales.bind(translator),
      availableLocales: computed(() => translator.availableLocales),
      groupedLocales: computed(() => translator.groupedLocales),
      setCurrentLocale: translator.setCurrentLocale.bind(translator),
      addTranslationsByKey: translator.addTranslationsByKey.bind(translator),
      init: translator.init.bind(translator),
      toggleShowKey: translator.toggleShowKey.bind(translator),
    };
  }
}

export default ReactiveTranslatorFactory;
