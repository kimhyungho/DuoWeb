import React from 'react';
import { List, Card } from 'antd';
import styled from 'styled-components';


const LolPostList = ({ data }) => {

    const ListWrapper = styled(List.Item)`
        margin-top: 5px;
        width: 270px;
    `;
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
                    <ListWrapper>
                        <Card actions={[item.content]}>
                            <Card.Meta description={item.title} />
                        </Card>
                    </ListWrapper>
                )}
            />
        </>
    );
};


export default LolPostList;