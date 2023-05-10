import useTranslation from "./useTranslation";

const useTranslate = (key: string) => {
  const traduction = useTranslation().t(key);

  return traduction;
};

export default useTranslate;
