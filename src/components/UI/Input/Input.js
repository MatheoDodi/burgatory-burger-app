import React from 'react';
import styled from 'styled-components';

const InputContainer = styled.div`
    width: 100%;
    padding: 10px;
    box-sizing: border-box;
`
const Label = styled.label`
    font-weight: bold;
    display: block;
    margin-bottom: 8px;
`

const Input = styled.input`
    border: 1px solid #ccc;
    backdrop-filter: white;
    font: inherit;
    padding: 6px 10px;
    display: block;
    width: 100%;
    &:focus {
        outline-color: red;
        background-color: #ccc;
    }
`


const input = () => {
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
        <InputContainer>
            <Label>{props.label}</Label>
            {inputElement}
        </InputContainer>
)};

export default input