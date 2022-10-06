import { ChangeEvent } from "react";
import { FieldError, Message, UseFormRegisterReturn } from "react-hook-form";
import scss from "./style.module.scss";

export interface IProps {
  name: string;
  rows: number;
  label?: string;
  placeholder?: string | Message;
  className?: string;
  error?: FieldError;
  touched?: boolean;
  register: UseFormRegisterReturn;
}

export function TextareaInput(props: IProps) {
  const { label, rows, error, touched, register, placeholder } =
    props;

  return (
    <div className={scss.textareaInput}>
      {label && <label>{label}</label>}
      <textarea
        placeholder={placeholder}
        rows={rows}
        {...register}
      />
      {touched && error && <div>{error.message}</div>}
    </div>
  );
}
