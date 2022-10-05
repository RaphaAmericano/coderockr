interface IProps {
    children: React.ReactNode
}
export default function Modal(props: IProps){
    const { children } = props;
    return <div>{children}</div>
}