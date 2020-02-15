import { axios } from "./utils";
import {
  LoginCredentialsType,
  RegisterCredentialsType
} from "../../types/types";

export const Login = (data: LoginCredentialsType): any => {
  return axios()
    .post("/auth/login", data, {
      headers: {
        ContentType: "application/json",
        "Access-Control-Allow-Origin": "*"
      }
    })
    .then(res => res)
    .catch(err => {
      throw err;
    });
};

export const Register = (data: RegisterCredentialsType): any => {
  return axios()
    .post("/auth/register", data, {
      headers: {
        ContentType: "application/json",
        "Access-Control-Allow-Origin": "*"
      }
    })
    .then(res => res)
    .catch(err => {
      throw err;
    });
};
