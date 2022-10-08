import { Link } from "react-router-dom";
import scss from "./style.module.scss";
import cln from "classnames";

interface IMenuItemProps {
    text: string;
    to?: string;
    clickFn?: () => void;
    altBg?: boolean;
}
interface IProps {
  title: string;
  menu?: IMenuItemProps[];
}
export default function Header(props: IProps) {
  const { title, menu } = props;
  return (
    <header className={scss.header}>
      <div className={scss.container}>
        <div>
          <h1 className={scss.heading}>{title}</h1>
        </div>
        {menu && <nav className={scss.nav}>
          <ul>
              {menu.map((item) => <li key={item.text}>
                  { item.to ? <Link to={item.to} className={cln([scss.navItem, (item.altBg ? scss.altBg : "")])}>{item.text}</Link> : <button onClick={item.clickFn} className={scss.navItem}>{item.text}</button> }
                  </li> )}
          </ul>
          </nav>}
      </div>

    </header>
  );
}
