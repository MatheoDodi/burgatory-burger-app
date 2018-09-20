import React, { Component } from 'react';
import styled from 'styled-components';

const JustLoggedIn = styled.p`
    text-align: center;
    margin-top: 3rem;
    font-size: 1.2rem;
`

class SuccessfulSignIn extends Component {
    render () {
        return (
            <JustLoggedIn>You have been Signed {this.props.location.state.signUp ? 'Up' : 'In'} sucessfully!<br />
            Now you're ready to build yourself an awesome burger <br />
            and we'll make sure it tastes incredible!</JustLoggedIn>
        )
        }
}

export default SuccessfulSignIn;