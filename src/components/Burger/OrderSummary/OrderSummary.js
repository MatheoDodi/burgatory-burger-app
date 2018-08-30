import React, { Fragment } from 'react';
import styled from 'styled-components';

const SuccessButton = styled.button`
    background-color: transparent;
    border: none;
    color: #5C9210;
    outline: none;
    cursor: pointer;
    font: inherit;
    padding: 10px;
    margin: 10px;
    font-weight: bold;
    font-size: 1.35rem;
`

const DangerButton = styled.button`
    background-color: transparent;
    border: none;
    color: #EF233C;
    outline: none;
    cursor: pointer;
    font: inherit;
    padding: 10px;
    margin: 10px;
    font-weight: bold;
    font-size: 1.35rem;
`

const orderSummary = (props) => {
    const showIngredients = Object.keys(props.ingredients).map((keyIngr,index) => {
        return  <li key={keyIngr} style={{textTransform: 'Capitalize'}}>
                    {keyIngr} : {props.ingredients[keyIngr]
                }</li>
    })
    return (
        <Fragment>
            <h2>Your Order</h2>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {showIngredients}
            </ul>
            <h3>Total: ${props.total.toFixed(2)}</h3>
            <p>Continue to Checkout</p>
            <DangerButton onClick={props.cancel}>Cancel</DangerButton>
            <SuccessButton>Continue</SuccessButton>
        </Fragment>
    )
}

export default orderSummary;