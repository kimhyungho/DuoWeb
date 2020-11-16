import React, { useState, useCallback } from 'react';
import { Button, Form, Result } from 'antd';
import KakaoLogin from 'react-kakao-login';
import NaverLogin from 'react-login-by-naver';
import GoogleLogin from 'react-google-login';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { loginRequestAction } from '../reducers/user';
import Original_logo from '../images/Original_logo.png';
import Link from 'next/link';
import Router from 'next/router';


const LoginFrom = () => {
    const dispatch = useDispatch();
    
    const responseKakao = (response) => {
        console.log(response.response.access_token);
        const data = { accessToken: response.response.access_token, platform: 'kakao' };
        dispatch(loginRequestAction(data));
        Router.push('/');    
    };

    // const responseNaver = (response) => {
    //     if (typeof window !== 'undefined') {
    //         if ((window.location.origin + '/') != window.location.href) {
    //             const location = window.location.href.split('=')[1];
    //             const accessToken = location.split('&')[0];
    //             const data = { accessToken: accessToken, platform: 'naver' };
    //             dispatch(loginRequestAction(data));
    //         }
    //     }
    // }

    // const responseGoogle = (response) => {
    //     console.log(response.accessToken)
    //     const data = { accessToken: response.accessToken, platform: 'google' };
    //     dispatch(loginRequestAction(data));
    // };

    const responseFail = (err) => {
        console.error(err);
        Router.push('/'); 
    };

    return (
        <div style={{ backgroundColor: '#FFFFFF', padding: 50, textAlign: "center" }}>
            <img src={Original_logo} style={{ height: 40 }}></img>
            <br></br>
            <div style={{ marginTop: 10 }}>
                <KakaoLogin
                    jsKey={'593246069c7b7a42344710a951c039ee'}
                    buttonText="카카오 계정으로 로그인"
                    onSuccess={responseKakao}
                    onFailure={responseFail}
                    getProfile={true}
                ></KakaoLogin>
            </div>
            <div style={{ marginTop: 10 }}>
                <Button>네이버 계정으로 로그인</Button>
            </div>
            <div style={{ marginTop: 10 }}>
                <Button>구글 계정으로 로그인</Button>
            </div>
            <div style={{ marginTop: 10 }}>
                <Link href='/' ><a>홈페이지</a></Link>로 돌아가기
                </div>



            {/* <NaverLogin
                clientId="0xe5BaDwdA6UNdboCXn7"
                callbackUrl="http://127.0.0.1:3000/"
                render={(props) => <Button onClick={props.onClick}>네이버 로그인</Button>}
                onSuccess={(res) => console.log('성공')}
                onFailure={() => console.log('naver login fail')}
            />
            <br />
            <GoogleLogin
                clientId={'39496035317-r14irfnovjild7jovff5n0grpthkb206.apps.googleusercontent.com'}
                buttonText="구글로그인"
                onSuccess={responseGoogle}
                onFailure={responseFail}
            ></GoogleLogin>
            <br /> */}
        </div>
    );
};

export default LoginFrom;