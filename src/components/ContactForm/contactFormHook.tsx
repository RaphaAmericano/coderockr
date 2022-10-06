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
    email: yup.string().email().required("Fill a valid e-mail"),
    phone: yup.string().trim().matches(/^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})\-?(\d{4}))$/, "Fill a valid phone").required("Fill your phone"),
    post: yup.string().required()
});

export function useContactForm(){
    const { formState, ...rest } = useForm<IFields>({
        defaultValues,
        resolver: yupResolver(schema)
    });
    return { errors: formState.errors, touchedFields: formState.touchedFields, ...rest }
}