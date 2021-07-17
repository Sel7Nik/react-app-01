import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navbar.module.css';
const Navbar = () => {
  return (
    <nav className={s.menu}>
      <ul className={s.list}>
        <li className={s.item}>
          <NavLink className={s.link} activeClassName={s.active} to="/profile">
            Главная
          </NavLink>
        </li>
        {/* <li className={s.item}> */}
        <li className={s.item}>
          <NavLink className={s.link} activeClassName={s.active} to="/dialogs">
            Messages
          </NavLink>
        </li>
        <li className={s.item}>
          <NavLink className={s.link} activeClassName={s.active} to="/users">
            Users
          </NavLink>
        </li>
        {/* <li className={s.item}>
          <NavLink className={s.link} activeClassName={s.active} to="/news">
            News
          </NavLink>
        </li>
        <li className={s.item}>
          <NavLink className={s.link} activeClassName={s.active} to="/music">
            Music
          </NavLink>
        </li>
        <li className={s.item}>
          <NavLink className={s.link} activeClassName={s.active} to="/settings">
            Settings
          </NavLink>
        </li> */}
      </ul>
    </nav>
  );
};

export default Navbar;
