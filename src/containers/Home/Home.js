import React, { Component, Fragment } from 'react';
import styled, { keyframes } from 'styled-components';
import heroImage from '../../assets/images/burger-hero.jpg';
import downArrow from '../../assets/images/arrow.svg'

const HeroImage = styled.div`
    height: 100vh;
    background-image: url(${heroImage});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`

const Overlay = styled.div`
    box-sizing: border-box;
    padding: 1rem;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,.6);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const HeaderText = styled.h1`
    font-size: 8rem;
    color: white;
    font-weight: 700;
    margin: 0 0 1rem 0;
    @media (max-width: 700px) {
        font-size: 4rem
    }
`

const SubText = styled.p`
    display: block;
    font-size: 2.5rem;
    color: white;
    text-align: center;
    @media (max-width: 700px) {
        font-size: 1.8rem;
    }
`

const Heading = styled.h3`
    display: block;
    font-size: 2.5rem;
    text-align: center;
    margin-top: 2rem;
    margin-bottom: 1.5rem;
    grid-column: 1 / -1;
    @media (max-width: 700px) {
        font-size: 1.8rem;
    }
`

const Arrow= styled.img`
    margin-top: 5rem;
    width: 60px;
    animation-name: bounce;
    animation-duration: 2s;
    animation-iteration-count: infinite;
    @keyframes bounce {
    0% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(20px);
    }
    }
`

const Grid = styled.div`
    padding: 0 4rem;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    align-items: center;
    @media (max-width: 900px) {
        padding: 0 1.75rem;
        display: block;
    }
`

const Paragraph = styled.p`
    margin: 0 0 6.5rem 0;
    text-align: center;
    font-size: 1.2rem;
    grid-column: 2 / 5;
`

const Cheese = styled.div`
    width: 90%;
    height: 18%;
    margin: 2% auto;
    background: linear-gradient(#f4d004, #d6bb22);
    border-radius: 20px;
    grid-column: 1 / 2;
    text-align: center;
    margin-bottom: 1rem;
`

const Meat = styled.div`
    width: 80%;
    height: 28%;
    background: linear-gradient(#7f3608, #702e05);
    margin: 2% auto;
    border-radius: 15px;
    color: white;
    text-align: center;
    margin-bottom: 1rem;
`

const Salad = styled.div`
    width: 85%;
    height: 23%;
    margin: 2% auto;
    background: linear-gradient(#228c1d, #91ce50);
    border-radius: 20px;
    text-align: center;
    margin-bottom: 1rem;
    color: white;
`

const Bacon = styled.div`
    width: 80%;
    height: 20%;
    background: linear-gradient(#bf3813, #c45e38);
    margin: 2% auto;
    text-align: center;
    margin-bottom: 1rem;
    color: white;
`
const BreadBottom = styled.div`
    height: 21%;
    width: 80%;
    background: linear-gradient(#F08E4A, #e27b36);
    border-radius: 0 0 30px 30px;
    box-shadow: inset -15px 0 #c15711;
    margin: 2% auto;
    margin-bottom: 1rem;
`

const BreadTop = styled.div`
    height: 25%;
    width: 80%;
    background: linear-gradient(#bc581e, #e27b36);
    border-radius: 50% 50% 0 0;
    box-shadow: inset -15px 0 #c15711;
    margin: 2% auto;
    position: relative;
`

class Home extends Component {

    render() {
        return (
            <Fragment>
                <HeroImage>
                    <Overlay>
                            <HeaderText>Burgatory</HeaderText>
                            <SubText>because burgers are no joke</SubText>
                            <Arrow src={downArrow} />
                    </Overlay>
                </HeroImage>
                <Grid>
                    <Heading style={{fontSize: '3rem'}}>Welcome to the Burgatory Web App</Heading>
                    <Paragraph>Thank you for taking the time to be here.<br /> This project was made to showcase a potential app that could be used for a Burger Restaurant so that customers could build their own burgers, choosing the ingredients themselves.</Paragraph>
                    <Heading>How did you do <em>that</em> ?</Heading>
                    <Paragraph>Bellow, I will be explaining all the features that are available in this web app, as well as upcoming futures that I will be implementing.</Paragraph>
                    <Heading>Building the Burger</Heading>
                    <Paragraph style={{marginBottom: '1rem'}}>The buns, as well as all the ingredients are &#60;div&#62; elements, styled with pure CSS. I chose to go with that approach in order to improve performance.</Paragraph>
                    <Cheese>Cheese</Cheese>
                    <Meat>Meat</Meat>
                    <Salad>Salad</Salad>
                    <Bacon>Bacon</Bacon>
                    <div style={{height: '125px'}}>
                        <BreadTop />
                        <p style={{textAlign: 'center', margin: '0'}}>Buns</p>
                        <BreadBottom />
                    </div>
                    <Heading>Forming the...Forms</Heading>
                    <Paragraph>All of the form validation was entirelly custom and hand-written by me, no libraries were used.</Paragraph>
                    <Heading>To be Continued...</Heading>
                    <Paragraph>Home page still under construction. All other sections of the web app are finished.</Paragraph>
                </Grid>
            </Fragment>

        )
    }
}

export default Home;