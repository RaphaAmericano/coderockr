import { InputHTMLAttributes } from "react";
import { FieldError, Message, UseFormRegisterReturn } from "react-hook-form";
import scss from "./style.module.scss";

export interface IProps {
  name: string;
  type: "email" | "text" | "password";
  label?: string;
  placeholder?: string | Message;
  className?: string;
  error?: FieldError;
  touched?: boolean;
  register: UseFormRegisterReturn;
  disabled: boolean;
}

export function TextInput(props: IProps) {
  const { label, type, name, error, touched, placeholder, register, disabled } = props;

  return (
    <div className={scss.textInput}>
      {label && <label>{label}</label>}
      <input
        disabled={disabled}
        type={type}
        placeholder={placeholder}
        {...register}
      />
      {touched && error && <div>{error.message}</div>}
    </div>
  );
}
