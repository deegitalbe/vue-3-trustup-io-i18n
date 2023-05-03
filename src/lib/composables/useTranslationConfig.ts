import { reactive } from "vue";
import { TranslatorConfig } from "../translation";

const config = new TranslatorConfig();

const useTranslationConfig = () => {
  return reactive(config);
};
export default useTranslationConfig;
