import React from 'react';
import styled from 'styled-components';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';

const Header = styled.header`
    height: auto;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background-color: #000000;
    display: grid;
    grid-template-columns: 3fr 1fr 3fr;
    align-items: center;
    padding: 0 20px;
    box-sizing: border-box;
    z-index: 20;
    color: white;
`

const MenuIconDiv = styled.div`
    width: 58px;
    height: 58px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    @media (min-width: 1300px) {
        height: 0;
    }
`

const MenuIconLines = styled.div`
    width: 35px;
    height: 3px;
    margin: 3px 0;
    border-radius: 5px;
    background-color: white;
`



const toolbar = (props) => (
    <Header>
        <MenuIconDiv onClick={props.showSidebar}>
            <MenuIconLines />
            <MenuIconLines />
            <MenuIconLines />
        </MenuIconDiv>
        <Logo height={"80%"}/>
        <NavigationItems goBurgerBuilder={props.goBurgerBuilder} goCheckout={props.goCheckout} display={'none'}/>
    </Header>
);

export default toolbar;