import { NewPostFormContainer } from "../../components/NewPostFormContainer";
import { postQueries } from "../../hooks/queries";
import scss from "./style.module.scss";

export default function NewPost(){
    return <main className={scss.main}>
        <section className={scss.container}>
            <NewPostFormContainer />
        </section>
    </main>   
}