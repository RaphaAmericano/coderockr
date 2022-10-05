import { createContext, PropsWithChildren, ReactNode, useContext } from "react";
import { useModal } from "./modal";

interface Stores { 
    modalStore: ReturnType<typeof useModal>;
}

const storesCtx = createContext<Stores>(null!);

export function useStores(){
    return useContext(storesCtx);
}

export function StoresProvider(props: PropsWithChildren<ReactNode>){
    const modalStore = useModal();
    return <storesCtx.Provider value={{ modalStore }}>{props.children}</storesCtx.storesCtx.Provider>
}