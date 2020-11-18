import React, { useEffect } from 'react';
import { Button, List, Comment, Popover } from 'antd';
import styled from 'styled-components';
import CommentForm from './CommentForm';
import { useDispatch, useSelector } from 'react-redux';
import { detailLolPostOffAction } from '../reducers/post';
import { emptyCommentsRequestAction } from '../reducers/comment';
import ButtonGroup from 'antd/lib/button/button-group';

const Frame = styled.div`
    border: 1px solid #000000;
`;

const DetailPost = () => {
    
    const {me} = useSelector((state) => state.user);
    const { detailLolPost } = useSelector((state) => state.post);
    const { comments, loadCommentsLoading } = useSelector((state) => state.comment);
    const dispatch = useDispatch();

    const onClose = () => {
        dispatch(detailLolPostOffAction());
        dispatch(emptyCommentsRequestAction());
    }


    return (
        <Frame style={{ width: '100%', padding: '20px' }}>
            <Button style={{ width: '100%' }} onClick={onClose} type="primary">닫기</Button>
            <div style={{ fontSize: 20 }}>{detailLolPost.title}</div>
            <div>{detailLolPost.content}</div>
            {me.userId === detailLolPost.userId && <ButtonGroup><Button>수정</Button><Button type="primary">삭제</Button></ButtonGroup>}
            <CommentForm />
            <List
                loading={loadCommentsLoading}
                header={`${comments ? comments.length : 0}개의 댓글`}
                itemLayout="horizontal"
                dataSource={comments}
                renderItem={(item) => (
                    <>
                        <li>
                            <Comment
                                author={item.nickname}
                                content={item.content}
                            />
                        </li>
                        
                    </>
                )}
            >
            </List>
        </Frame>
    );
};

export default DetailPost;