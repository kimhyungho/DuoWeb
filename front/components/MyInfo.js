import React, { useCallback, useEffect, useState } from 'react';
import { Button, Input, Form } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { logoutRequestAction, signOutRequestAction, changeNicknameRequestAction } from '../reducers/user';


const MyInfo = () => {

    const { me, signOutLoading, signOutDone, changeNicknameDone, changeNicknameLoading } = useSelector((state) => state.user)
    const dispatch = useDispatch();

    const [newNickname, setNewNickname] = useState(me.nickname);
    const [isChangeNickname, setIsChangeNickname] = useState(false);

    const onSetNewNickname = useCallback((e) => {
        setNewNickname(e.target.value);
    }, []);

    const onIsChangeNickname = useCallback(() => {
        setIsChangeNickname(!isChangeNickname);
    }, []);


    const onSignOut = useCallback(() => {
        const data = { userId: me.userId, userToken: me.userToken };
        dispatch(signOutRequestAction(data));
    }, []);

    const onChangeNickname = useCallback(() => {
        const data = { userId: me.userId, nickname: newNickname, userToken: me.userToken };
        dispatch(changeNicknameRequestAction(data));
        setIsChangeNickname(!isChangeNickname);
    }, [newNickname]);

    useEffect(() => {
        if (signOutDone) {
            dispatch(logoutRequestAction());
        }
    }, [signOutDone]);

    return (
        <>
            {isChangeNickname
                ? <Form>
                    <Input onChange={onSetNewNickname} type="text" suffix={<Button onClick={onChangeNickname} loading={changeNicknameLoading} type="primary">확인</Button>} />
                </Form>
                : <Input prefix={me.nickname} suffix={<Button onClick={onIsChangeNickname}>변경</Button>} disabled />}

            <Button loading={signOutLoading} onClick={onSignOut}>회원탈퇴</Button>
        </>
    );
}
export default MyInfo;