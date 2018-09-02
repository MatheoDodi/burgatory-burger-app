import React from 'react';
import styled from 'styled-components';

const BackdropDiv = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: 50;
    left: 0;
    top: 0;
    background-color: rgba(0,0,0,.425);
`

const backdrop = (props) => (
    props.show ? <BackdropDiv 
    onClick={props.clicked}/> : null
)

export default backdrop;