import { axios, getAccessToken, getHeaders } from "./utils";
import { TodoListPropertiesType } from "../../types/types";

export const GetMyLists = (uniqueToken: string) =>
  getAccessToken()
    .then((token: string) => {
      return axios().get(`/lists/mylists/${uniqueToken}`, getHeaders(token));
    })
    .catch((error: any) => {
      throw error;
    });

export const GetList = (id: number) =>
  getAccessToken()
    .then((token: string) => {
      return axios().get("/lists/" + id, getHeaders(token));
    })
    .catch((error: any) => {
      throw error;
    });

export const AddList = (uniqueToken: string, data: TodoListPropertiesType) =>
  getAccessToken()
    .then((token: string) => {
      return axios().post(`/lists/${uniqueToken}`, data, getHeaders(token));
    })
    .catch((error: any) => {
      throw error;
    });

export const UpdateList = (data: TodoListPropertiesType, id: number) =>
  getAccessToken()
    .then((token: string) => {
      return axios().put("/lists/" + id, data, getHeaders(token));
    })
    .catch((error: any) => {
      throw error;
    });

export const DeleteList = (id: number) =>
  getAccessToken()
    .then((token: string) => {
      return axios().delete("/lists/" + id, getHeaders(token));
    })
    .catch((error: any) => {
      throw error;
    });
