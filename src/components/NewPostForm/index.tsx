import { TextInput } from "../TextInput";
import { TextareaInput } from "../TextareaInput";
import scss from "./style.module.scss";
import pencil from "./../../assets/icons/pencil_icon.svg";
import { IFields, useNewPostForm } from "./newPostFormHook";
import { useEffect } from "react";
import { postQueries } from "../../hooks/queries";
import { usePostNewPost } from "../../hooks/queries/post";
interface IProps {
  updateImageFn: (url: string) => void;
}
export function NewPostForm(props: IProps) {
  const { updateImageFn } = props;
  const newPostForm = useNewPostForm();

  const useNewPost = postQueries.usePostNewPost();
  const { isLoading, isSuccess } = useNewPost;

  const { errors, touchedFields, register, reset, setValue, watch } =
    newPostForm;

  useEffect(() => {
    const subscription = watch((value, { name, type }) => {
      const { imageUrl } = value;
      if (name === "imageUrl" && imageUrl !== undefined) {
        updateImageFn(imageUrl);
      }
    });
    return () => subscription.unsubscribe();
  }, [watch]);

  async function onSubmit(data: IFields) {
    console.log(data);
    try {
      
      const post = await useNewPost.mutateAsync(data);
      if(isSuccess){
        reset()
      }
    } catch (error) {
      const { status } = error as { status: number };
      console.log(status);
    }
  }

  function onError(error: any) {
    console.log(error);
  }

  return (
    <form
      className={scss.form}
      onSubmit={newPostForm.handleSubmit(onSubmit, onError)}
    >
      <TextInput
        disabled={isLoading}
        name="title"
        label="Title"
        type="text"
        error={errors.title}
        touched={touchedFields.title}
        register={{ ...register("title") }}
        placeholder={
          errors.title && touchedFields.title ? errors.title.message : ""
        }
      />
      <TextInput
        disabled={isLoading}
        name="author"
        label="Author"
        type="text"
        error={errors.author}
        touched={touchedFields.author}
        register={{ ...register("author") }}
        placeholder={
          errors.author && touchedFields.author ? errors.author.message : ""
        }
      />
      <TextInput
        disabled={isLoading}
        name="imageUrl"
        label="Image URL"
        type="text"
        error={errors.imageUrl}
        touched={touchedFields.imageUrl}
        register={{ ...register("imageUrl") }}
        placeholder={
          errors.imageUrl && touchedFields.imageUrl
            ? errors.imageUrl.message
            : ""
        }
      />
      <TextareaInput
        disabled={isLoading}
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
        <img src={pencil} />
        Create Post
      </button>
    </form>
  );
}
