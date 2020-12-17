import { Button, Pagination } from 'antd';
import React, { useEffect, useCallback, useState } from 'react';
import AppLayout from '../components/AppLayout';
import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';
import SignUpForm from '../components/SignUpForm';
import { loadAllLolPostsRequestAction, loadAllMyLolPostsRequestAction } from '../reducers/post';
import PostCard from '../components/LolPostCard'
import DetailPost from '../components/DetailPost';
import ButtonGroup from 'antd/lib/button/button-group';
import LolFilterForm from '../components/LolFilterForm'

const Home = () => {
    const dispatch = useDispatch();
    const [isFilter, setIsFilter] = useState(false);
    const { me } = useSelector((state) => state.user);
    const { logInError, logInDone } = useSelector((state) => state.user);
    const { posts, loadPostLoading, loadPostError, detailLolPost, detailLolPostOn } = useSelector((state) => state.post);

    useEffect(() => {
        const data = { limit: 15, offset: 0, userToken: me.userToken, userId: me.userId }
        if (logInDone) {
            dispatch(loadAllLolPostsRequestAction(data));
            dispatch(loadAllMyLolPostsRequestAction(data));
        }
    }, [logInDone]);

    const onPagenate = useCallback((e) => {
        const data = { limit: 15, offset: (e-1)*15, userToken: me.userToken }
        dispatch(loadAllLolPostsRequestAction(data));
    }, []);


    const onIsFilter = useCallback(() => {
        setIsFilter(!isFilter);
    },[isFilter]);


    if (logInError === -401) {
        return (
            <AppLayout>
                <SignUpForm />
            </AppLayout>
        )
    } else {
        return (
            <AppLayout>
                {me.userToken
                    ? <div style={{ textAlign: 'right', margin: 20 }}>
                        <ButtonGroup><Button type="primary" style={{ marginLeft: '20px', backgroundColor: '#FA5A5A', borderColor: '#FA5A5A' }}><Link href="./lol_write"><a>글쓰기</a></Link></Button>
                        <Button onClick={onIsFilter} style={{borderColor: '#FA5A5A'}}>필터</Button></ButtonGroup>
                        <br/>
                        {isFilter && <LolFilterForm/>}
                    </div>
                    : <></>}

                <br />
                {me.userToken && !detailLolPostOn && posts.map((post) => <PostCard key={post.id} post={post} />)}
                {me.userToken && detailLolPostOn && <DetailPost />}
                {me.userToken && !detailLolPostOn &&<Pagination defaultCurrent={1} total={50} onChange={onPagenate} />}
            </AppLayout>
        );
    }
};

export default Home;