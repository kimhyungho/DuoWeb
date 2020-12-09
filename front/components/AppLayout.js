import React from 'react';
import PropTypes from 'prop-types';     // prop-types 모듈 사용
import Link from 'next/link';
import { Menu, Row, Col } from 'antd';            // https://ant.design/components/menu/
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { Button } from 'antd';

import UserProfile from './UserProfile';
import Black_logo from '../images/Black_logo.png';

const { SubMenu } = Menu;

const AppLayout = ({ children }) => {

    const { userId } = useSelector((state) => state.user.me)

    return (
        <div>
            <div style={{ margin: 20, display: "block" }}>
                <Link href='/'><a><img src={Black_logo} height={30}></img></a></Link>
                {!userId
                    ? <Button type="primary" style={{ float: "right" }}><Link href='/login'><a>로그인</a></Link></Button>
                    : <></>}
            </div>
            <Menu mode="horizontal" >
                <SubMenu title="게임목록">
                    <Menu.Item key="lol"><Link href="/home"><a>리그오브레전드</a></Link></Menu.Item>
                    <Menu.Item key="overwatch">오버워치</Menu.Item>
                    <Menu.Item key="battleground">배틀그라운드</Menu.Item>
                </SubMenu>
                <Menu.Item key="event"><Link href='/event'><a>이벤트</a></Link></Menu.Item>
                <Menu.Item key="report"><Link href='/report'><a>신고하기</a></Link></Menu.Item>
            </Menu>
            <Row>
                <Col xs={24} md={5} >
                    {userId ? <UserProfile /> : <></>}
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