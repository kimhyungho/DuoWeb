import { Button } from 'antd';
import React from 'react';
import { useSelector } from 'react-redux';
import AppLayout from '../components/AppLayout';
import LolPostCard from '../components/LolPostCard';
import Link from 'next/link';

const Home = () => {
    const { mainPosts } = useSelector((state) => state.post);
    const userId = useSelector((state) => state.user.userId)

    return (
        <AppLayout>
            {userId ? 
            <Button type="primary" style={{marginLeft: '20px'}}><Link href="./lol_write"><a>글쓰기</a></Link></Button> 
            : <></>}
            <br />
            {mainPosts.map((c) => {
                return (
                    <LolPostCard key={c.id} post={c} />
                );
            })}
        </AppLayout>

    );

};


export default Home;