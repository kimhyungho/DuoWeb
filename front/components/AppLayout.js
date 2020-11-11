import React from 'react';
import PropTypes from 'prop-types';     // prop-types 모듈 사용
import Link from 'next/link';
import { Menu, Row, Col } from 'antd';            // https://ant.design/components/menu/
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import UserProfile from './UserProfile';
import LoginForm from './LoginForm';
import Logo from '../images/logo.png';

const { SubMenu } = Menu;
const LogoTab = styled.div`

`;

const AppLayout = ({ children }) => {

    const { userId } = useSelector((state) => state.user.me)

    return (
        <div>
            <LogoTab><img src={Logo}></img></LogoTab>
            <Menu mode="horizontal" >
                <SubMenu title="게임목록">
                    <Menu.Item key="lol"><Link href="/"><a>리그오브레전드</a></Link></Menu.Item>
                    <Menu.Item key="overwatch">오버워치</Menu.Item>
                    <Menu.Item key="battleground">배틀그라운드</Menu.Item>
                </SubMenu>
                <Menu.Item key="event"><Link href='/event'><a>이벤트</a></Link></Menu.Item>
                <Menu.Item key="report"><Link href='/report'><a>신고하기</a></Link></Menu.Item>
            </Menu>
            <Row>
                <Col xs={24} md={5} >
                    {userId ? <UserProfile /> : <LoginForm />}
                </Col>

                <Col xs={24} md={18} >
                    {children}
                </Col>
            </Row>
        </div>
    );
};

AppLayout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default AppLayout;