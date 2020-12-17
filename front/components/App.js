import React from 'react';
import PropTypes from 'prop-types';     // prop-types 모듈 사용
import Link from 'next/link';
import { Menu, Row, Col } from 'antd';            // https://ant.design/components/menu/
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { Button } from 'antd';

const Background = styled.div`
    width: 100%;
    height: 100vh;
    background: #FA5A5A;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #f80759, #FA5A5A);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #f80759, #FA5A5A); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
`

const LoginBtn = styled(Button)`
    width: 100%;
`

const APP = () => {
    return (
        <Background id="home">
            <Row>
                <Col xs={24} md={12} >
                    
                <LoginBtn style={{top: '60vh', width: '300px'}}><a href='/login'>로그인</a></LoginBtn>
                </Col>
                <Col xs={24} md={12} >
                    <div>
                        <nav>
                            <a href="#home" style={{ color: 'white', display: 'inline', marginLeft: '100px', fontSize: '2vh' }}>HOME</a>
                            <a href="#about" style={{ color: 'white', display: 'inline', marginLeft: '50px', fontSize: '2vh' }}>ABOUT</a>
                            <a href="#charactor" style={{ color: 'white', display: 'inline', marginLeft: '50px', fontSize: '2vh' }}>CHARACTOR</a>
                            <a href="#help" style={{ color: 'white', display: 'inline', marginLeft: '50px', fontSize: '2vh' }}>HELP</a>
                        </nav>
                    </div>
                </Col>
            </Row>

        </Background>
    );
};


export default APP;