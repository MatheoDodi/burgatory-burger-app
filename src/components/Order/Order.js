import React from 'react';
import styled from 'styled-components';
import BurgerIngredients from '../Burger/BurgerIngredients/BurgerIngredients';

const OrderContainer = styled.div` 
    width: 80%;
    border: 1px solid #ccc;
    box-shadow: 0 2px 3px rgba(0,0,0,.25);
    padding: 10px;
    margin: 10px auto;
    box-sizing: border-box;
`

const List = styled.ul`
    list-style: none;
    padding: 30px;
`

const ListItem = styled.li`
    display: inline-block;
    margin-right: 1rem;
`

const order = (props) => (
    <OrderContainer>
        <List>
            {Object.keys(props.ingredients).map(ing => (
                    <ListItem>{ing} : {props.ingredients[ing]}</ListItem>
            ))}
        </List>
        <p style={{marginLeft: '2rem'}}>Price <strong>$ {Number.parseFloat(props.price).toFixed(2)}</strong></p>
    </OrderContainer>
);

export default order;