import { Button } from 'antd';
import React, { useEffect } from 'react';
import AppLayout from '../components/AppLayout';
import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';
import SignUpForm from '../components/SignUpForm';
import { loadAllLolPostsRequestAction } from '../reducers/post';
import PostCard from '../components/LolPostCard'
import DetailPost from '../components/DetailPost';

const Home = () => {
    const dispatch = useDispatch();
    const { me } = useSelector((state) => state.user);
    const { logInError } = useSelector((state) => state.user);
    const { posts, loadPostLoading, loadPostError, detailLolPost, detailLolPostOn } = useSelector((state) => state.post);

    useEffect(() => {
        if (!me.userToken) {
            const data = { userToken: me.userToken }
            dispatch(loadAllLolPostsRequestAction(data));
        }
    }, []);


    if (logInError === -401) {
        return (
            <AppLayout>
                <SignUpForm />
            </AppLayout>
        )
    } else {
        return (
            <AppLayout>
                {me.userToken && <div></div>}
                <div style={{textAlign: 'right', margin: 20}}>                
                    <Button type="primary" style={{ marginLeft: '20px' }}><Link href="./lol_write"><a>글쓰기</a></Link></Button>
                </div>
                <br />
                {me.userToken && !detailLolPostOn && posts.map((post) => <PostCard key={post.id} post={post} />)}
                {me.userToken && detailLolPostOn && <DetailPost/>}
            </AppLayout>
        );
    }
};

export default Home;