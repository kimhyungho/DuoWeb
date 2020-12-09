import React from 'react';
import PropTypes from 'prop-types';     // prop-types 모듈 사용
import Link from 'next/link';
import { Menu, Row, Col } from 'antd';            // https://ant.design/components/menu/
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { Button } from 'antd';

import LOGO from '../images/WEB_LOGO.png'
import APP_STORE from '../images/APP_STORE.png'
import PLAY_STORE from '../images/PLAY_STORE.png'

const Background = styled.div`
    width: 100%;
    height: 100vh;
    background: #FA5A5A;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #f80759, #FA5A5A);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #f80759, #FA5A5A); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
`

const LoginBtn = styled(Button)`
    height: 4vh;
    width: 20%;
    
`

const APP = () => {
    return (
        <Background id="home">
                    <div style={{position: 'absolute', color: "white", fontSize: "5vh"}}>모여라</div>
                    <div style={{position: 'relative'}}>
                        <nav style={{position:"absolute", top: "5vh", right: "10vh"}}>
                            <a href="#home" style={{ color: 'white', display: 'inline', fontSize: '2vh'}}>HOME</a>
                            <a href="#about" style={{ color: 'white', display: 'inline', marginLeft: '10vh', fontSize: '2vh'}}>ABOUT</a>
                            <a href="#charactor" style={{ color: 'white', display: 'inline', marginLeft: '10vh', fontSize: '2vh'}}>CHARACTOR</a>
                            <a href="#help" style={{ color: 'white', display: 'inline', marginLeft: '10vh', fontSize: '2vh'}}>HELP</a>
                        </nav>
                        <img src={LOGO} style={{top:"10vh", position: 'absolute', height: "90vh", right: 0}}></img>
                        <img src={APP_STORE} style={{position: "absolute", left: "30vh", top: "80vh"}}></img>
                        <img src={PLAY_STORE} style={{ position: 'absolute', top: "80vh" }}></img>
                    </div>
                    <LoginBtn style={{position: 'absolute', left: "20vh", top: '70vh', fontSize: "2vh"}}><a href="/login">로그인</a></LoginBtn>
        </Background>
    );
};


export default APP;