import { Link } from "react-router-dom";
import scss from "./style.module.scss";
interface IMenuItemProps {
    text: string;
    to?: string;
    clickFn?: () => void;
}
interface IProps {
  title: string;
  menu?: IMenuItemProps[];
}
export default function Header(props: IProps) {
  const { title, menu } = props;
  return (
    <header className={scss.header}>
      <div>
        <h1 className={scss.heading}>{title}</h1>
      </div>
      {menu && <nav className={scss.nav}>
        <ul>
            {menu.map((item) => <li key={item.text}>
                { item.to ? <Link to={item.to} className={scss.navItem}>{item.text}</Link> : <button onClick={item.clickFn} className={scss.navItem}>{item.text}</button> }
                
                </li> )}
        </ul>
        </nav>}

    </header>
  );
}
