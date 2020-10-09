import React from 'react';
import { Button, Form, Input } from 'antd';

const CommentForm = ({ data }) => {
    return (
        <>
            <Form>
                <Form.Item style={{position: 'relative'}}>
                    <Input.TextArea></Input.TextArea>
                    <Button style={{position: 'absolute', right: 0, bottom: -40}} htmlType='submit'>제출</Button>
                </Form.Item>
            </Form>
        </>

    )
};



export default CommentForm;