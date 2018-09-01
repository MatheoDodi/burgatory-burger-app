import React from 'react';
import styled from 'styled-components';

const NavigationList = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    justify-content: flex-end;
    height: 100%;
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
        transition: all 0.2s
    }
    & > a:active, a:hover {
        background-color: #8f5C2C;
        border-bottom: 4px solid #DC3C44;
        cursor: pointer;

    }
`

const navigationItems = (props) => {
  return (
    <NavigationList>
        <ListItem><a style={{color: props.textColor ? 'black' : 'white'}}>Burger Builder</a></ListItem>
        <ListItem><a style={{color: props.textColor ? 'black' : 'white'}}>Checkout</a></ListItem>
    </NavigationList>
  )
}

export default navigationItems;