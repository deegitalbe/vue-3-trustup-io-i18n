export interface TranslationOptions {
  appName: string;
}

export interface Messages {
  [key: string]: any;
}

export enum AvailableLocales {
  FRENCH = "fr",
  ENGLISH = "en",
  NETHERLAND = "nl",
  DEUTSCHLAND = "de",
}
