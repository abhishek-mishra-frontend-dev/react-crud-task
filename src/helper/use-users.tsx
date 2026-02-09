/** React Imports */
import { useEffect, useState } from "react";

/** Library Imports */
import toast from "react-hot-toast";

/** Local Imports */
import type { FormValues } from "../types/form";
import {
  createUser,
  deleteUser,
  getUsers,
  updateUser,
} from "../api/user-api";

/** Export Custom Hook */
const UseUsers = () => {

  const [users, setUsers] = useState<FormValues[]>([]);
  const [editRow, setEditRow] = useState<FormValues | null>(null);
  const [deleteRow, setDeleteRow] = useState<FormValues | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  /** Fetch All Users */
  const fetchUsers = async () => {
    try {
      setLoading(true);
      const data = await getUsers();
      setUsers(data);
    } catch {
      toast.error("Failed to fetch users");
    } finally {
      setLoading(false);
    }
  };

  /** Initial Load */
  useEffect(() => {
    fetchUsers();
  }, []);

  /** Create User */
  const handleAdd = async (data: FormValues) => {
    try {
      setLoading(true);
      await createUser(data);
      toast.success("User added successfully");
      fetchUsers();
    } catch {
      toast.error("Failed to add user");
    } finally {
      setLoading(false);
    }
  };

  /** Open Edit Popup */
  const handleEdit = (row: FormValues) => {
    setEditRow(row);
    setIsModalOpen(true);
  };

  /** Update User */
  const handleUpdate = async (data: FormValues) => {
    if (!editRow?.id) return;

    try {
      setLoading(true);
      await updateUser(editRow.id, data);
      toast.success("User updated successfully");
      setIsModalOpen(false);
      fetchUsers();
    } catch {
      toast.error("Failed to update user");
    } finally {
      setLoading(false);
    }
  };

  /** Delete User Confirmation */
  const confirmDelete = async () => {
    if (!deleteRow?.id) return;

    try {
      setLoading(true);
      await deleteUser(deleteRow.id);
      toast.success("User deleted successfully");
      setDeleteRow(null);
      fetchUsers();
    } catch {
      toast.error("Failed to delete user");
    } finally {
      setLoading(false);
    }
  };

  return {
    users, loading, editRow, deleteRow, isModalOpen, setDeleteRow, setIsModalOpen, 
    handleAdd, handleEdit, handleUpdate, confirmDelete,
  };
}

export default UseUsers;