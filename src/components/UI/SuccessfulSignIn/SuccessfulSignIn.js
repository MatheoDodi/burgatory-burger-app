import React from 'react';
import styled from 'styled-components';

const JustLoggedIn = styled.p`
    text-align: center;
    margin-top: 3rem;
    font-size: 1.2rem;
`

const successfulSignIn = () => {
    return (
        <JustLoggedIn>You have been Signed In sucessfully!<br />
        Now you're ready to build yourself an awesome burger <br />
        and we'll make sure it tastes incredible!</JustLoggedIn>
    )
}

export default successfulSignIn;