import { Button, Pagination, Row, Col } from 'antd';
import React from 'react';
import APP from '../components/App';
import CHARACTOR from '../components/Charactor';
import ABOUT from '../components/About';
import HELP from '../components/Help';



const Index = () => {
    return (
        <div>
            <APP/>
            <ABOUT/>
            <CHARACTOR/>
            <HELP/>
        </div>
    );
};

export default Index;