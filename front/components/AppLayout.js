import React from 'react';
import PropTypes from 'prop-types';     // prop-types 모듈 사용
import Link from 'next/link';
import { Menu, Row, Col } from 'antd';            // https://ant.design/components/menu/
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { Button } from 'antd';

import UserProfile from './UserProfile';


const Toolbar = styled.div`
    width: 100%;
    height: 100px;
    background: #FA5A5A;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #f80759, #FA5A5A);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #f80759, #FA5A5A); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
`;

const { SubMenu } = Menu;

const AppLayout = ({ children }) => {

    const { userId } = useSelector((state) => state.user.me)

    return (
        <div>
            <Toolbar>
                {!userId
                    ? <Button type="primary" style={{backgroundColor: '#ffffff', color: '#FA5A5A', top: 30, float: "right", right: 20 }}><Link href='/login'><a>로그인</a></Link></Button>
                    : <></>}
            </Toolbar>
            <Menu mode="horizontal">
                <SubMenu title="게임목록" style={{caretColor: '#FA5A5A'}}>
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