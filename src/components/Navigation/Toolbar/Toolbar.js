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
    background-color: #2B2D40;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
    padding: 0 20px;
    box-sizing: border-box;
    z-index: 20;
    color: white;
`



const toolbar = (props) => (
    <Header>
        <div>MENU</div>
        <Logo />
        <NavigationItems />
    </Header>
);

export default toolbar;