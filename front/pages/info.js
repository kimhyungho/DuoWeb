import React from 'react';
import { useSelector } from 'react-redux';
import AppLayout from '../components/AppLayout';
import LolPostCard from '../components/LolPostCard';
import MyInfo from '../components/MyInfo';

const Info = () => {
    const { userId } = useSelector((state) => state.user)
    return (
        <>
        {userId ? <AppLayout>
            <MyInfo />
        </AppLayout> : <AppLayout>
            <div>내정보 - 로그인이 필요한 화면입니다.</div>
        </AppLayout> }
        </>
    );

};


export default Info;