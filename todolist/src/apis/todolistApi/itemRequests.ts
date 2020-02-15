import { axios, getAccessToken, getHeaders } from "./utils";
import { CreateItemsType, TodoItemPropertiesType } from "../../types/types";

export const GetAllItems = (data: Object) =>
  getAccessToken()
    .then((token: string) => {
      return axios().post("/items/all", data, getHeaders(token));
    })
    .catch((error: any) => {
      throw error;
    });

export const GetSharedItems = () =>
  getAccessToken()
    .then((token: string) => {
      return axios().get("/items/shared", getHeaders(token));
    })
    .catch((error: any) => {
      throw error;
    });

export const GetItem = (id: number) =>
  getAccessToken()
    .then((token: string) => {
      return axios().get(`/items/${id}`, getHeaders(token));
    })
    .catch((error: any) => {
      throw error;
    });

export const AddItem = (data: CreateItemsType) =>
  getAccessToken()
    .then((token: string) => {
      return axios().post(`/items/add/${data.listId}`, data, getHeaders(token));
    })
    .catch((error: any) => {
      throw error;
    });

export const UpdateItem = (data: TodoItemPropertiesType, id: number) =>
  getAccessToken()
    .then((token: string) => {
      return axios().put(`/items/update/${id}`, data, getHeaders(token));
    })
    .catch((error: any) => {
      throw error;
    });

export const DeleteItem = (id: number) =>
  getAccessToken()
    .then((token: string) => {
      return axios().delete(`/items/delete/${id}`, getHeaders(token));
    })
    .catch((error: any) => {
      throw error;
    });

export const ShareToggleItem = (id: number) =>
  getAccessToken()
    .then((token: string) => {
      return axios().put(`/items/toggle/share/${id}`, {}, getHeaders(token));
    })
    .catch((error: any) => {
      throw error;
    });

export const CompleteToggleItem = (id: number) =>
  getAccessToken()
    .then((token: string) => {
      return axios().put(`/items/toggle/complete/${id}`, {}, getHeaders(token));
    })
    .catch((error: any) => {
      throw error;
    });
