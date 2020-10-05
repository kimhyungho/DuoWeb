import React from 'react';
import AppLayout from '../components/AppLayout';
import LolPostList from '../components/LolPostList';

const lolpostlist = [{ title: 'HI', content: 'Hello' }, { title: 'HI', content: 'Hello' }, { title: 'HI', content: 'Hello' }, { title: 'HI', content: 'Hello' }, { title: 'HI', content: 'Hello' },
{ title: 'HI', content: 'Hello' }, { title: 'HI', content: 'Hello' }, { title: 'HI', content: 'Hello' }, { title: 'HI', content: 'Hello' }, { title: 'HI', content: 'Hello' }, { title: 'HI', content: 'Hello' },
{ title: 'HI', content: 'Hello' }, { title: 'HI', content: 'Hello' }, { title: 'HI', content: 'Hello' }, { title: 'HI', content: 'Hello' }];


const Home = () => {
    return (
        <AppLayout>
            <LolPostList data={lolpostlist}></LolPostList>
        </AppLayout>

    );

};


export default Home;