import React from 'react';
import { Button } from 'antd';
import Link from 'next/link';
import styled from 'styled-components';




const LoginFrom = () => {
    return (
        <div>
            <Button>카카오 로그인</Button>       
            <Button>네이버 로그인</Button>     
            <Button>구글 로그인</Button>
        </div>
    );
};

export default LoginFrom;