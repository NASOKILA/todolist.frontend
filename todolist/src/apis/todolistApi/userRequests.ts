import { axios, getAccessToken, getHeaders } from "./utils";
import { UserEditType } from "../../types/types";

export const GetAllUsers = () =>
  getAccessToken()
    .then((token: string) => {
      return axios().get("/users/all", getHeaders(token));
    })
    .catch((error: any) => {
      throw error;
    });

export const GetUserById = (id: number) =>
  getAccessToken()
    .then((token: string) => {
      return axios().get(`/users/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          ContentType: "text"
        }
      });
    })
    .catch((error: any) => {
      throw error;
    });

export const AddUser = (data: Object) =>
  getAccessToken()
    .then((token: string) => {
      return axios().post("/users/add/", data, getHeaders(token));
    })
    .catch((error: any) => {
      throw error;
    });

export const UpdateUser = (data: UserEditType, id: number) =>
  getAccessToken()
    .then((token: string) => {
      return axios().put("/users/update/" + id, data, getHeaders(token));
    })
    .catch((error: any) => {
      throw error;
    });

export const DeleteUser = (id: number) =>
  getAccessToken()
    .then((token: string) => {
      return axios().delete("/users/delete/" + id, getHeaders(token));
    })
    .catch((error: any) => {
      throw error;
    });

export const ToggleUserAdmin = (data: Object) =>
  getAccessToken()
    .then((token: string) => {
      return axios().put("/users/toggle/admin/", data, getHeaders(token));
    })
    .catch((error: any) => {
      throw error;
    });
