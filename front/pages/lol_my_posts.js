import React from 'react';
import AppLayout from '../components/AppLayout'


const LolMyPosts = () => {
    return (
        <AppLayout>
            <div>롤포스트</div>
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

export default LolMyPosts;
