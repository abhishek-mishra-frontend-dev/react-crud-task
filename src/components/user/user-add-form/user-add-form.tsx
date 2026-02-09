/** Local Imports */
import type { FormValues } from "../../../types/form";
import { UserFormSchema } from "../../../schema/user-form-schema";

/** Components */
import UserForm from "../user-form/user-form";

/** Props */
type Props = {
    onSubmit: (data: FormValues) => void;
    defaultValues?: FormValues;
    loading?: boolean;
};

/** Main Export */
const UserAddForm = ({ onSubmit, defaultValues, loading }: Props) => {

    return (
        <div className="bg-gray-light p-8 rounded-3xl shadow-minimal">
            <div className="flex flex-col gap-1 mb-4">
                <p className="text-xl font-semibold text-black-accent leading-none">Add New User</p>
                <p className="text-md text-black-accent">fill in the details below to create a new user record.</p>
            </div>
            <UserForm
                schema={UserFormSchema}
                defaultValues={defaultValues}
                onSubmit={(data) => {
                    onSubmit(data);
                }}
                layout="row"
                loading={loading}
            />
        </div>
    )
}

export default UserAddForm