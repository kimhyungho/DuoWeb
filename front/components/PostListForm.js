import React, { useEffect } from 'react'
import { } from 'antd';
import LolPostCard from '../components/LolPostCard';
import { useDispatch, useSelector } from 'react-redux';
import { getAllLoLPostRequest } from '../reducers/post';

const PostListForm = () => {
    const { userId } = useSelector((state) => state.user.me);
    const { posts } = useSelector((state) => state.post);

    return (
        <>
            {userId
                ? posts.map((c) => { return (<div onClick={postRequest}><LolPostCard key={c.id} post={c} /></div>); })
                : <div>로그인이 필요합니다.</div>
            }
        </>
    );
}



export default PostListForm;