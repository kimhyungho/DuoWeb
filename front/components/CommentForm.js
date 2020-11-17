import React, { useEffect } from 'react';
import { Button, Form, Input } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { loadCommentsRequestAction } from '../reducers/comment';

const CommentForm = () => {
    return (
        <>
            <Form>
                <Form.Item style={{ position: 'relative' }}>
                    <Input.TextArea></Input.TextArea>
                    <Button style={{ position: 'absolute', right: 0, bottom: -40 }} htmlType='submit'>제출</Button>
                </Form.Item>
            </Form>
        </>

    )
};



export default CommentForm;