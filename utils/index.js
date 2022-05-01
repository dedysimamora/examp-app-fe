import CryptoJS from "crypto-js";
export const encrypt = (string) => {
  return CryptoJS.AES.encrypt(string, "secret key 123").toString();
};

export const decrypt = (chiper) => {
  let bytes = CryptoJS.AES.decrypt(chiper, "secret key 123");
  let originalText = bytes.toString(CryptoJS.enc.Utf8);
  return originalText;
};
