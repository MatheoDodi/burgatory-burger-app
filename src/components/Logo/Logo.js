import React, { Component, Fragment } from 'react';
import burgerLogo from '../../assets/images/burger-logo.svg';
import styled from 'styled-components';

const LogoImage = styled.img`
    height: 50px;
    filter: grayscale(100%);
    margin: 0 auto;
    display: block;
`

class Logo extends Component {
    render() {
        return (
            <Fragment>
                <LogoImage src={burgerLogo} alt="Burgatory Logo"/>
            </Fragment>
        );
    } 
}

export default Logo;