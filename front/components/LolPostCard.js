import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import { Card } from 'antd';
import { ArrowDownOutlined } from '@ant-design/icons';
import DetailPost from './DetailPost';

const CardWrapper = styled.div`
    margin: 20px;
    display: inline-block;
    width: 350px;    
`;

const CardMeta = styled(Card.Meta)`
    height: 150px;
`;

const LolPostCard = ({ post }) => {

    const [more, setMore] = useState(false);
    const onClickMore = useCallback(() => {
        setMore(true);

    }, []);
    const onClickClose = useCallback(() => {
        setMore(false);

    }, []);

    return (
        <>
            {more ? <DetailPost onClose={onClickClose} data={post}/> : <CardWrapper key={post.id}>
                <Card
                    actions={[<ArrowDownOutlined key="more" onClick={onClickMore} />]}
                ><CardMeta
                        title={post.title}
                        description={post.content}
                    />
                </Card>
            </CardWrapper>}

        </>
    );
};


export default LolPostCard;