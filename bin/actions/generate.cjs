const { useCurrentPath, useSentence } = require("@henrotaym/scaffolding-utils");
const fetch = require("node-fetch");
const { outputJson } = require("fs-extra");
const { trying } = require("../helpers/index.cjs");

async function generate() {
  const appName = process.env.NUXT_PUBLIC_APP_NAME;
  const filePath = useCurrentPath("public", `${appName}.json`);
  
  const [apiResponse, apiError] = await trying(fetch(`https://translations.trustup.io/storage/translations/${appName}.json`));
  if (apiError || !apiResponse.ok) return useSentence(`Unable to retrieve [${appName}] translations file.`);
  
  const [jsonContent] = await trying(apiResponse.json());
  if (!jsonContent) return useSentence(`Empty [${appName}] translations file.`);

  const [, writeError] = await trying(outputJson(filePath, jsonContent));
  if (writeError) return useSentence(`Unable to write to [${filePath}].`);
  
  useSentence(`Successfully wrote [${appName}] translations file to [${filePath}].`);
}

module.exports = generate;