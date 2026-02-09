/** Local Imports */
import type { FieldSchema, FormValues } from "../../../types/form";

/** Icons */
import EditIcon from "../../../assets/icons/edit.svg?react";
import DeleteIcon from "../../../assets/icons/delete.svg?react";

/** Components */
import PageSkeleton from "../../common/page-skeleton/page-skeleton";
import NotFound from "../../common/not-found/not-found";

/** Props */
type Props = {
    schema: FieldSchema[];
    data: FormValues[];
    loading: boolean;
    onEdit: (row: FormValues) => void;
    onDelete: (row: FormValues) => void;
};

/** Main Export */
const UserTable = ({
    schema,
    data,
    onEdit,
    onDelete,
    loading,
}: Props) => {
    return (
        <div className="bg-gray-light p-8 rounded-3xl shadow-minimal">
            <div className="flex flex-col mb-6 gap-1">
                <p className="text-xl font-semibold text-black-accent leading-none">Users List</p>
                <p className="text-md text-black-accent">View, edit, and manage all registered users from this table.</p>
            </div>
            <div className="overflow-x-auto border border-black/10 rounded-2xl">
                <table className="min-w-full">
                    <thead className="bg-white-accent">
                        <tr>
                            {schema.map((field) => (
                                <th
                                    key={field.name}
                                    className="text-left text-md px-4 py-2 border-b border-black/5 text-black-accent font-medium"
                                >
                                    {field.label}
                                </th>
                            ))}
                            <th className="text-left px-4 py-2 border-b border-black/5 text-black-accent font-medium">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {loading ? (
                            <tr>
                                <td colSpan={schema.length + 1}>
                                    <PageSkeleton />
                                </td>
                            </tr>
                        ) : data?.length === 0 ? (
                            <tr>
                                <td colSpan={schema.length + 1}>
                                    <NotFound title="No users yet" text="Add your first user using the form above." />
                                </td>
                            </tr>
                        ) : (
                            data.map((row, index) => (
                                <tr key={index} className="border-b border-black/10 bg-white">
                                    {schema.map((field) => (
                                        <td key={field.name} className="px-4 py-2 text-black text-sm">
                                            {row[field.name]}
                                        </td>
                                    ))}
                                    <td className="px-4 py-2 space-x-2">
                                        <button
                                            onClick={() => onEdit(row)}
                                            className="inline-flex items-center gap-1.5 text-black text-sm bg-gray-light px-2.5 py-1 rounded-2xl cursor-pointer"
                                        >
                                            <EditIcon className="w-3 h-3" />
                                            Edit
                                        </button>
                                        <button
                                            onClick={() => onDelete(row)}
                                            className="inline-flex items-center gap-1.5 text-red text-sm bg-red/10 px-2.5 py-1 rounded-2xl cursor-pointer"
                                        >
                                            <DeleteIcon className="w-3.5 h-3.5 fill-red" />
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
export default UserTable;