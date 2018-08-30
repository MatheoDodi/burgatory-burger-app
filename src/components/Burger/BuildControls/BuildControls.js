import React, {Fragment} from 'react';
import styled from 'styled-components';
import BuildControl from './BuildControl/BuildControl';

const BuildControlsStyle = styled.div`
    width: 100%;
    background-color: #EF233C;
    display: flex;
    flex-flow: column;
    align-items: center;
    box-shadow: 0 2px 1px #CCC;
    margin: auto;
    padding: 10px 0;
`

const PriceParagraph = styled.p`
    font-size: 1.6rem;
    text-align: center;
    margin: 0;
    padding: 1rem;
    background-color: #2B2D42;
    color: white;
`

const OrderButton = styled.button`
    margin-top: 1rem;
    background-color: #DAD735;
    outline: none;
    cursor: pointer;
    border: 1px solid #966909;
    color: #966909;
    font-family: inherit;
    font-size: 1.2rem;
    padding: 15px 30px;
    box-shadow: 0px 4px 3px 1px rgba(0,0,0,.2);
    transition: all 0.02s ease-in-out;
    &:hover,:active {
        background-color: #A0DB51;
        border: 1px solid #966909;
        color: #966909;
        box-shadow: 0px 5px 4px 2px rgba(0,0,0,.2);
        transform: scale(1.01);
    }
    &:disabled {
        background-color: #C7C6C6;
        cursor: not-allowed;
        border: 1px solid #ccc;
        color: #888888;
    }
    &:not(:disabled){
        animation: enable 0.3s linear;
    }
    @keyframes enable {
        0% {
            transfrom: scale(1);
        }
        60% {
            transform: scale(1.05);
        }
        100% {
            transform: scale(1);
        }
    }
`

const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Meat', type: 'meat' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' }
]

const buildControls = (props) => { 
    return (
        <Fragment>
            <PriceParagraph>Current Price: <strong>${props.price.toFixed(2)}</strong></PriceParagraph>
            <BuildControlsStyle>
                {controls.map(ctrl => (
                    <BuildControl 
                        key={ctrl.label} 
                        label={ctrl.label}
                        type={ctrl.type} 
                        added={() => props.ingredientAdded(ctrl.type)}
                        removed={() => [props.ingredientRemoved(ctrl.type)]}
                        disabled={props.disabled[ctrl.type]} />
                ))}
            <OrderButton 
                disabled={props.disabledButton}>Order Now</OrderButton>
            </BuildControlsStyle>
        </Fragment>
    )
}

export default buildControls;