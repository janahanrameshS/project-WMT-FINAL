import axios from "axios";

const API = axios.create({
  baseURL: "https://project-wmt-final-production.up.railway.app/api/items",
});

export const getItems = () => API.get("/");
export const getItemById = (id) => API.get(`/${id}`);
export const createItem = (itemData) => API.post("/", itemData);
export const updateItem = (id, itemData) => API.put(`/${id}`, itemData);
export const deleteItem = (id) => API.delete(`/${id}`);

export default API;