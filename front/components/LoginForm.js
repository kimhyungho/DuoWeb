import React, { useState, useCallback } from 'react';
import { Button, Form } from 'antd';
import KakaoLogin from 'react-kakao-login';
import GoogleLogin from 'react-google-login';
import NaverLogin from 'react-login-by-naver';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { loginAction } from '../reducers/user'


const KaKaoBtn = styled(KakaoLogin)`
    width: 300px;
    height: 50px;
    background-color: #f7f30c;
    font-weight: 1000;
`;

const NaverBtn = styled(Button)`
    width: 300px;
    height: 50px;
    background-color: #10cc23;
    font-weight: 1000;
    color: #ffffff;
`;

const GoogleBtn = styled(GoogleLogin)`
    width: 300px;
    height: 50px;
    
`;

const TemporaryBtn = styled(Button)`
    width: 300px;
    height: 50px;
`;


const LoginWrapper = styled(Form)`
    padding: 10px;
`;

const LoginFrom = () => {
    const userId = 1;
    const userNickname = 'kim';

    const dispatch = useDispatch();

    const onClickLogin = useCallback(() => {
        dispatch(loginAction({}));
    }, [])



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
        <LoginWrapper>
            <KaKaoBtn
                jsKey={'593246069c7b7a42344710a951c039ee'}
                buttonText="카카오로그인"
                onSuccess={responseKakao}
                onFailure={responseFail}
                getProfile={true}
            ></KaKaoBtn>
            <br />
            <NaverLogin
                clientId="0xe5BaDwdA6UNdboCXn7"
                callbackUrl="http://127.0.0.1:3000"
                render={(props) => <NaverBtn onClick={props.onClick}>네이버로그인</NaverBtn>}
                onSuccess={(naverUser) => console.log(naverUser)}
                onFailure={() => console.error(result)}
            />
            <br />
            <GoogleBtn
                clientId={'628315189039-kira075j0fog81kb2kua27l8ubtlg0a4.apps.googleusercontent.com'}
                buttonText="구글로그인"
                onSuccess={responseGoogle}
                onFailure={responseFail}
            ></GoogleBtn>
            <br />
            <TemporaryBtn onClick={onClickLogin}>임시 로그인</TemporaryBtn>
        </LoginWrapper>
    );
};

export default LoginFrom;