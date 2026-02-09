/** Library Imports */
import type { Control } from "react-hook-form";
import { Controller,  } from "react-hook-form";

/** Local Imports */
import type { FieldSchema, FormValues } from "../../../types/form";

/** Props */
type Props = {
    fieldConfig: FieldSchema;
    control: Control<FormValues>;
};

/** Main Export */
export default function CustomInput({ fieldConfig, control }: Props) {

    const { name, label, placeholder, type, required, validation } = fieldConfig;

    return (
        <Controller
            name={name}
            control={control}
            rules={{
                required: required ? `${label} is required` : false,
                minLength: validation?.minLength,
                maxLength: validation?.maxLength,
                pattern: validation?.pattern,
            }}
            render={({ field, fieldState: { error } }) => (
                <div className="flex flex-col gap-1">
                    <label className="text-sm font-medium">
                        {label} {required && <span className="text-red">*</span>}
                    </label>

                    {type === "textarea" ? (
                        <textarea
                            {...field}
                            placeholder={placeholder}
                            className="border border-black/10  rounded-3xl px-3 py-2 focus:outline-none"
                        />
                    ) : (
                        <input
                            {...field}
                            type={type}
                            placeholder={placeholder}
                            className="border border-black/10 rounded-3xl px-3 py-2 focus:outline-none"
                        />
                    )}

                    {error && (
                        <p className="text-red text-sm">
                            {error.message || validation?.message}
                        </p>
                    )}
                </div>
            )}
        />
    );
}