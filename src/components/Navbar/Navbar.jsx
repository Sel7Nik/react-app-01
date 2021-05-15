import React from 'react';
import s from './Navbar.module.css';
const Navbar = () => {
  return (
    <nav className={s.menu}>
      <ul className={s.list}>
        <li className={s.item}>
          <a className={s.link} href="/profile">
            Главная
          </a>
        </li>
        {/* <li className={s.item}> */}
        <li className={`${s.item} ${s.active}`}>
          <a className={`${s.link} ${s.active}`} href="/dialogs">
            Сообщения
          </a>
        </li>
        <li className={s.item}>
          <a className={s.link} href="/News">
            Наши дела
          </a>
        </li>
        <li className={s.item}>
          <a className={s.link} href="/Music">
            Наш отдых
          </a>
        </li>
        <li className={s.item}>
          <a className={s.link} href="/Settings">
            Контакты
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
