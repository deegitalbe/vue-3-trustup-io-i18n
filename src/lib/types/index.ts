import { I18nFactory, ReactiveTranslatorFactory } from "../factories";

export type I18nInstance = ReturnType<I18nFactory["create"]>;

export type TranslationConstructor = {
  appName: string;
  i18n: I18nInstance;
};

export type TranslationOptions = Omit<TranslationConstructor, "i18n">;

export interface Messages {
  [key: string]: string | Messages;
}

type Value<TEnum> = TEnum[keyof TEnum];

export const AVAILABLE_LOCALE = {
  FRENCH: "fr",
  ENGLISH: "en",
  DUTCH: "nl",
  GERMAN: "de",
} as const;

export type AvailableLocale = Value<typeof AVAILABLE_LOCALE>;

export type ReactiveTranslator = ReturnType<
  ReactiveTranslatorFactory["create"]
>;
