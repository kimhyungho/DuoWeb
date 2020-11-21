import React, { useCallback, useEffect } from 'react';
import { Button, List, Comment, Popover, Popconfirm } from 'antd';
import styled from 'styled-components';
import CommentForm from './CommentForm';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { detailLolPostOffAction, deleteLolPostRequestAction } from '../reducers/post';
import { emptyCommentsRequestAction } from '../reducers/comment';
import ButtonGroup from 'antd/lib/button/button-group';


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
                    <Button>
                        <Link href='/lol_update'><a>수정</a>
                        </Link>
                    </Button>
                    <Popconfirm title={'정말 삭제하시겠습니까?'} onConfirm={onDeleteLolPost} okText="삭제" cancelText="취소" okButtonProps={{ loading: deleteLolPostLoading }}>
                        <a href="#">Delete</a>
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