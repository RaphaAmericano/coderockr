import { TextInput } from "../TextInput";
import { IFields, useContactForm } from "./contactFormHook";
import scss from "./style.module.scss";
import submitArrow from "./../../assets/icons/submit_arrow.svg";
import { TextareaInput } from "../TextareaInput";

export function ContactForm(){
    const contactForm = useContactForm();
    const { errors, touchedFields, register } = contactForm;

    async function onSubmit(data:IFields){
        try {
            const { email, name, phone, post } = data;
        } catch (error) {
            const { status } = error as { status: number };
        }
    }

    function onError(error: any){
        console.log(error);
    }

    return  <form className={scss.form} onSubmit={contactForm.handleSubmit(onSubmit, onError)}>
                <TextInput name="name" label="Name" type="text" error={errors.name} touched={touchedFields.name} register={{...register("name")}} placeholder={"Nome"}/>
                <TextInput name="email" label="E-mail" type="email" error={errors.email} touched={touchedFields.email} register={{...register("email")}} />
                <TextInput name="phone" label="Phone" type="text" error={errors.phone} touched={touchedFields.phone} register={{...register("phone")}} />
                <TextareaInput rows={11} name="post" label="Post" error={errors.name} touched={touchedFields.post} register={{...register("post")}} placeholder={"Hello..."}/>
                <button type="submit"><img src={submitArrow}/>Submit</button>
            </form>
}