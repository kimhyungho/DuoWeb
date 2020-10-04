import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Row, Col, Menu } from 'antd';

const AppLayout = ({ children }) => {
    return (
        <div>
            <Menu mode="horizontal">
                <Menu.Item>
                    <Link href='/'><a>홈</a></Link>
                </Menu.Item>
                <Menu.Item>
                    <Link href='/event'><a>이벤트</a></Link>
                </Menu.Item>
                <Menu.Item>
                    <Link href='/report'><a>신고하기</a></Link>
                
                </Menu.Item>
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