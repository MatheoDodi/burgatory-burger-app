import React, { Fragment } from 'react';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import styled from 'styled-components';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

const Content = styled.main`
    box-sizing: border-box;
    margin-top: 3rem;
    margin-bottom: 0;
    padding-top: 2rem;
    height: 100vh;
    background: linear-gradient(to bottom, #c14638 0%,#8b2825 100%);
    display: flex;
    flex-direction: column;
`

const layout = (props) => (
    <Fragment>
        <Toolbar />
        <SideDrawer />
        <Content>
            {props.children}
        </Content>
    </Fragment>
);

export default layout;