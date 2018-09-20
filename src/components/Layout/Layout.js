import React, { Component, Fragment } from 'react';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import styled from 'styled-components';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

const Content = styled.main`
    box-sizing: border-box;
    padding-top: 63px;
    min-height: 100vh;
    background: #FAFAFA;
    display: flex;
    flex-direction: column;
    @media (max-width: 1310px) {
        padding-top: 58px;
    }
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
                <Toolbar goCheckout={this.props.goCheckout}
                         showSidebar={this.showSidebarHandler}
                         goBurgerBuilder={this.props.goBurgerBuilder}/>
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