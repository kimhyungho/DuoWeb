import React from 'react';
import AppLayout from '../components/AppLayout'

const Report = () => {
    return (
        <AppLayout>
            <div>신고하기</div>

        </AppLayout>
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
});


export default Report;
