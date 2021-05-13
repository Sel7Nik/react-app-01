import React from 'react';
import s from './Header.module.css';
const Header = () => {
  return (
    <header className="header">
      <img
        className={s.img}
        src="https://cryptologos.cc/logos/xrp-xrp-logo.png?v=010"
        alt="logo"
      />
    </header>
  );
};
export default Header;
