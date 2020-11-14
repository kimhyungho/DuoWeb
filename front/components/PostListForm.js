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
            
        </>
    );
}

export default PostListForm;