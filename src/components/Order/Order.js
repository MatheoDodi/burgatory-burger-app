import React from 'react';
import styled from 'styled-components';

const OrderContainer = styled.div` 
    width: 60%;
    border: 1px solid rgba(0,0,0,.2);
    box-shadow: 0 5px 8px rgba(0,0,0,.25);
    border-radius: 15px;
    padding: 30px;
    margin: 20px auto;
    box-sizing: border-box;
    @media (max-width: 800px) {
        width: 90%;
    }
`

const List = styled.ul`
    list-style: none;
    padding: 10px 0;
    margin: 0;
`

const ListItem = styled.li`
    display: inline-block;
    margin: 0 3rem 2rem 0;
    &::first-letter {
        text-transform: capitalize;
    }
`

const order = (props) => (
    <OrderContainer>
        <p>Order submitted by: {props.data.name}<br /> Preffered delivery method: {props.data.deliveryMethod}</p>
        <span>Ingredients</span>
        <List>
            {Object.keys(props.ingredients).map(ing => (
                    <ListItem key={ing} >{ing} : {props.ingredients[ing]}</ListItem>
            ))}
        </List>
        <h3 style={{margin: '0'}}>Price <strong>$ {Number.parseFloat(props.price).toFixed(2)}</strong></h3>
    </OrderContainer>
);

export default order;