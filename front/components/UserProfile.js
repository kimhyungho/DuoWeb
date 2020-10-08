import React, { useCallback } from 'react';
import { Card, Button } from 'antd';
import { logoutAction } from '../reducers/user'
import { useDispatch, useSelector } from 'react-redux';
const UserProfile = () => {

    const userNickname = useSelector((state) => state.user.userNickname)
    const dispatch = useDispatch();
    const onClickLogout = useCallback(() => {
        dispatch(logoutAction());
    }, []);

    

    return (
        <>
            <Card
                actions={[
                    <div key="chat">채팅<br />0</div>,         // react배열은 key붙여주어야함
                    <div key="my_post">My글<br />0</div>,
                    <div key="my_info">내 정보</div>
                ]}
            >
                <Card.Meta
                    title={userNickname}
                />
                <Button onClick={onClickLogout}>로그아웃</Button>
            </Card>
        </>
    );
}

export default UserProfile;