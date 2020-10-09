import React from 'react';
import { Button, List, Comment, Popover } from 'antd';
import styled from 'styled-components';
import CommentForm from './CommentForm';
import { useSelector } from 'react-redux';

const Frame = styled.div`
    border: 1px solid #000000;
`;

const DetailPost = ({ onClose, data }) => {
    const { userId } = useSelector((state) => state.user)
    
    return (
        <Frame style={{ width: '100%', padding: '20px' }}>
            <Button style={{ width: '100%' }} onClick={onClose} type="primary">닫기</Button>
            <div style={{fontSize: 20}}>{data.title}</div>
            <div>{data.content}</div>
            <Popover
                key="ellipsis"
                content={(
                    <Button.Group>
                        {userId && data.userId == userId ? (
                            <>
                                <Button>수정</Button>
                            </>
                        )
                    : <Button>신고</Button>}
                    </Button.Group>
                )}
            >

            </Popover>
            <CommentForm />
            <List
                header={`${data.Comments ? data.Comments.length : 0}개의 댓글`}
                itemLayout="horizontal"
                dataSource={data.Comments}
                renderItem={(item) => (
                    <li>
                        <Comment
                            author={item.userNickname}
                            content={item.content}
                        />
                    </li>
                )}
            >
            </List>
        </Frame>
    );
};

export default DetailPost;