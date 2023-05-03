import { Client, Request } from "@henrotaym/api-client";
import { TranslationCredential } from "../../credentials";

class Translation {
  private client: Client;

  constructor() {
    this.client = new Client().setCredential(new TranslationCredential());
  }

  public async index(appName: string) {
    const request = new Request()
      .setVerb("GET")
      .setUrl(`${appName}/translations.json`);
    const response = await this.client.try(request);

    if (response.failed()) return;

    return response.get();
  }
}
export default Translation;
