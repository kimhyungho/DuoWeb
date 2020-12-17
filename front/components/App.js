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

const APP = () => {
    return (
        <Background id="home">
            <Row>
                <Col xs={24} md={12} >
                    <div style={{marginTop: '50vh', width: '300px', marginLeft: '20%'}}>
                        <h1 style={{color: 'white'}}>듀오구함</h1>
                        <h3 style={{color: 'white'}}>안녕하세요</h3>
                        <Button style={{width: '100%'}}><a href='/login'>로그인</a></Button>  
                    </div>
                                  
                </Col>
                <Col xs={24} md={12} >
                </Col>
            </Row>

        </Background>
    );
};


export default APP;