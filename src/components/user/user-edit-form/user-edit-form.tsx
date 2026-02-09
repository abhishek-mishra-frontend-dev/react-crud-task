/** Local Imports */
import type { FormValues } from "../../../types/form";
import { UserFormSchema } from "../../../schema/user-form-schema";

/** Components */
import UserForm from "../user-form/user-form";

/** Props */
type Props = {
    isOpen: boolean;
    onClose: () => void;
    defaultValues: FormValues;
    onSubmit: (data: FormValues) => void;
    loading?: boolean;
};

const UserEditForm = ({ isOpen, onClose, defaultValues, onSubmit, loading }: Props) => {

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/20 flex items-center justify-center z-50">
            <div className="bg-white w-[420px] rounded-2xl shadow-lg p-6 relative">
                <div className="flex flex-col gap-1 border-b pb-4 mb-4 border-black/10">
                    <p className="text-xl font-semibold text-black leading-none">Edit User</p>
                    <p className="text-sm text-gray-dark">Update the user information and save changes.</p>
                </div>
                <UserForm
                    schema={UserFormSchema}
                    defaultValues={defaultValues}
                    onSubmit={(data) => {
                        onSubmit(data);
                        onClose();
                    }}
                    onCancel={onClose}
                    loading={loading}
                    layout="column"
                />
            </div>
        </div>
    );
}
export default UserEditForm;