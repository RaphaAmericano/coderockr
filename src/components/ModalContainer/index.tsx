import { useStores } from "../../stores";
import Modal from "../Modal";

export default function ModalContainer (){
    const { modalStore } = useStores();
    const { open , children } = modalStore;
    
    return open ? <Modal>{children}</Modal> : null;
}