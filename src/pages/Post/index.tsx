import { useParams } from "react-router-dom"
import { postQueries } from "../../hooks/queries";
import { dateHelpers } from "../../helpers";

import scss from "./style.module.scss";

export default function Post(){
    const { id } = useParams<{id: string }>();

    const { data } = postQueries.useGetPosts({});

    if(!data) return null;
    
    const postData = data.find((post) => post.id === id);
    if(!postData) return null;

    const { title, article, imageUrl, date, author, authorEmail } = postData;
    
    return <main className={scss.main}>
            <section className={scss.container}>
                <header className={scss.header}>
                    <div className={scss.imageBlock}>
                        <img src={imageUrl}/>
                    </div>
                    <div className={scss.textBlock}>
                        <span className={scss.date}>{dateHelpers.postDateString(date)}</span>
                        <span className={scss.author}>
                            <a href={`mailto:${authorEmail}`}>{author}</a>
                        </span>
                        <h1>{title}</h1>
                    </div>
                </header>
                <article className={scss.article} dangerouslySetInnerHTML={ {__html: article }}/>
            </section>
        </main>
}