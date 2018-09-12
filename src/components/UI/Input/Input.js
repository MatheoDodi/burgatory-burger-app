import React, { Fragment } from 'react';
import styled from 'styled-components';

const Label = styled.label`
    width: 100%;
    font-weight: bold;
    display: block;
    margin-bottom: 8px;
`

const Input = styled.input`
    box-sizing: border-box;
    border: 1px solid #ccc;
    backdrop-filter: white;
    font: inherit;
    padding: 6px 10px;
    margin-bottom: 2rem;
    display: block;
    width: 100%;
    &:focus {
        outline-color: red;
        background-color: #ccc;
    }
`


const input = (props) => {
    let inputElement = null;

    switch (props.inputType) {
        case ('input'): 
            inputElement = <Input {...props} />
            break;
        case ('text-area'):
            inputElement = <textarea {...props} />
            break;
        default:
            inputElement = <Input {...props} />
    }

    return (
        <Fragment>
            <Label>{props.label}</Label>
            {inputElement}
        </Fragment>
)};

export default input