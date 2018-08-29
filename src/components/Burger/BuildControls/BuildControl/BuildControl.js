import React from 'react';
import styled from 'styled-components';

const BuildControlStyle = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 5px 0;
`

const BuildControlButton = styled.button`
    display: block;
    font: inherit;
    padding: 5px;
    margin: 0 5px;
    border: 1px solid #AA6817;
    border-radius: 2.5px;
    cursor: pointer;
    outline: none;
    &:disabled {
        background-color: #AC9980;
        border: 1px solid #7E7365;
        color: #CCC;
        cursor: default;
    }
`

const Label = styled.div`
    padding: 10px;
    font-size: 1.2rem;
    width: 80px;
    color: white;
`

const buildControl = (props) => {

    return (
        <BuildControlStyle>
            <Label>{props.label}</Label>
            <BuildControlButton 
                onClick={props.removed}
                disabled={props.disabled}>Less</BuildControlButton>
            <BuildControlButton onClick={props.added}>More</BuildControlButton>
        </BuildControlStyle>
    )
}

export default buildControl;