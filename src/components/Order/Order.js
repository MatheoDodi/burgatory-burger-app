import React from 'react';
import styled from 'styled-components';

const OrderContainer = styled.div` 
    width: 100%;
    border: 1px solid #eee;
    box-shadow: 0 2px 3px #eee;
    padding: 10px;
    margin: 10px auto;
    box-sizing: border-box;
`

const order = (props) => (
    <OrderContainer>
        <p>Ingredients : Salad (1)</p>
        <p>Price <strong>$ 5.45</strong></p>
    </OrderContainer>
);

export default order;