import React from 'react';
import { Button, Form, Input } from 'antd';
import Lol_Write from '../pages/lol_write';
import { useSelector } from 'react-redux';

const LolWriteFrom = () => {
    const userId = useSelector((state) => state.user.userId)
    return (
        <>
            {userId
                ? <Form style={{ margin: '20px' }}>
                    <Input placeholder={'제목'} style={{ marginBottom: '20px' }}></Input>
                    <Input.TextArea placeholder={'내용'} style={{ height: '200px' }}></Input.TextArea>
                    <Button>제출</Button>
                </Form>
                : <div>글쓰기 - 로그인이 필요한 페이지입니다</div>}

        </>

    )
};



export default LolWriteFrom;