import { Button, Pagination, Row, Col } from 'antd';
import React from 'react';
import APP from '../components/App';
import CHARACTOR from '../components/Charactor';
import ABOUT from '../components/About';
import HELP from '../components/Help';
import MenuBar from '../components/Menu';
import styled from 'styled-components';



const Index = () => {
    return (
        <div style={{fontFamily:'Noto Sans KR'}}>
            <APP/>
            <ABOUT />
            <CHARACTOR />
            <HELP />
            <MenuBar/>
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

export default Index;
