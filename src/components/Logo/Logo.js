import React from 'react';
import burgerLogo from '../../assets/images/burger-logo.png';
import styled from 'styled-components';

const LogoImage = styled.img`
    height: 50px;
    filter: grayscale(100%);
    margin: 0 auto;
    display: block;
`

const logo = (props) => (
    <LogoImage src={burgerLogo} alt="Burgatory Logo"/>
);

export default logo;