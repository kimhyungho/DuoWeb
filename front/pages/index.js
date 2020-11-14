import { Button } from 'antd';
import React, { useEffect } from 'react';
import AppLayout from '../components/AppLayout';
import Link from 'next/link';
import PostListForm from '../components/PostListForm';
import { useSelector } from 'react-redux';
import SignUpForm from '../components/SignUpForm';


const Home = () => {
    const { userId } = useSelector((state) => state.user);
    const { logInError } = useSelector((state) => state.user);
    const { posts, loadPostLoading, loadPostDone, loadPostError } = useSelector((state) => state.post);

    if (logInError === -401) {
        return (
            <AppLayout>
                <SignUpForm />
            </AppLayout>
        )
    } else {
        return (
            <AppLayout>
                {userId
                    ? posts.map((c) => {
                        return (
                            <div>
                                <Button type="primary" style={{ marginLeft: '20px' }}><Link href="./lol_write"><a>글쓰기</a></Link></Button>
                                <br />
                                <LolPostCard key={c.id} post={c} />
                            </div>);
                    })
                    : <div>로그인이 필요합니다.</div>
                }
            </AppLayout>
        );
    }
};

export default Home;