import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './Header.module.css';
const Header = (props) => {
  return (
    <header className={css.header}>
      <img
        className={css.img}
        src="https://cryptologos.cc/logos/xrp-xrp-logo.png?v=010"
        alt="logo"
      />
      <div className={css.loginBlock}>
        {props.isAuth ? (
          <div>
            {props.login} = <button onClick={props.logout}>Log out</button>
          </div>
        ) : (
          <NavLink to={'/login'}>LOGIN</NavLink>
        )}
      </div>
    </header>
  );
};
export default Header;
