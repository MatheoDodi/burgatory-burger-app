import React from 'react';
import styled from 'styled-components';
import Burger from '../../Burger/Burger';

const SummaryDiv = styled.div`
	text-align: center;
	width: 80%;
	margin: auto;
`

const checkoutSummary = (props) => {
    return (
        <SummaryDiv>
            {/* {<h1>We hope it tastes delicious!</h1>
            <div style={{width: '100%', margin: 'auto'}}>
				<Burger ingredients={props.ingredients} />
            </div>} */}
            <h3>Let's get that belly filled up!</h3>
        </SummaryDiv>
    )
}

export default checkoutSummary;