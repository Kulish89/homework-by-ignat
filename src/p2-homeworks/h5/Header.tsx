import React from "react";
import s from "../../p1-main/m1-ui/u1-app/App.module.css";
import { NavLink } from "react-router-dom";
import { PATH } from "./Routes";

function Header() {
  return (
    <div className={s.header}>
      <nav className={s.header_menu}>
        <ul className={s.menu_list}>
          <li>
            <NavLink to={PATH.PRE_JUNIOR}>Pre-Junior</NavLink>
          </li>
          <li>
            <NavLink to={PATH.JUNIOR}>Junior</NavLink>
          </li>
          <li>
            <NavLink to={PATH.JUNIOR_PLUS}>Junior+</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
