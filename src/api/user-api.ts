import axios from "axios";
import type { FormValues } from "../types/form";

const BASE_URL =
  import.meta.env.VITE_API_URL ||
  "https://my-json-server.typicode.com/abhishek-mishra-frontend-dev/react-crud-task/users";

export const getUsers = async () => {
  const res = await axios.get<FormValues[]>(BASE_URL);
  return res.data;
};

export const createUser = async (data: FormValues) => {
  const res = await axios.post(BASE_URL, data);
  return res.data;
};

export const updateUser = async (id: number, data: FormValues) => {
  const res = await axios.put(`${BASE_URL}/${id}`, data);
  return res.data;
};

export const deleteUser = async (id: number) => {
  await axios.delete(`${BASE_URL}/${id}`);
};