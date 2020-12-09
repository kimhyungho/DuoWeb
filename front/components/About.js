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
    background-color: #FFFFFF'
`

const ABOUT = () => {
    return (
        <Background id="about">
            <Row>
                <Col xs={24} md={12} >
                </Col>

                <Col xs={24} md={12} >
                    <div>
                        <nav>
                            <a href="#home" style={{ color: '#FA5A5A', display: 'inline', marginLeft: '50px', fontSize: '2vh' }}>HOME</a>
                            <a href="#about" style={{ color: '#FA5A5A', display: 'inline', marginLeft: '50px', fontSize: '2vh' }}>ABOUT</a>
                            <a href="#charactor" style={{ color: '#FA5A5A', display: 'inline', marginLeft: '50px', fontSize: '2vh' }}>CHARACTOR</a>
                            <a href="#help" style={{ color: '#FA5A5A', display: 'inline', marginLeft: '50px', fontSize: '2vh' }}>HELP</a>
                        </nav>
                    </div>
                </Col>
            </Row>
        </Background>
    );
};


export default ABOUT;