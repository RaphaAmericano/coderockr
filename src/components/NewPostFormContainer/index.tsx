import scss from "./style.module.scss";
import photoPlaceholder from "../../assets/new_post_photo_placeholder.png";
import { NewPostForm } from "../NewPostForm";
import { useEffect, useState } from "react";
import { useDebouce } from "../../hooks/useDebounce";
import { imageQueries } from "../../hooks/queries";

export function NewPostFormContainer() {

  const [imageQuery, setImageQuery] = useState("");
  const imageUrl = useDebouce(imageQuery, 1000);
  const [image, setImage] = useState(imageUrl);

  function updateImage(url: string) {
    setImageQuery(url);
  }

  useEffect(() => {
    setImage(imageUrl);
  },[imageUrl])

  return (
    <div className={scss.content}>
      <div className={scss.photo}>
        <img src={imageUrl !== "" ? image : photoPlaceholder} />
      </div>
      <div className={scss.heading}>
        <h3>New Post</h3>
      </div>
      <div>
        <NewPostForm updateImageFn={updateImage} />
      </div>
    </div>
  );
}
