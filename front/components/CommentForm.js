import React, { useCallback, useState, useEffect } from 'react';
import { Button, Form, Input } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { addCommentRequestAction, loadCommentsRequestAction } from '../reducers/comment';


const CommentForm = () => {

    const { me } = useSelector((state) => state.user);
    const { detailLolPost } = useSelector((state) => state.post);
    const { addCommentLoading, addCommentDone } = useSelector((state) => state.comment);
    const dispatch = useDispatch();
    const [content, setContent] = useState('');

    useEffect(() => {
        const data = { content: content, userId: me.userId, postId: detailLolPost.id, nickname: me.nickname };
        if (addCommentDone) {
            dispatch(loadCommentsRequestAction(data));
            setContent('');
        }
    }, [addCommentDone]);

    const onChangeComment = useCallback((e) => {
        setContent(e.target.value);
    });

    const onAddComment = useCallback(() => {
        const data = { content: content, userId: me.userId, postId: detailLolPost.id, nickname: me.nickname };
        dispatch(addCommentRequestAction(data));
    }, [content]);

    return (
        <>
            <Form>
                <Form.Item style={{ position: 'relative' }}>
                    <Input.TextArea value={content} onChange={onChangeComment}></Input.TextArea>
                    <Button loading={addCommentLoading} onClick={onAddComment} style={{ position: 'absolute', right: 0, bottom: -40 }} htmlType='submit'>제출</Button>
                </Form.Item>
            </Form>
        </>

    )
};



export default CommentForm;