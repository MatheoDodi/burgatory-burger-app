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
    background-color: #293B52;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
    padding: 0 20px;
    box-sizing: border-box;
    z-index: 20;
    color: white;
`

const MenuIconDiv = styled.div`
    height: 58px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    @media (min-width: 700px) {
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
        <NavigationItems display={'none'}/>
    </Header>
);

export default toolbar;