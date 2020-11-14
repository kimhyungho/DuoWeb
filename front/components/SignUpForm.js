import React, { useState, useCallback } from 'react';
import { Form, Input } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { loginRequestAction } from '../reducers/user';

const SignUpForm = () => {


    const dispatch = useDispatch();
    const { accessToken, platform } = useSelector((state) => state.user)
    const [nickname, setNickname] = useState('');

    const onChangeNickname = useCallback((e) => {
        setNickname(e.target.value);
    }, []);


    const onSubmit = useCallback(() => {
        console.log(accessToken, platform, nickname);
        const data = { accessToken: accessToken, platform: platform, nickname: nickname };
        dispatch(loginRequestAction(data));
    });

    return (
        <Form>
            <Input.Search
                value={nickname}
                onChange={onChangeNickname}
                addonBefore="닉네임"
                enterButton="회원가입"
                onSearch={onSubmit}
            />
        </Form>

    );
};

export default SignUpForm;