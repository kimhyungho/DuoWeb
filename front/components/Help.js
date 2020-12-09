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
                <div>
                    <nav>
                    <a href="#home" style={{ color: '#FA5A5A', display: 'inline', marginLeft: '50px', fontSize: '2vh'}}>HOME</a>
                            <a href="#about" style={{ color: '#FA5A5A', display: 'inline', marginLeft: '50px', fontSize: '2vh'}}>ABOUT</a>
                            <a href="#charactor" style={{ color: '#FA5A5A', display: 'inline', marginLeft: '50px', fontSize: '2vh'}}>CHARACTOR</a>
                            <a href="#help" style={{ color: '#FA5A5A', display: 'inline', marginLeft: '50px', fontSize: '2vh'}}>HELP</a>
                    </nav>
                </div>
            </Col>
        </Row>

    </div>
    );
};

export default HELP;