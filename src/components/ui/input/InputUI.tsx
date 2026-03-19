import * as React from "react";
import Input, { InputProps } from "@mui/joy/Input";
import { useField } from "formik";

type FormikInputProps = InputProps & { name: string; formik?: boolean };

const InputUI: React.FC<FormikInputProps> = ({ formik, ...props }) => {
    if (formik && props.name) {
        const [field, meta] = useField(props.name);
        const showError = Boolean(meta.touched && meta.error);

        return (
            <div style={{ display: "flex", flexDirection: "column" }}>
                <Input
                    {...field}
                    {...props}
                    error={showError}
                />
                {showError ? (
                    <div
                        style={{
                            marginTop: 4,
                            paddingLeft: 2,
                            fontSize: "0.75rem",
                            color: "var(--error-color, #d32f2f)",
                        }}
                    >
                        {meta.error}
                    </div>
                ) : null}
            </div>
        );
    }

    return <Input {...props} />;
};

export default InputUI;
