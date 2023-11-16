import { Client, Request } from "@henrotaym/api-client";
import { TranslationCredential } from "../../credentials";

class Locales {
  private client: Client;

  constructor() {
    this.client = new Client().setCredential(new TranslationCredential());
  }

  public async index() {
    const request = new Request().setVerb("GET").setUrl("api/locales");

    const response = await this.client.try(request);

    if (response.failed()) return;

    return response.get();
  }
}

export default Locales;
