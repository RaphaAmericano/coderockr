import { useStores } from "../../stores";
import scss from "./style.module.scss";

interface IProps {
    children: React.ReactNode
}
export default function Modal(props: IProps){
    const { modalStore } = useStores();
    const { closeModal } = modalStore;
    const { children } = props;
    return  <div className={scss.modal}>
                <div className={scss.backdrop} onClick={closeModal}/>
                <div className={scss.content}>
                    {children}
                </div>
            </div>
}