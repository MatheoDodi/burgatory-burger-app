import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const NavigationList = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    justify-content: flex-end;
    height: 100%;
    @media (max-width: 500px) {
        display: flex;
    }
    @media (max-width: 700px) {
        display: ${props => props.display};
        flex-direction: column;
    }
`

const ListItem = styled.li`
    margin: 0;
    box-sizing: border-box;
    height: 100%;
    align-items: center;
    & > a {
        color: white;
        text-decoration: none;
        height: 100%;
        padding: 16px 10px;
        border-bottom: 4px solid transparent;
        box-sizing: border-box;
        display: block;
        transition: all 0.2s;
        font-size: ${props => props.textSize};
    }
    & > a:active, a:hover {
        background-color: #8f5C2C;
        border-bottom: 4px solid #DC3C44;
        cursor: pointer;

    }
`


const navigationItems = (props) => {
  return (
    <NavigationList display={props.display}>
        <ListItem onClick={props.goBurgerBuilder} textSize={props.textSize}><NavLink to="/">Burger Builder</NavLink></ListItem>
        <ListItem onClick={props.goCheckout} textSize={props.textSize}><NavLink to="/orders">My Orders</NavLink></ListItem>
        <ListItem onClick={props.goCheckout} textSize={props.textSize}><NavLink to="/sign-in">Sign In</NavLink></ListItem>
    </NavigationList>
  )
}

export default navigationItems;