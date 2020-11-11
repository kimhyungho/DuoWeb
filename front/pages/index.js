import { Button } from 'antd';
import React from 'react';
import AppLayout from '../components/AppLayout';
import Link from 'next/link';
import PostListForm from '../components/PostListForm';
import { useSelector } from 'react-redux';


const Home = () => {
    const {userId} = useSelector((state) => state.user);
    return (
        <AppLayout>
            {userId
                ? <Button type="primary" style={{ marginLeft: '20px' }}><Link href="./lol_write"><a>글쓰기</a></Link></Button>
                : <></>}
            <br />
            <PostListForm/>
        </AppLayout>
    );
};

export default Home;