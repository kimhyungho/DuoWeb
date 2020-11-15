import React, { useState, useCallback } from 'react';
import { Form, Input } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { signUpRequestAction } from '../reducers/user';

const SignUpForm = () => {


    const dispatch = useDispatch();
    const { me } = useSelector((state) => state.user);
    const [nickname, setNickname] = useState('');
    const { signUpLoading, signUpError } = useSelector((state) => state.user);


    const onChangeNickname = useCallback((e) => {
        setNickname(e.target.value);
    }, []);


    const onSubmit = useCallback(() => {
        const data = { accessToken: me.accessToken, platform: me.platform, nickname: nickname };
        dispatch(signUpRequestAction(data));
    });

    return (
        <Form>
            <Input.Search
                value={nickname}
                onChange={onChangeNickname}
                addonBefore="닉네임"
                enterButton="회원가입"
                onSearch={onSubmit}
                loading={signUpLoading}
            />
        </Form>

    );
};

export default SignUpForm;