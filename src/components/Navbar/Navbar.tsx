import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './Navbar.module.css';


const Navbar: React.FC = () => {
  return (
    <nav className={css.menu}>


      <ul className={css.list}>

        <li className={css.item}>
          <NavLink className={css.link} activeClassName={css.active} to="/profile">
            Главная
          </NavLink>
        </li>

        <li className={css.item}>
          <NavLink className={css.link} activeClassName={css.active} to="/dialogs">
            Messages
          </NavLink>
        </li>

        <li className={css.item}>
          <NavLink className={css.link} activeClassName={css.active} to="/users">
            Users
          </NavLink>
        </li>

      </ul>
    </nav>
  );
};

export default Navbar;
