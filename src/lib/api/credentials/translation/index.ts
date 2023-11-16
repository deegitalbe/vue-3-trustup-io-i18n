import FileCredential from "./FileCredential";
import Credential from "./Credential";
const translationCredential = { default: new FileCredential() };

export { FileCredential as TranslationFileCredential };
export { Credential as TranslationCredential };
export default translationCredential;
