import {
  Request,
  Credential as PackageCredential,
} from "@henrotaym/api-client";

class Credential extends PackageCredential {
  /**
   * Preparing given request.
   * @param {import('@henrotaym/api-client').Request} request
   */

  prepare(request: Request): void {
    request.setBaseUrl("https://translations.trustup.io");
    request.addHeaders({ Accept: "application/json" });
  }
}

export default Credential;
