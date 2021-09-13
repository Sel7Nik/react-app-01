import { Row, Col, Menu, Avatar, Layout } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import css from './Header.module.css';
import { UserOutlined } from '@ant-design/icons';
export type MapPropsHeaderType = {
  isAuth: boolean
  login: string | null
}
export type DispatchPropsHeaderType = {
  logout: () => void
}

export const Header: React.FC<MapPropsHeaderType & DispatchPropsHeaderType> = (props) => {

  const isAuth = useSelector

  const { Header } = Layout;

  return (

    <Header className="header">
      <div className="logo" />
      <Row>
        <Col span={20}>
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
            <Menu.Item key="1"><Link className={css.link} to="/users">
              Users
            </Link></Menu.Item>
            <Menu.Item key="2"><Link className={css.link} to="/profile">
              Profile
            </Link></Menu.Item>
            <Menu.Item key="3"><Link className={css.link} to="/dialogs">
              Messages
            </Link></Menu.Item>
          </Menu>
        </Col>
        <Col span={4}>
          <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
        </Col>
      </Row>


    </Header>

    // <header className={css.header}>
    //   <img
    //     className={css.img}
    //     src="https://cryptologos.cc/logos/xrp-xrp-logo.png?v=010"
    //     alt="logo"
    //   />
    //   <div className={css.loginBlock}>
    //     {props.isAuth ? (
    //       <div>
    //         {props.login} = <button onClick={props.logout}>Log out</button>
    //       </div>
    //     ) : (
    //       <NavLink to={'/login'}>LOGIN</NavLink>
    //     )}
    //   </div>
    // </header>
  );
};
