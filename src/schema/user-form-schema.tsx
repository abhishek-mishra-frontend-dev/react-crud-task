/** Local Imports */
import type { FieldSchema } from "../types/form";

/** Main Export */
export const UserFormSchema: FieldSchema[] = [
    {
        name: "first_name",
        label: "First Name",
        placeholder: "Enter your first name",
        type: "text",
        required: true,
        validation: {
            minLength: 2,
            maxLength: 250,
            message: "First name must be between 2 and 250 characters",
        },
    },
    {
        name: "last_name",
        label: "Last Name",
        placeholder: "Enter your last name",
        type: "text",
        required: true,
        validation: {
            minLength: 2,
            maxLength: 250,
            message: "Last name must be between 2 and 250 characters",
        },
    },
    {
        name: "phone",
        label: "Phone Number",
        placeholder: "Enter phone number",
        type: "tel",
        required: true,
        validation: {
            pattern: /^[0-9]{10}$/,
            message: "Enter a valid phone number",
        },
    },
    {
        name: "email",
        label: "Email Address",
        placeholder: "Enter email address",
        type: "email",
        required: true,
        validation: {
            pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            message: "Enter a valid email",
        },
    },
];