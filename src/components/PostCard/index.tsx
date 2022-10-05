import { Link } from "react-router-dom";
import { postSchemas } from "../../api/schemes";
import arrow from "../../assets/icons/link_arrow.svg";

type IProps = postSchemas.Post;

export default function PostCard(props: IProps){
    const { author, title, article, id, imageUrl } = props;

    return <div>
        <div>
            <img src={imageUrl} />
        </div>
        <div>
            <span>{author}</span>
            <h3>{title}</h3>

        </div>
        <div>
            <Link to={`post/${id}`}><img src={arrow}/></Link>
        </div>
    </div>
}