import React from 'react';
import s from './Header.module.css';
import { NavLink } from 'react-router-dom';
const Header = (props) => {
  debugger;
  return (
    <header className={s.header}>
      <img
        className={s.img}
        src="https://cryptologos.cc/logos/xrp-xrp-logo.png?v=010"
        alt="logo"
      />
      <div className={s.loginBlock}>
        {props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink>}
      </div>
    </header>
  );
};
export default Header;
