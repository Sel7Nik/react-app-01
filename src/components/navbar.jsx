import React from 'react';

const Navbar = () => {
  return (
    <nav className="menu">
      <ul className="list">
        <li className="item">
          <a className="link" href="#c">
            Главная
          </a>
        </li>
        <li className="item">
          <a className="link" href="#c">
            О нас
          </a>
        </li>
        <li className="item">
          <a className="link" href="#c">
            Наши дела
          </a>
        </li>
        <li className="item">
          <a className="link" href="#c">
            Наш отдых
          </a>
        </li>
        <li className="item">
          <a className="link" href="#c">
            Контакты
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
