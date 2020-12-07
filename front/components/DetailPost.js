import React, { useCallback } from 'react';
import { Button, List, Comment, Popover, Popconfirm } from 'antd';
import styled from 'styled-components';
import CommentForm from './CommentForm';
import { useDispatch, useSelector } from 'react-redux';
import { detailLolPostOffAction, deleteLolPostRequestAction } from '../reducers/post';
import { emptyCommentsRequestAction } from '../reducers/comment';
import Router from 'next/router';
import Avatar from 'antd/lib/avatar/avatar';


const Frame = styled.div`
    border: 1px solid #000000;
`;

const DetailPost = () => {

    const { me } = useSelector((state) => state.user);
    const { detailLolPost, deleteLolPostLoading, deleteLolPostDone } = useSelector((state) => state.post);

    const { comments, loadCommentsLoading } = useSelector((state) => state.comment);
    const dispatch = useDispatch();

    const onClose = () => {
        dispatch(detailLolPostOffAction());
        dispatch(emptyCommentsRequestAction());
    }

    const onUpdate = useCallback(() => {
        Router.push('/lol_update')
    }, []);

    const onDeleteLolPost = useCallback(() => {
        const data = { userToken: me.userToken, userId: me.userId, postId: detailLolPost.id };
        dispatch(deleteLolPostRequestAction(data))
    }, []);


    return (
        <Frame style={{ width: '100%', padding: '20px' }}>
            <Button style={{ width: '100%' }} onClick={onClose} type="primary">닫기</Button>
            <div style={{ fontSize: 20 }}>{detailLolPost.title}</div>
            <div>{detailLolPost.content}</div>
            {me.userId === detailLolPost.userId
                && <div>
                    <Popconfirm title={'정말 수정하시겠습니까?'} onConfirm={onUpdate} okText="수정" cancelText="취소">
                        <a href="#">수정</a>
                    </Popconfirm>
                    <Popconfirm title={'정말 삭제하시겠습니까?'} onConfirm={onDeleteLolPost} okText="삭제" cancelText="취소" okButtonProps={{ loading: deleteLolPostLoading }}>
                        <a href="#">삭제</a>
                    </Popconfirm>
                </div>}
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
                                avatar={
                                    <Avatar style={{ color: '#000000', backgroundColor: '#FFFFFF' }}>{item.nickname[0]}</Avatar>
                                }

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