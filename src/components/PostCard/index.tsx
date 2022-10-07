import { Link } from "react-router-dom";
import { postSchemas } from "../../api/schemes";
import scss from "./style.module.scss";
import arrow from "../../assets/icons/link_arrow.svg";
import cln from "classnames";
type IProps = postSchemas.Post & { odd: boolean};

export default function PostCard(props: IProps){
    const { author, title, article, id, imageUrl, odd } = props;
    function resumeArticle(article: string){
        return article.split("</p>")[0].replace("<p>", "");
    }
    const classNameList = [scss.postCard, (odd && scss.odd ) ];

    return  <div className={cln(classNameList)}>
                <div className={scss.imageBlock}>
                    <img src={imageUrl} />
                </div>
                <div className={scss.textBlock}>
                    <span>{author}</span>
                    <h3>{title}</h3>
                    <p>{resumeArticle(article)}</p>
                </div>
                <div className={scss.actionBlock}>
                    <Link to={`post/${id}`}><img src={arrow}/></Link>
                </div>
            </div>
}