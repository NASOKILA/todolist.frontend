import Axios from "axios";
import { todoListApiHost } from "../apiHost";

export const getAccessToken = (): Promise<string> => {
  return new Promise((resolve, reject) => {
    let authToken = sessionStorage.getItem("AuthToken");
    authToken !== null && resolve(authToken);
  });
};

export const axios = () =>
  Axios.create({
    baseURL: todoListApiHost,
    timeout: 30000
  });

export const getHeaders: Function = (token: string): Object => {
  return {
    headers: {
      Authorization: `Bearer ${token}`,
      ContentType: "application/json",
      "Access-Control-Allow-Origin": "*"
    }
  };
};
