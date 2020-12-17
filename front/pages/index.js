import { Button, Pagination, Row, Col } from 'antd';
import React from 'react';
import APP from '../components/App';
import CHARACTOR from '../components/Charactor';
import ABOUT from '../components/About';
import HELP from '../components/Help';



const Index = () => {
    return (
        <div style={{fontFamily:'Noto Sans KR'}}>
            <div style={{width: '100%', height: '25%'}}><APP/></div>
            
            <ABOUT />
            <CHARACTOR />
            <HELP />
        </div>
    );
};

export default Index;