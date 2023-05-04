import { JsonCredential, Request } from "@henrotaym/api-client";

class Credential extends JsonCredential {
  /**
   * Preparing given request.
   * @param {import('@henrotaym/api-client').Request} request
   */

  prepare(request: Request<any>): void {
    super.prepare(request);
    request.setBaseUrl("https://translations.trustup.io");
  }
}

export default Credential;
