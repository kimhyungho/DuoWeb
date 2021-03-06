import React, { useState, useCallback, useEffect } from 'react';
import { Button, Form, Result } from 'antd';
import KakaoLogin from 'react-kakao-login';
import NaverLogin from 'react-login-by-naver';
import { useDispatch, useSelector } from 'react-redux';
import { loginRequestAction } from '../reducers/user';
import Original_logo from '../images/LOGIN_LOGO.png';
import Link from 'next/link';
import Router from 'next/router';
import styled from 'styled-components'

const K = styled(KakaoLogin)`
    width: 300px;
    height: 40px;
    background-color: #FEE500;
    
`;


const N = styled(Button)`
    width: 300px;
    height: 40px;
    margin-top: 5px;
    background-color: #1EC800;

`;


const G = styled(Button)`
    width: 300px;
    height: 40px;
    margin-top: 5px;


`;


const LoginFrom = () => {
    const dispatch = useDispatch();

    const { logInDone, logInLoading, logInError } = useSelector((state) => state.user);

    const responseKakao = (response) => {
        console.log(response.response.access_token);
        const data = { accessToken: response.response.access_token, platform: 'kakao' };
        dispatch(loginRequestAction(data));
    };

    const responseLogin = (response, platform) => {
        console.log(response, platform);
    };

    useEffect(() => {
        if (typeof window !== 'undefined' && (window.location.origin + '/') != window.location.href) {
            {
                const location = window.location.href.split('=')[1];
                if (location) {
                    const accessToken = location.split('&')[0];
                    const data = { accessToken: accessToken, platform: 'naver' };
                    console.log(accessToken);
                    dispatch(loginRequestAction(data));
                }
            }
        }

        if (logInDone) {
            console.log(logInDone);
            Router.push('/home');
        }

        if(logInError === -401){
            Router.push('/sign_up')
        }

    }, [logInDone, logInError]);


    const responseFail = (err) => {
        console.error(err);
        Router.push('/home');
    };

    return (
        <div style={{ backgroundColor: '#FFFFFF', padding: 50, textAlign: "center" }}>
            <img src={Original_logo} style={{ height: 100 }}></img>
            <br></br>
            <div style={{ marginTop: 10 }}>
                <K
                    jsKey={'593246069c7b7a42344710a951c039ee'}
                    buttonText="카카오 계정으로 로그인"
                    onSuccess={responseKakao}
                    onFailure={responseFail}
                    getProfile={true}
                ></K>
                <br />
                <NaverLogin
                    clientId="0xe5BaDwdA6UNdboCXn7"
                    callbackUrl="http://localhost:3000/login"
                    render={(props) => <N onClick={props.onClick}>
                        네이버 계정으로 로그인</N>}
                    onSuccess={(res) => responseLogin(res, 'naver')}
                    onFailure={() => console.log('naver login fail')}
                />
                <br />
                <G>
                    구글 계정으로 로그인
                </G>
                <br/>
            </div>
            <div style={{ marginTop: 10 }}>
                <Link href='/' ><a>홈페이지</a></Link>로 돌아가기
                </div>

            {/* <GoogleLogin
                clientId={'39496035317-r14irfnovjild7jovff5n0grpthkb206.apps.googleusercontent.com'}
                buttonText="구글로그인"
                onSuccess={responseGoogle}
                onFailure={responseFail}
            ></GoogleLogin> */}
            <br />
        </div>
    );
};

export default LoginFrom;