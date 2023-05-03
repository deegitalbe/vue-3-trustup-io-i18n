import { UnwrapNestedRefs, getCurrentInstance } from "vue";
import { Translator } from "../translation";

const useTranslation = () => {
  const instance = getCurrentInstance();

  return instance?.appContext.config.globalProperties
    .$trustupT as UnwrapNestedRefs<Translator>;
};

export default useTranslation;
