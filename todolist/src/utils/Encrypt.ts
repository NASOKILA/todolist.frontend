import { UserDataType } from "../types/types";

var CryptoJS = require("crypto-js");

export const encrypt = (userDetails: UserDataType): any => {
  let userData = CryptoJS.AES.encrypt(
    JSON.stringify(userDetails),
    "bg9212060000"
  );
  return userData;
};

export const decript = (): UserDataType => {
  // Decrypt
  let userData: any = localStorage.getItem("UserData");
  let bytes = CryptoJS.AES.decrypt(userData.toString(), "bg9212060000");
  let plaintext = bytes.toString(CryptoJS.enc.Utf8);

  let result: UserDataType = JSON.parse(plaintext);
  return result;
};
