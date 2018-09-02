import React from 'react';
import burgerLogo from '../../assets/images/burger-logo.png';
import styled from 'styled-components';

const LogoImage = styled.img`
    height: ${props => props.height };
    filter: grayscale(100%);
    margin: 0 auto;
    display: block;
`

const logo = (props) => (
    <LogoImage height={props.height} src={burgerLogo} alt="Burgatory Logo"/>
);

export default logo;