import React, { useCallback, useState } from 'react';
import { Button, Input, Form } from 'antd';
import { useSelector } from 'react-redux';

const MyInfo = () => {
    const {nickname} = useSelector((state) => state.user);
    const [isChangeNickname, setIsChangeNickname] = useState(false);

    const [userNickname, setNickname] = useState(nickname);
    const onIsChangeNickname = useCallback(() => {
        setIsChangeNickname(true)
    });

    const onCompelteChangeNickname = useCallback(() => {
        // 받아와서 Nickname state 변경
        setIsChangeNickname(false)
    });

    const onSetNickname = useCallback((e) => {
        setNickname(e.target.value)
    });

    return (
        <>
            {isChangeNickname
                ? <Form>
                    <Input onChange={onSetNickname} type="text" suffix={<Button onClick={onCompelteChangeNickname} htmlType="submit" type="primary">확인</Button>} />
                </Form>
                : <Input prefix={userNickname} suffix={<Button onClick={onIsChangeNickname}>변경</Button>} disabled />}

            <Button>회원탈퇴</Button>
        </>
    );
}
// <Form><Input prefix={userNickname} suffix={<Button onClick={onCompelteChangeNickname} htmlType="submit"></Button>}></Input> </Form>
export default MyInfo;