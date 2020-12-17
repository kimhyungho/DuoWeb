import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import { Card, Tag } from 'antd';
import { ArrowDownOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { detailLolPostOnAction } from '../reducers/post';
import { loadCommentsRequestAction } from '../reducers/comment';


const CardWrapper = styled.div`
    margin: 20px;
    display: inline-block;
    width: 360px;
`;

const CardMeta = styled(Card.Meta)`
    height: 160px;
`;

const LolPostCard = ({ post }) => {

    const { me } = useSelector((state) => state.user);
    const { loadPostLoading, loadPostError, detailLolPost } = useSelector((state) => state.post);
    const dispatch = useDispatch();

    const onClickMore = useCallback(() => {
        const data = { userToken: me.userToken, postId: post.id }
        dispatch(detailLolPostOnAction(post));
        dispatch(loadCommentsRequestAction(data));
    }, []);


    function tierToString(tier) {
        switch(tier){
            case 1 : return "상관없음"
            case 6 : return "Iron4"
            case 7 : return "Iron3"
            case 8 : return "Iron2"
            case 9 : return "Iron1"
            case 16 : return "Bronze4"
            case 17 : return "Bronze3"
            case 18 : return "Bronze2"
            case 19 : return "Bronze1"
            case 26 : return "Silver4"
            case 27 : return "Silver3"
            case 28 : return "Silver2"
            case 29 : return "Silver1"
            case 36 : return "Gold4"
            case 37 : return "Gold3"
            case 38 : return "Gold2"
            case 39 : return "Gold1"
            case 46 : return "Platinum4"
            case 47 : return "Platinum3"
            case 48 : return "Platinum2"
            case 49 : return "Platinum1"
            case 56 : return "Diamond4"
            case 57 : return "Diamond3"
            case 58 : return "Diamond2"
            case 59 : return "Diamond1"
            case 70 : return "Master"
            case 80 : return "GrandMaster"
            case 90 : return "Challenger"
            case 100 : return "상관없음"
            default: return "에러"
        }
    }

    return (
        <>
            <CardWrapper key={post.id}>
                <Card
                    actions={[<ArrowDownOutlined key="more" onClick={onClickMore} />]}
                    bordered={true}
                ><CardMeta
                        title={
                            <>
                                <text style={{fontWeight: 'bold'}}>{post.title}</text>
                                <br/>
                                {post.gameMode}
                                <br/>
                                {post.headCount}명
                                <br/>
                                {tierToString(post.startTier)} ~ {tierToString(post.endTier)}
                                <br/>
                                {post.top === 1 && <Tag color='#424242'>탑</Tag>}
                                {post.jungle === 1 && <Tag color='#424242'>정글</Tag>}
                                {post.mid === 1 && <Tag color='#424242'>미드</Tag>}
                                {post.bottom === 1 && <Tag color='#424242'>바텀</Tag>}
                                {post.support === 1 && <Tag color='#424242'>서폿</Tag>}
                                <br/>
                                만료
                            </>
                        }
                        description={post.title}
                    />
                </Card>
            </CardWrapper>
        </>
    );
};


export default LolPostCard;