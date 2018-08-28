import React from 'react';
import BurgerIngredients from './BurgerIngredients/BurgerIngredients';
import styled from 'styled-components';

const BurgerShape = styled.div`
    width: 100%;
    margin: auto;
    height: 250px;
    overflow: scroll;
    text-align: center;
    font-size: 1.2rem;
    @media (min-width: 500px) and (min-height: 400px) {
        width: 350px;
        height: 300px;
    } 
    @media (min-width: 500px) and (min-height: 401px) {
        width: 450px;
        height: 400px;
    }    
    @media (min-width: 1000px) and (min-height: 700px) {
        width: 700px;
        height: 600px;
    }
`

const burger = (props) => {
    const ingredients = props.ingredients;
    const ingredientsArr = [];
    for (let item in ingredients) {
        const amount = ingredients[item];

        for (let i = 0; i < amount; i++) {
            ingredientsArr.push(item)
        }
    }
    const allIngredients = ingredientsArr.map((item, index) => <BurgerIngredients key={item + index} type={item} />)

    return (
        <BurgerShape>
            <BurgerIngredients type="bread-top" />
            {allIngredients}
            <BurgerIngredients type="bread-bottom" />
        </BurgerShape>
    );
}

export default burger;