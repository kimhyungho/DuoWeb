import { Button, Pagination } from 'antd';
import React, { useEffect, useCallback, useState } from 'react';
import AppLayout from '../components/AppLayout';
import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';
import SignUpForm from '../components/SignUpForm';
import { loadAllLolPostsRequestAction } from '../reducers/post';
import PostCard from '../components/LolPostCard'
import DetailPost from '../components/DetailPost';
import ButtonGroup from 'antd/lib/button/button-group';
import LolFilterForm from '../components/LolFilterForm'
import styled from 'styled-components';
import LOGO from '../images/WEB_LOGO.png'

const Background = styled.div`
    width: 100%;
    height: 100vh;

    background-color: #FA5A5A


`

const Index = () => {
        return (
               <Background>
                    <div>
                        <img src={LOGO} style={{height: "100vh", textAlign: 'right', float: 'right'}}></img>
                    </div>
                </Background>

        );
};

export default Index;