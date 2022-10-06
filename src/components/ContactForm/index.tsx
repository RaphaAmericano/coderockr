import { TextInput } from "../TextInput";
import { IFields, useContactForm } from "./contactFormHook";
import scss from "./style.module.scss";

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
                <TextInput name="name" label="Name" type="text" error={errors.name} touched={touchedFields.name} register={{...register("name")}} />
                <TextInput name="email" label="E-mail" type="email" error={errors.name} touched={touchedFields.name} register={{...register("email")}} />
                <TextInput name="phone" label="Phone" type="text" error={errors.name} touched={touchedFields.name} register={{...register("phone")}} />

                <button type="submit">Submit</button>
            </form>
}