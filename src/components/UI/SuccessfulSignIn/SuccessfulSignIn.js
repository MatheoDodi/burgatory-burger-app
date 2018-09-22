import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const JustLoggedIn = styled.p`
    padding-top: 5rem;
    text-align: center;
    margin-top: 3rem;
    font-size: 1.2rem;
`

const HoverText = styled.span`
    &:hover {
        cursor: pointer;
    }
`

class SuccessfulSignIn extends Component {
    render () {
        return (
            <Fragment>
                <JustLoggedIn>You have been Signed {this.props.location.state.signUp ? 'Up' : 'In'} sucessfully!<br />
                Now you're ready to build yourself an awesome burger <br />
                and we'll make sure it tastes incredible!<br /><Link style={{margin: '2rem',fontSize: '1.5rem',textDecoration: 'none', color: 'gray'}} to="/burger-builder"><HoverText> Burger Builder</HoverText> </Link></JustLoggedIn>
            </Fragment>
        )
        }
}

export default SuccessfulSignIn;