import { useEffect } from "react";
import { useStores } from "../../stores";
import Modal from "../Modal";

export default function ModalContainer (){
    const { modalStore } = useStores();
    const { open , children } = modalStore;
    
    useEffect(() => {
        if(open){
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    },[open])

    return open ? <Modal>{children}</Modal> : null;
}