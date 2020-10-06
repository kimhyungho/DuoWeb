import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Button, Row, Col, Menu } from 'antd';

const { SubMenu } = Menu;

const AppLayout = ({ children }) => {
    return (
        <div>
            <Link href="/login"><a><Button type="primary">로그인</Button></a></Link>
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
                <Col xs={24} md={6} >
                    왼쪽메뉴
                </Col>

                <Col xs={24} md={12} >
                    {children}
                </Col>

                <Col xs={24} md={6} >
                    오른쪽 메뉴
                </Col>
            </Row>

        </div>
    );
};

AppLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default AppLayout;