import {
  Request,
  Credential as PackageCredential,
} from "@henrotaym/api-client";

class FileCredential extends PackageCredential {
  /**
   * Preparing given request.
   * @param {import('@henrotaym/api-client').Request} request
   */

  prepare(request: Request): void {
    request.setBaseUrl("https://translations.trustup.io");
  }
}

export default FileCredential;
