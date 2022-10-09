import { TextInput } from "../TextInput";
import { IFields, useContactForm } from "./contactFormHook";
import scss from "./style.module.scss";
import submitArrow from "./../../assets/icons/submit_arrow.svg";
import { TextareaInput } from "../TextareaInput";
import { ChangeEvent } from "react";
import { maskHelpers } from "./../../helpers/index";

export function ContactForm() {
  const contactForm = useContactForm();
  const { errors, touchedFields, register, reset, setValue } = contactForm;

  async function onSubmit(data: IFields) {
    console.log(data);
    try {
      const { email, name, phone, post } = data;
      setTimeout(() => {
        reset();
      }, 5000);
    } catch (error) {
      const { status } = error as { status: number };
    }
  }

  function phoneMask(event: ChangeEvent<HTMLInputElement>) {
    const { value } = event.target;
    setValue('phone', maskHelpers.phoneMask(value));
  }

  function onError(error: any) {
    console.log(error);
  }

  return (
    <form
      className={scss.form}
      onSubmit={contactForm.handleSubmit(onSubmit, onError)}
    >
      <TextInput
        name="name"
        label="Name"
        type="text"
        error={errors.name}
        touched={touchedFields.name}
        register={{ ...register("name") }}
        placeholder={
          errors.name && touchedFields.name ? errors.name.message : ""
        }
      />
      <TextInput
        name="email"
        label="E-mail"
        type="email"
        error={errors.email}
        touched={touchedFields.email}
        register={{ ...register("email") }}
        placeholder={
          errors.email && touchedFields.email ? errors.email.message : ""
        }
      />
      <TextInput
        name="phone"
        label="Phone"
        type="text"
        error={errors.phone}
        touched={touchedFields.phone}
        register={{
          ...register("phone", {
            onChange: phoneMask
          }),
        }}
        placeholder={
          errors.phone && touchedFields.phone ? errors.phone.message : ""
        }
      />
      <TextareaInput
        rows={11}
        name="post"
        label="Post"
        error={errors.post}
        touched={touchedFields.post}
        register={{ ...register("post") }}
        placeholder={
          errors.post && touchedFields.post ? errors.post.message : "Hello..."
        }
      />
      <button type="submit">
        <img src={submitArrow} />
        Submit
      </button>
    </form>
  );
}
