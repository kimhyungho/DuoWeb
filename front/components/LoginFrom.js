import React, { useState, useCallback } from 'react';
import { Button } from 'antd';
import KakaoLogin from 'react-kakao-login';
import GoogleLogin from 'react-google-login';
import NaverLogin from 'react-naver-login';
import Link from 'next/link';
import styled from 'styled-components';


const LoginFrom = () => {

    // const [id, setId] = useState('');

    const responseKakao = (response) => {
        console.log(response.response.access_token);
    };

    const responseNaver = (response) => {
        console.log(response);
    };

    const responseGoogle = (response) => {
        console.log(response.tokenId);
    };

    const responseFail = (err) => {
        console.error(err);
    };

    return (
        <div>
            <KakaoLogin
                jsKey={'593246069c7b7a42344710a951c039ee'}
                buttonText="카카오로그인"
                onSuccess={responseKakao}
                onFailure={responseFail}
                getProfile={true}
            ></KakaoLogin>
            <GoogleLogin
                clientId={'628315189039-kira075j0fog81kb2kua27l8ubtlg0a4.apps.googleusercontent.com'}
                buttonText="구글로그인"
                onSuccess={responseGoogle}
                onFailure={responseFail}
            ></GoogleLogin>
            {/* <NaverLogin
                clientId={'0xe5BaDwdA6UNdboCXn7'}>
            </NaverLogin> */}
        </div>
    );
};

export default LoginFrom;