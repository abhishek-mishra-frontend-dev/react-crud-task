/** Library Imports */
import { useForm } from "react-hook-form";

/** Local Imports */
import type { FieldSchema, FormValues } from "../../../types/form";

/** Components */
import Spinner from "../../common/spinner/spinner";
import CustomInput from "../../form-utilities/custom-input/custom-input";

/** Props */
type Props = {
    schema: FieldSchema[];
    onSubmit: (data: FormValues) => void;
    onCancel?: () => void;
    defaultValues?: FormValues;
    layout?: "row" | "column";
    loading?: boolean;
};

/** Main Export */
const UserForm = ({ schema, onSubmit, onCancel, defaultValues, layout, loading }: Props) => {

    const { handleSubmit, control, reset } = useForm<FormValues>({
        defaultValues,
    });

    return (
        <form
            onSubmit={handleSubmit((data) => {
                onSubmit(data);
                reset();
            })}
            className={
                layout === "row"
                    ? "flex flex-wrap gap-6"
                    : "flex flex-col gap-4"
            }
        >
            {schema.map((field) => (
                <div
                    key={field.name}
                    className={
                        layout === "row" ? "flex-1 min-w-[48%]" : "w-full"
                    }
                >
                    <CustomInput
                        fieldConfig={field}
                        control={control}
                    />
                </div>
            ))}
            <div
                className={`w-full flex justify-end gap-3 ${layout === "column" ? "border-t border-black/10 mt-1 pt-4" : ""
                    }`}
            >
                {
                    layout === "column" && (
                        <button
                            type="button"
                            onClick={onCancel}
                            className="bg-transparent text-black px-10 py-2.5 rounded-3xl cursor-pointer border border-black/20"
                        >
                            Cancel
                        </button>
                    )
                }
                <button
                    type="submit"
                    disabled={loading}
                    className="bg-black text-white px-10 py-2.5 rounded-3xl cursor-pointer inline-flex items-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                    {loading ? <Spinner /> : "Submit"}
                </button>
            </div>
        </form>
    );
}
export default UserForm;