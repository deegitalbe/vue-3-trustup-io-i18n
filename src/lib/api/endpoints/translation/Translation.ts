import { Client, Request } from "@henrotaym/api-client";
import { TranslationFileCredential } from "../../credentials";

const fs = require("fs").promises;
const path = require("path");

class Translation {
  private client: Client;

  constructor() {
    this.client = new Client().setCredential(new TranslationFileCredential());
  }

  public async index(appName: string) {
    const request = new Request()
      .setVerb("GET")
      .setUrl(`storage/translations/${appName}.json`);
    const response = await this.client.try(request);

    if (response.failed()) {
      return this.readJsonFile(appName)
        .then((jsonData) => {
          return jsonData;
        })
        .catch((error) => {
          return;
        });
    }

    return response.get();
  }

  private async readJsonFile(appName: string) {
    try {
      // Spécifiez le chemin vers votre fichier JSON à partir de la racine du projet
      const filePath = path.join(process.cwd(), "public", `${appName}.json`);

      // Lisez le fichier JSON de manière asynchrone
      const data = await fs.readFile(filePath, "utf-8");

      // Retournez le contenu JSON
      return JSON.parse(data);
    } catch (error) {
      // En cas d'erreur, rejetez la promesse avec l'erreur
      throw new Error("Erreur lors de la lecture du fichier JSON : ");
    }
  }
}
export default Translation;
