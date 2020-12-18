import React from 'react';
import LoginFrom from '../components/LoginForm';
import { Row, Col } from 'antd';

const Login = () => {
    return (
        <div style={{ display: 'block', backgroundColor: '#F3F5F7', height: '100vh'}}>
            <Row>
                <Col xs={24} md={8} >
                </Col>
                <Col xs={24} md={8} style={{marginTop: '5%'}}>
                    <LoginFrom/>
                </Col>
                <Col xs={24} md={8}>
                </Col>
            </Row>

        </div>

    );
};

export const getServerSideProps = wrapper.getServerSideProps(async (context) => {
    console.log('getServerSideProps start');
    console.log(context.req.headers);
    const cookie = context.req ? context.req.headers.cookie : '';
    axios.defaults.headers.Cookie = '';
    if(context.req && cookie) {
        axios.defaults.headers.Cookie = cookie;
    }
});


export default Login;
