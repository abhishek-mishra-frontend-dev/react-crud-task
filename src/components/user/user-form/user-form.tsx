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
                    ? "flex flex-wrap gap-4 md:gap-6"
                    : "flex flex-col gap-4"
            }
        >
            {schema.map((field) => (
                <div
                    key={field.name}
                    className={
                        layout === "row" ? "w-full md:flex-1 md:min-w-[45%]" : "w-full"
                    }
                >
                    <CustomInput
                        fieldConfig={field}
                        control={control}
                    />
                </div>
            ))}
            <div
                className={`w-full flex flex-col sm:flex-row justify-end gap-3 ${layout === "column" ? "border-t border-black/10 mt-1 pt-4" : ""
                    }`}
            >
                {
                    layout === "column" && (
                        <button
                            type="button"
                            onClick={onCancel}
                            className="w-full sm:w-auto bg-transparent text-black px-10 py-2.5 rounded-3xl cursor-pointer border border-black/20 order-2 sm:order-1"
                        >
                            Cancel
                        </button>
                    )
                }
                <button
                    type="submit"
                    disabled={loading}
                    className="w-full sm:w-auto bg-black text-white px-10 py-2.5 rounded-3xl cursor-pointer justify-center inline-flex items-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed order-1 sm:order-2"
                >
                    {loading ? <Spinner /> : "Submit"}
                </button>
            </div>
        </form>
    );
}
export default UserForm;