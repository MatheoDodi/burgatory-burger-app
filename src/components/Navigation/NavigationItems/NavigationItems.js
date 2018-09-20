import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { NavLink, withRouter } from 'react-router-dom';
import * as actions from '../../../store/actions/index';

const NavigationList = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    justify-content: flex-end;
    height: 100%;
    @media (max-width: 500px) {
        display: flex;
    }
    @media (max-width: 1300px) {
        display: ${props => props.display};
        flex-direction: column;
    }
`

const ListItem = styled.li`
    margin: 0;
    box-sizing: border-box;
    height: 100%;
    align-items: center;
    & > a {
        color: white;
        text-decoration: none;
        height: 100%;
        padding: 16px 25px;
        border-bottom: 4px solid transparent;
        box-sizing: border-box;
        display: block;
        transition: all 0.2s;
        font-size: ${props => props.textSize};
    }
    & > a:active, a:hover {
        color: red;
        cursor: pointer;

    }
`


class NavigationItems extends Component {

    logOutHandler = () => {
        this.props.onLogOutAuth();
        this.props.onClearAllOrders();
    }


    render () {
        return (
            <NavigationList display={this.props.display}>
                <ListItem onClick={this.props.clicked} textSize={this.props.textSize}><NavLink activeStyle={{color: 'red'}} exact to="/">Home</NavLink></ListItem>
                <ListItem onClick={this.props.clicked} textSize={this.props.textSize}><NavLink activeStyle={{color: 'red'}} to="/burger-builder">Burger Builder</NavLink></ListItem>
                <ListItem onClick={this.props.clicked} textSize={this.props.textSize}><NavLink activeStyle={{color: 'red'}} to="/orders">My Orders</NavLink></ListItem>
        <ListItem onClick={this.props.clicked} textSize={this.props.textSize}>{this.props.token ? <NavLink activeStyle={{color: 'red'}} onClick={this.logOutHandler} to="/">Log Out</NavLink> : <NavLink to="/sign-in">Sign In</NavLink>}</ListItem>
            </NavigationList>
        )
    }
}

const mapStateToProps = state => {
    return {
        token: state.auth.token
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onLogOutAuth: () => dispatch(actions.authLogout()),
        onClearAllOrders: () => dispatch(actions.clearOrders())
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavigationItems));