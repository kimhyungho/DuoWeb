import React from 'react';
import AppLayout from '../components/AppLayout';
import MyInfo from '../components/MyInfo';
import { useSelector } from 'react-redux';

const Info = () => {
    const { me } = useSelector((state) => state.user)
    return (
        <>
            {me.userId
                ? <AppLayout>
                    <MyInfo />
                </AppLayout>
                : <AppLayout>
                    <div>내정보 - 로그인이 필요한 화면입니다.</div>
                </AppLayout>}
        </>
    );

};
        
export const getServerSideProps = wrapper.getServerSideProps(async (context) => {
    console.log('getServerSideProps start');
    console.log(context.req.headers);
    const cookie = context.req ? context.req.headers.cookie : '';
    axios.defaults.headers.Cookie = '';
    if(context.req && cookie) {
        axios.defaults.headers.Cookie = cookie;
    }
});z
        
export default Info;
