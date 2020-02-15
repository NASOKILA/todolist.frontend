import { UserDetailsAuthDataType, UserDataType } from "../types/types";
import { encrypt, decript } from "./Encrypt";

export const isUserAdmin: Function = (): Boolean => {
  if (!isUserLoggedIn()) return false;
  const userData: UserDataType = decript();
  return userData.isAdmin;
};

export const isUserLoggedIn: Function = (): Boolean => {
  let authTokenExists: boolean = sessionStorage.getItem("AuthToken") !== null;
  let tokenExpirationTimeExists: boolean =
    sessionStorage.getItem("TokenExpirationTime") !== null;
  let uniqueTokenExists: boolean =
    sessionStorage.getItem("UniqueToken") !== null;

  let userDataExists: boolean = localStorage.getItem("UserData") !== null;

  if (
    authTokenExists &&
    tokenExpirationTimeExists &&
    uniqueTokenExists &&
    userDataExists
  ) {
    return true;
  }

  return false;
};

export const getUserUniqueToken: Function = (): string => {
  let uniqueToken: string | null = sessionStorage.getItem("UniqueToken");

  if (!uniqueToken) {
    return "User not logged in";
  }
  return uniqueToken;
};

export const isCurrentUser: Function = (email: string): Boolean => {
  const userData: UserDataType = decript();

  if (userData.email === email) {
    return true;
  }

  return false;
};

export const userLogout: Function = (): void => {
  localStorage.clear();
  sessionStorage.clear();
};

export const userLogin: Function = (
  userDetailsData: UserDetailsAuthDataType
): void => {
  // Encrypt
  let userDetails: UserDataType = userDetailsData.userData;
  let encriptedString: any = encrypt(userDetails);

  localStorage.clear();
  localStorage.setItem("UserData", encriptedString);

  sessionStorage.clear();
  sessionStorage.setItem("AuthToken", userDetailsData.authData.token);
  sessionStorage.setItem(
    "TokenExpirationTime",
    userDetailsData.authData.tokenExpirationTime
  );
  sessionStorage.setItem("UniqueToken", userDetailsData.authData.uniqueToken);
};
