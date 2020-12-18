import React from 'react';
import AppLayout from '../components/AppLayout';
import LolWriteForm from '../components/LolWriteForm';

const Lol_Write = () => {
    return (
        <AppLayout>
            <LolWriteForm/>
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

export default Lol_Write;
