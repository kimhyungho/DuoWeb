import React, { useCallback } from 'react';
import { Card, Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link'
import { logoutRequestAction } from '../reducers/user'
import Avatar from 'antd/lib/avatar/avatar';
const UserProfile = () => {

    const { nickname } = useSelector((state) => state.user.me);

    const dispatch = useDispatch();
    const onClickLogout = useCallback(() => {
        dispatch(logoutRequestAction());
    }, []);


    return (
        <>
            <Card
                actions={[
                    <div key="chat">채팅<br />0</div>,         // react배열은 key붙여주어야함
                    <div key="my_post">My글<br />0</div>,
                    <div key="my_info"><Link href='/info'><a>내 정보</a></Link></div>
                ]}
            >
                <Card.Meta
                avatar={<Avatar>
                    {nickname[0]}
                </Avatar>}
                    title={nickname}
                />
                <Button onClick={onClickLogout}>로그아웃</Button>
            </Card>
        </>
    );
}
export default UserProfile;