import { UnwrapNestedRefs } from "vue";
import { Translator } from "../translation";
import useTranslationConfig from "./useTranslationConfig";

const useTranslation = () => {
  const config = useTranslationConfig();
  return config.translator as UnwrapNestedRefs<Translator>;
};

export default useTranslation;
