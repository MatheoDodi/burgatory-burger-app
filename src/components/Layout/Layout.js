import React, { Fragment } from 'react';
import styled from 'styled-components';

const Content = styled.main`
    margin-top: 16px;
    background-color: #EBEBEB;
`

const layout = (props) => (
    <Fragment>
        <div>Toolbar, SideDrawer, Backdrop</div>
        <Content>
            {props.children}
        </Content>
    </Fragment>
);

export default layout;