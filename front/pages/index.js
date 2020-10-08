import React from 'react';
import AppLayout from '../components/AppLayout';
import LolPostList from '../components/LolPostList';


const data = [
    {
        title: 'Title 1',
        content: '같이 게임하실분 구해용dsafsdfsadfsadfsadfsaddsdsaf asdf sadkfskafksaf ksads fasdf sadf as fsa f dsafasd fads fsa fsa fsaf sa fsf saf saf saf sdafasfasfsdffdasfasfadsfasdfsafasasdfasfasfasdfasdfasfsafsafsadfsad  dsf asd fsdaf sds dfas dfa fasd fasdfasfsdsd afs fas fsa fas fsa fsad fas fasdf asf sa fsaf sadf sa fsdfdsfasfsdafdddddddddddddddddddddddddddddd',
    },
    {
        title: 'Title 2',
        content: '2',
    },
    {
        title: 'Title 3',
        content: '3',
    },
    {
        title: 'Title 4',
        content: '4',
    },
];

const Home = () => {
    return (
        <AppLayout>
            <LolPostList data={data}></LolPostList>
        </AppLayout>

    );

};


export default Home;