import React from 'react';
import PropTypes from 'prop-types';     // prop-types 모듈 사용
import Link from 'next/link';
import { Menu, Row, Col } from 'antd';            // https://ant.design/components/menu/
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { Button } from 'antd';
import LOGO from '../images/WEB_LOGO.png';

const Background = styled.div`
    width: 100%;
    height: 100vh;
    background: #FA5A5A;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #f80759, #FA5A5A);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #f80759, #FA5A5A); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
`

const CHARACTOR = () => {
    return (
        <Background id="charactor">
            <Row>
                <Col xs={24} md={12} >
                    <img src={LOGO} width="500px"></img>
                </Col>
                <Col xs={24} md={12} >
                </Col>
            </Row>

        </Background>
    );
};


export default CHARACTOR;