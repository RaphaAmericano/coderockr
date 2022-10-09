import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

export interface IFields {
    title: string;
    author: string;
    imageUrl: string;
    post: string;
}

const defaultValues: IFields = {
    title: "",
    author: "",
    imageUrl: "",
    post: "",
}

const schema = yup.object({
    title: yup.string().required("Fill the title"),
    author: yup.string().required("Fill the author name"),
    imageUrl: yup.string().required("Fill the image URL"),
    post: yup.string().required("Fill the post"),
});

export function useNewPostForm(){
    const { formState, ...rest } = useForm<IFields>({
        defaultValues,
        resolver: yupResolver(schema)
    });

    return { errors: formState.errors, touchedFields: formState.touchedFields, ...rest }
}