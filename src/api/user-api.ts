/** Local Imports */
import type { FormValues } from "../types/form";

/** Library Imports */
import axios from "axios";

/**BASE_URL  */
const BASE_URL =
  import.meta.env.VITE_API_URL ||
  "https://react-crud-task-ezqg.onrender.com/users";

/** Get User Functions */
export const getUsers = async () => {
  const res = await axios.get<FormValues[]>(BASE_URL);
  return res.data;
};

/** Create User Functions */
export const createUser = async (data: FormValues) => {
  const res = await axios.post(BASE_URL, data);
  return res.data;
};

/** Update User Functions */
export const updateUser = async (id: number, data: FormValues) => {
  const res = await axios.put(`${BASE_URL}/${id}`, data);
  return res.data;
};

/** Delete User Functions */
export const deleteUser = async (id: number) => {
  await axios.delete(`${BASE_URL}/${id}`);
};