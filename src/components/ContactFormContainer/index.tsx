import scss from "./style.module.scss";
import closeIcon from "./../../assets/icons/close_icon.svg";
import { useStores } from "../../stores";
import { ContactForm } from "../ContactForm";
;
export function ContactFormContainer(){
    const { modalStore } = useStores();
    const { closeModal } = modalStore;
    return <div className={scss.content}>
            <div className={scss.closeContent}>
                <button onClick={closeModal}><img src={closeIcon}/></button>
            </div>
            <div className={scss.heading}><h3>Contact</h3></div>
            <div>
                <ContactForm />
            </div>
        </div>
}