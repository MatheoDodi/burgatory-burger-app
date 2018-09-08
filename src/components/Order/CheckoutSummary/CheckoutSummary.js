import React from 'react';
import styled from 'styled-components';
import Burger from '../../Burger/Burger';

const SummaryDiv = styled.div`
	text-align: center;
	width: 80%;
	margin: auto;
`

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

const checkoutSummary = (props) => {
    return (
        <SummaryDiv>
            <h1>We hope it tastes delicious!</h1>
            <div style={{width: '100%', margin: 'auto'}}>
				<Burger ingredients={props.ingredients} />
            </div>
			<DangerButton onClick={props.onCheckoutCancel}>Cancel</DangerButton>
			<SuccessButton onClick={props.onCheckoutContinue}>Confirm</SuccessButton>
        </SummaryDiv>
    )
}

export default checkoutSummary;