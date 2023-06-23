import useTranslation from "./useTranslation";

const useTranslate = (key: string) => useTranslation().t(key);

export default useTranslate;
