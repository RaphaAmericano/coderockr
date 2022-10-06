import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

export interface IFields {
    name: string ;
    email:string;
    phone: string;
    post:string;
}

const defaultValues: IFields = {
    name: "" ,
    email:"",
    phone: "",
    post:"",
}

const schema = yup.object({
    name: yup.string().required("Fill your full name"),
    email: yup.string().email("Email must be a valid e-mail").required("Fill a valid e-mail"),
    phone: yup.string().trim().matches(/(\(?\d{2}\)?\s)?([8-9]{1})?(\d{3,4}\-\d{4})/g, "Fill a valid phone").required("Fill your phone"),
    post: yup.string().required("Post is a required field")
});

export function useContactForm(){
    const { formState, ...rest } = useForm<IFields>({
        defaultValues,
        resolver: yupResolver(schema)
    });
    return { errors: formState.errors, touchedFields: formState.touchedFields, ...rest }
}