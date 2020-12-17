import React from 'react';
import { Menu, Row, Col } from 'antd';            // https://ant.design/components/menu/
import styled from 'styled-components';

const Background = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #FFFFFF
`

const HELP = () => {
    return (
        <div id="help" style={{width: '100%', height: '100vh', backgroundColor: '#FFFFFF'}}>
        <Row>
            <Col xs={24} md={12} >
            </Col>
            <Col xs={24} md={12} >
            </Col>
        </Row>

    </div>
    );
};

export default HELP;