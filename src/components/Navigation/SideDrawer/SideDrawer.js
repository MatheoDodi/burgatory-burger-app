import React from 'react';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import styled from 'styled-components';

const SideDrawerDiv = styled.div`
    position: fixed;
    width: 280px;
    max-width: 70%;
    height: 100%;
    left: 0;
    top: 0;
    z-index: 70;
    background-color: white;
    padding: 32px 16px;
    box-sizing: border-box;
    transition: transfrom 0.3s ease-out;
    @media (min-width: 500px) {
        display: none;
    }
`

const sideDrawer = (props) => {


    return (
        <SideDrawerDiv>
            <Logo height={'5%'}/>
            <nav>
                <NavigationItems textColor={'black'}/>
            </nav>
        </SideDrawerDiv>
    );
}

export default sideDrawer;