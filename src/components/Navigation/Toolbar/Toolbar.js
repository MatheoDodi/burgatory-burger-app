import React from 'react';
import styled from 'styled-components';

const Header = styled.header`
    height: 56px;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background-color: #2B2D40;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    box-sizing: border-box;
    z-index: 20;
    color: white;
`



const toolbar = (props) => (
    <Header>
        <div>Menu</div>
        <div>Logo</div>
        <nav>
            ...
        </nav>
    </Header>
);

export default toolbar;