import { expect, test } from "vitest";
import fetch from "node-fetch";
global.fetch = fetch;

import { Translator } from "../lib";

test("Translation have data", async () => {
  const translation = new Translator({
    appName: "trustup-pro",
  });

  await translation.init();

  await translation.addTranslationsByKey("worksite-admin");

  expect(translation.i18n.global.messages.fr).toHaveProperty("worksite-admin");
});

test("Translation doesnt freeze when false appName init", async () => {
  const translation = new Translator({
    appName: "testastos",
  });

  const initialValue = { fr: {}, en: {}, de: {}, nl: {} };

  await translation.init();

  expect(translation.i18n.global.messages).toEqual(initialValue);
});

test("Translation doesnt freeze when false appName add", async () => {
  const translation = new Translator({
    appName: "trustup-pro",
  });

  await translation.init();

  const initialValue = { ...translation.i18n.global.messages };

  await translation.addTranslationsByKey("testatos");

  expect(translation.i18n.global.messages).toEqual(initialValue);
});
