// import React from 'react';
import './App.css';

// function App() {
const App = () => {
  return (
    <>
      <div className="container app-wrapper">
        <header className="header">
          <img
            className="header__img"
            src="https://cryptologos.cc/logos/xrp-xrp-logo.png?v=010"
            alt="logo"
          />
        </header>
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

        <section className="content">
          <img
            className="content__img"
            src="https://c.pxhere.com/photos/b5/66/landscape_mountain_mountain_range_nature_panoramic-953573.jpg!s"
            alt="img"
          />
          <div className="content__avatar">Avatar</div>
          <div className="content__description">description</div>
          <div className="content__posts">
            My posts
            <div className="content__posts-item">
              <div className="post-item">post 1</div>
              <div className="post-item">post 2</div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default App;
