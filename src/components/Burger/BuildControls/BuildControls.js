import React, {Fragment} from 'react';
import styled from 'styled-components';
import BuildControl from './BuildControl/BuildControl';

const BuildControlsStyle = styled.div`
    width: 100%;
    background: linear-gradient(to top, #141e30, #243b55);
    display: flex;
    flex-flow: column;
    align-items: center;
    box-shadow: 0 2px 1px #CCC;
    padding: 10px 0;
`

const PriceParagraph = styled.p`
    font-size: 1.6rem;
    text-align: center;
    margin: 0;
    padding: 1rem;
    background-color: #EF233C;
    color: white;
`

const OrderButton = styled.button`
    margin-top: 1rem;
    background-color: #EF233C;
    outline: none;
    cursor: pointer;
    border: 1px solid rgba(255,255,255,0.5);
    border-radius: 7px;
    color: white;
    text-shadow: 1px 1px 1px black;
    font-family: inherit;
    font-size: 1.2rem;
    padding: 15px 30px;
    box-shadow: 0px 4px 3px 1px rgba(0,0,0,.2);
    transition: all 0.02s ease-in-out;
    &:hover,:active {
        background-color: #f23e54;
        border: 1px solid rgba(255,255,255,0.5);
        color: white;
        text-shadow: 1px 1px 1px black;
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
                disabled={props.disabledButton}
                onClick={props.order}>Order Now</OrderButton>
            </BuildControlsStyle>
        </Fragment>
    )
}

export default buildControls;