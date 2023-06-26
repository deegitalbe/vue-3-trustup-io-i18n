import { UnwrapNestedRefs, computed } from "vue";
import { Loader } from "@henrotaym/helpers";

class ReactiveLoaderFactory {
  public create(loader: UnwrapNestedRefs<Loader>) {
    return {
      load: loader.load.bind(loader),
      stop: loader.stop.bind(loader),
      loadTill: loader.loadTill.bind(loader),
      setLoadingStatus: loader.setLoadingStatus.bind(loader),
      isLoading: computed(() => loader.isLoading),
    };
  }
}

export default ReactiveLoaderFactory;
