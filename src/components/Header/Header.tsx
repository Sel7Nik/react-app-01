import { Row, Col, Menu, Avatar, Layout, Button } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import css from './Header.module.css';
import { UserOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { currentUserLogin, selectIsAuth } from '../../redux/auth-selectors';
import { logout } from '../../redux/auth-reducer';

export type MapPropsHeaderType = {
}

export const Header: React.FC<MapPropsHeaderType> = (props) => {

  const isAuth = useSelector(selectIsAuth)
  const login = useSelector(currentUserLogin)

  const dispatch = useDispatch()

  const logoutCallback = () => {
    dispatch(logout())
  }

  const { Header } = Layout;

  return (

    <Header className="header">
      <Row>
        <Col span={18}>
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


        {isAuth ?
          <>
            <Col span={1}>
              <Avatar alt={login || ''} style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
            </Col >
            <Col span={5}>
              <Button onClick={logoutCallback}>Log out</Button>
            </Col >
          </>
          : <Col span={6}>
            <Button>
              <Link to={'/login'}>LOGIN</Link>
            </Button>
          </Col >

        }

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
