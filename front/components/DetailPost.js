import React, { useCallback } from 'react';
import { Button, List, Comment, Popover, Popconfirm, Tag } from 'antd';
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


    // useEffect(() => {
    //     if (deleteLolPostDone) {
            
    //     }
    //     }, [deleteLolPostDone]);


    const changeTier = (tier) => {

        switch (tier) {
            case 1:
                return "상관없음"
                break;
            case 6:
                return "아이언4"
                break;
            case 7:
                return "아이언3"
                break;
            case 8:
                return "아이언2"
                break;
            case 9:
                return "아이언1"
                break;
            case 16:
                return "브론즈4"
                break;
            case 17:
                return "브론즈3"
                break;
            case 18:
                return "브론즈2"
                break;
            case 19:
                return "브론즈1"
                break;
            case 26:
                return "실버4"
                break;
            case 27:
                return "실버3"
                break;
            case 28:
                return "실버2"
                break;
            case 29:
                return "실버1"
                break;
            case 36:
                return "골드4"
                break;
            case 37:
                return "골드3"
                break;
            case 38:
                return "골드2"
                break;
            case 39:
                return "골드1"
                break;
            case 46:
                return "플레티넘4"
                break;
            case 47:
                return "플레티넘3"
                break;
            case 48:
                return "플레티넘2"
                break;
            case 49:
                return "플레티넘1"
                break;
            case 56:
                return "다이아4"
                break;
            case 57:
                return "다이아3"
                break;
            case 58:
                return "다이아2"
                break;
            case 59:
                return "다이아1"
                break;
            case 70:
                return "마스터"
                break;
            case 80:
                return "그랜드마스터"
                break;
            case 90:
                return "챌린저"
                break;
            case 100:
                return "상관없음"
                break;
        }

    };


    return (
        <Frame style={{ width: '100%', padding: '20px' }}>
            <Button style={{ width: '100%', backgroundColor: "#FA5A5A", borderColor: "#FFFFFF" }} onClick={onClose} type="primary">닫기</Button>
            <br />
            <Avatar style={{ color: '#000000', backgroundColor: '#FFFFFF' }}>{detailLolPost.nickname[0]}</Avatar> <text style={{ fontWeight: 'bold' }}>{detailLolPost.nickname}</text>
            <div style={{ fontSize: 20, fontWeight: 'bold' }}>{detailLolPost.title}</div>
            <Tag style={{ marginTop: 3 }} color="gray">게임 모드</Tag>
            {detailLolPost.gameMode}
            <br />
            <Tag style={{ marginTop: 3 }} color="gray">모집 인원</Tag>
            {detailLolPost.headCount}명
            <br />
            <Tag style={{ marginTop: 3 }} color="gray">모집 티어</Tag>
            {changeTier(detailLolPost.startTier)}~{changeTier(detailLolPost.endTier)}
            <br />
            <Tag style={{ marginTop: 3 }} color="gray">모집 포지션</Tag>
            {detailLolPost.top} {detailLolPost.jungle} {detailLolPost.mid} {detailLolPost.bottom} {detailLolPost.support}
            <br />
            <Tag style={{ marginTop: 3 }} color="gray">마이크 여부</Tag>
            {detailLolPost.talkon}
            <br />
            <div style={{ marginBottom: 30 }}>{detailLolPost.content}</div>
            {me.userId === detailLolPost.userId
                && <div>
                    <Popconfirm title={'정말 수정하시겠습니까?'} onConfirm={onUpdate} okText="수정" cancelText="취소">
                        <a href="#">수정</a>
                    </Popconfirm>
                    <Popconfirm title={'정말 삭제하시겠습니까?'} onConfirm={onDeleteLolPost} okText="삭제" cancelText="취소" okButtonProps={{ loading: deleteLolPostLoading }}>
                        <a href="#" style={{ color: '#FA5A5A' }}>삭제</a>
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