import React, {Fragment} from 'react';
import styled from 'styled-components';
import BuildControl from './BuildControl/BuildControl';

const BuildControlsStyle = styled.div`
    width: 100%;
    background-color: #AD2831;
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
    background-color: #D6947E;
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
            </BuildControlsStyle>
        </Fragment>
    )
}

export default buildControls;