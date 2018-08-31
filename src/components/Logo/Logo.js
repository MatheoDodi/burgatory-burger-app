import React from 'react';
import burgerLogo from '../../assets/images/burger-logo.png';


const logo = (props) => (
    <img style={{height: '80%', filter: 'grayscale(100%)', margin: 'auto'}} src={burgerLogo} alt="Burgatory Logo"/>
);

export default logo;