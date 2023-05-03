import { JsonCredential, Request } from "@henrotaym/api-client";

class Credential extends JsonCredential {
  /**
   * Preparing given request.
   * @param {import('@henrotaym/api-client').Request} request
   */

  prepare(request: Request<any>): void {
    super.prepare(request);
    request.setBaseUrl("https://translations.trustup.io").addHeaders({
      "X-Server-Authorization":
        "MIICXQIBAAKBgQChrymGMQpdxskFgRKrehCP2C47ZcTUFY4vHLPMVnDFnKcuMKjGN5tw37ehjPSZAW7T3OfUEGRUlfDPR2XBsmzNeXDAQAB",
    });
  }
}

export default Credential;
