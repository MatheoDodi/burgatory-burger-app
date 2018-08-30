import React, { Fragment } from 'react';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import styled from 'styled-components';

const Content = styled.main`
    box-sizing: border-box;
    margin-top: 3rem;
    margin-bottom: 0;
    padding-top: 2rem;
    background-color: #EDF2F4;
    display: flex;
    height: 100vh;
    flex-direction: column;
`

const layout = (props) => (
    <Fragment>
        <Toolbar />
        <Content>
            {props.children}
        </Content>
    </Fragment>
);

export default layout;