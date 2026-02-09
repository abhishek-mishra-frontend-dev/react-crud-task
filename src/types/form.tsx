
/** Field Schema */
export type FieldSchema = {
  name: string;
  label: string;
  placeholder: string;
  type: "text" | "email" | "tel" | "textarea";
  required?: boolean;
  validation?: {
    minLength?: number;
    maxLength?: number;
    pattern?: RegExp;
    message?: string;
  };
};

/** Form Values */
export type FormValues = {
  id?: number;
  [key: string]: string | number | undefined;
};