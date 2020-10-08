import React from 'react';
import { List, Card, Button } from 'antd';
import styled from 'styled-components';

const PostCard = styled(Card)`
    width: 350px;
    height: ;
`;

const ListItem = styled(List.Item)`
    height: 100px;
`;

const LolPostList = ({ data }) => {

    return (
        <>
            <List
                style={{ marginBottom: 10 }}
                grid={{ gutter: 1, xs: 1, md: 1 }}
                size="large"
                header="글 목록"
                pagination={{
                    onChange: page => {

                    },
                    pageSize: 12,
                }}
                bordered
                dataSource={data}
                renderItem={(item) => (
                    <ListItem>
                        <PostCard title={item.title} actions={["자세히보기"]}>{item.content}</PostCard>
                    </ListItem>
                )}
            />
        </>
    );
};


export default LolPostList;