import { ReactNode, useCallback, useState } from "react";


export function useModal(){
    const [open, setOpen] = useState(false);
    const [children, setChildren] = useState<ReactNode | null>(null);

    const openModal = useCallback(() => {
       setOpen(true); 
    },[]);

    const closeModal = useCallback(() => {
        setOpen(false); 
     },[]);

    return { open, openModal, closeModal, children, setChildren }
}