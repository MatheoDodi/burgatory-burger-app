import React, { Fragment } from 'react';

const orderSummary = ({ingredients}) => {
    const showIngredients = Object.keys(ingredients).map(keyIngr => {
        return  <li style={{textTransform: 'Capitalize'}}>
                    {keyIngr} : {ingredients[keyIngr]
                }</li>
    })
    return (
        <Fragment>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {showIngredients}
            </ul>
            <p>Continue to Checkout</p>
        </Fragment>
    )
}

export default orderSummary;