import React from 'react';
import s from './Navbar.module.css';
const Navbar = () => {
  return (
    <nav className={s.menu}>
      <ul className={s.list}>
        <li className={s.item}>
          <a className={s.link} href="#c">
            Главная
          </a>
        </li>
        {/* <li className={s.item}> */}
        <li className={`${s.item} ${s.active}`}>
          <a className={`${s.link} ${s.active}`} href="#c">
            О нас
          </a>
        </li>
        <li className={s.item}>
          <a className={s.link} href="#c">
            Наши дела
          </a>
        </li>
        <li className={s.item}>
          <a className={s.link} href="#c">
            Наш отдых
          </a>
        </li>
        <li className={s.item}>
          <a className={s.link} href="#c">
            Контакты
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
