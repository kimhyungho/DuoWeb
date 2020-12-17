import React from 'react';
import { Menu, Row, Col } from 'antd';            // https://ant.design/components/menu/
import styled from 'styled-components';


const MenuBar = () => {
    return (
        <div style={{color: 'white', position: 'fixed', height: '75px', width: '100%', right: 0, top: 0, left: 0}}>
            <nav style={{float: "right", marginTop: 20}}>
                <span style={{marginRight: '10vh'}}><a href="#home">HOME</a></span>
                <span style={{marginRight: '10vh'}}><a href="#about">ABOUT</a></span>
                <span style={{marginRight: '10vh'}}><a href="#charactor">CHARACTOR</a></span>
                <span style={{marginRight: '10vh'}}><a href="#help">HELP</a></span>
            </nav>
        </div>
    );
};

export default MenuBar;