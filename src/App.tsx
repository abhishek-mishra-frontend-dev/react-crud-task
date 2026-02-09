/** Library Imports */
import { Toaster } from "react-hot-toast";

/** Local Imports */
import { UserFormSchema } from "./schema/user-form-schema";
import UseUsers from "./helper/use-users";
import type { FormValues } from "./types/form";

/** Components */
import UserTable from "./components/user/user-table/user-table";
import UserEditForm from "./components/user/user-edit-form/user-edit-form";
import Header from "./components/common/header/header";
import UserAddForm from "./components/user/user-add-form/user-add-form";
import DeletePopup from "./components/common/delete-popup/delete-popup";

/** Main Export */
function App() {

  /** Custom Hook */
  const { users, loading, editRow, deleteRow, isModalOpen, setDeleteRow,
    setIsModalOpen, handleAdd, handleEdit, handleUpdate, confirmDelete } = UseUsers();

  return (
    <>
      <Toaster position="top-center" />
      <Header />
      <div className="max-w-[1350px] bg-white min-h-screen mx-auto">
        <main className=" pt-[120px] space-y-8 flex flex-col items-start px-4 pb-8">
          <section className="w-full">
            <UserAddForm
              onSubmit={handleAdd}
              defaultValues={emptyValues}
              loading={loading}
            />
          </section>
          <section className="w-full">
            <UserTable
              schema={UserFormSchema}
              data={users}
              onEdit={handleEdit}
              onDelete={(row) => setDeleteRow(row)}
              loading={loading}
            />
          </section>
          <UserEditForm
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            defaultValues={editRow ?? emptyValues}
            onSubmit={handleUpdate}
            loading={loading}
          />
          <DeletePopup
            isOpen={!!deleteRow}
            onCancel={() => setDeleteRow(null)}
            onConfirm={confirmDelete}
            loading={loading}
          />
        </main>
      </div>
    </>
  )
}

export default App

/** Empty Default Values */
const emptyValues: FormValues = {
  first_name: "",
  last_name: "",
  phone: "",
  email: "",
};