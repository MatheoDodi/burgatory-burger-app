import React, { Fragment } from 'react';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import styled from 'styled-components';
import '../../UI/Backdrop/Backdrop';

const SideDrawerDiv = styled.div`
    position: fixed;
    width: 280px;
    max-width: 70%;
    height: 100%;
    left: 0;
    top: 0;
    z-index: 70;
    padding-top: 2rem;
    background: #000000;
    box-sizing: border-box;
    transition: transfrom 0.3s ease-out;
    box-shadow: 9px 0px 10px rgba(0,0,0,.70);
    transition: all 0.2s ease-out;
    transform: ${props => props.show ? 'translateX(0)' : 'translateX(-400px)'};
    @media (min-width: 1300px) {
        display: none;
    }
`

const sideDrawer = (props) => {


    return (
        <Fragment>
            <SideDrawerDiv show={props.showSidebar}>
                <Logo height={'5%'}/>
                <nav style={{marginTop: '2rem'}}>
                    <NavigationItems clicked={props.hideSidebar} textSize={'1.25rem'}/>
                </nav>
            </SideDrawerDiv>
            <Backdrop 
                clicked={props.hideSidebar}
                show={props.showSidebar}/>
        </Fragment>
    );
}

export default sideDrawer;