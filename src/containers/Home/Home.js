import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import heroImage from '../../assets/images/burger-hero.jpg';

const HeroImage = styled.div`
    height: 70vh;
    background-image: url(${heroImage});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`

const Overlay = styled.div`
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,.6);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const HeaderText = styled.h1`
    font-size: 5rem;
    color: white;
    font-weight: 700;
    margin: 0 0 1rem 0;
    @media (max-width: 700px) {
        font-size: 4rem
    }
`

const SubText = styled.span`
    display: block;
    font-size: 2.5rem;
    color: white;
    text-align: center;
    @media (max-width: 700px) {
        font-size: 1.8rem;
    }
`

class Home extends Component {

    render() {
        return (
            <Fragment>
                <HeroImage>
                    <Overlay>
                            <HeaderText>Burgatory</HeaderText>
                            <SubText>because burgers are no joke</SubText>
                    </Overlay>
                </HeroImage>
            </Fragment>
        )
    }
}

export default Home;