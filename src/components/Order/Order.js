import React from 'react';
import styled from 'styled-components';

const OrderContainer = styled.div` 
    width: 80%;
    border: 1px solid rgba(0,0,0,.2);
    box-shadow: 0 4px 5px rgba(0,0,0,.25);
    border-radius: 15px;
    padding: 30px;
    margin: 10px auto;
    box-sizing: border-box;
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
        <h3>Ingredients</h3>
        <List>
            {Object.keys(props.ingredients).map(ing => (
                    <ListItem key={ing} >{ing} : {props.ingredients[ing]}</ListItem>
            ))}
        </List>
        <h3 style={{margin: '0'}}>Price <strong>$ {Number.parseFloat(props.price).toFixed(2)}</strong></h3>
    </OrderContainer>
);

export default order;