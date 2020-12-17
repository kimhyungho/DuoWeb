import React from 'react';
import PropTypes from 'prop-types';     // prop-types 모듈 사용
import Link from 'next/link';
import { Menu, Row, Col } from 'antd';            // https://ant.design/components/menu/
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { Button } from 'antd';

const Background = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #FFFFFF'
`

const ABOUT = () => {
    return (
        <Background id="about">
            <Row>
                <Col xs={24} md={12} >
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/kEhNNbKT7k8" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </Col>
                <Col xs={24} md={12} >
                </Col>
            </Row>
        </Background>
    );
};


export default ABOUT;