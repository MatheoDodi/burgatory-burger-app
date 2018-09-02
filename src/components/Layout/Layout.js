import React, { Component, Fragment } from 'react';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import styled from 'styled-components';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

const Content = styled.main`
    box-sizing: border-box;
    margin-top: 3rem;
    margin-bottom: 0;
    padding-top: 2rem;
    height: 100vh;
    background: #EDF2F4;
    display: flex;
    flex-direction: column;
`



class Layout extends Component {
    state = {
        showSidebar : false
    }

    showSidebarHandler = () => {
        this.setState({showSidebar : true})
    }

    hideSidebarHandler = () => {
        this.setState({showSidebar : false})
    }

    render() {
        return (
            <Fragment>
                <Toolbar showSidebar={this.showSidebarHandler}/>
                <SideDrawer 
                    showSidebar={this.state.showSidebar}
                    hideSidebar ={this.hideSidebarHandler}/>
                <Content>
                    {this.props.children}
                </Content>
            </Fragment>
    );
    }
}

export default Layout;