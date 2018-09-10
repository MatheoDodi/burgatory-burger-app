import React, { Component } from 'react';
import styled from 'styled-components';
import axios from '../../../axios-orders';
import Spinner from '../../..//components/UI/Spinnner/Spinner';

const ContactDataContainer = styled.div`
    margin: 3rem auto;
    width: 400px;
    text-align: center;
`

const SuccessButton = styled.button`
    background-color: transparent;
    border: none;
    color: #5C9210;
    outline: none;
    cursor: pointer;
    font: inherit;
    padding: 10px;
    margin: 10px;
    font-weight: bold;
    font-size: 1.35rem;
`

const Form = styled.form`
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 20px;
`

const Input = styled.input`
    height: 20px;
    font-size: 20px;
    padding: 15px;
    &:focus {
        outline-color: red;
    }
`

const SpinnerContainer = styled.div`
    width: 500px;
    position: fixed;
    z-index: 100;
`

class ContactData extends Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        },
        loading: false,

    }

    orderHandler = (event) => {
        event.preventDefault();
        this.setState({loading : true});
        const order = {
            ingredients: this.props.ingredients,
            price : this.props.price,
            customer: {
                name: 'Matthew Dodi',
                address : {
                    street: 'Test Street',
                    zipCode : '92012',
                    country: 'USA'
                },
                email: 'matthew.dodi@gmail.com'
            },
            deliveryMethod: 'fastest'
        }
        axios.post('/orders.json', order)
            .then(response => setTimeout(() => this.setState({loading: false}), 2000))
            .catch(error => this.setState({loading: false}))
    }

    render() { 
        let spin = null;
        if (this.state.loading) {
            spin = <SpinnerContainer>
                    <Spinner />
                </SpinnerContainer>
        }

        return (
            <ContactDataContainer>
                            {spin}
							<h2>Enter your Contact Data</h2>
							<Form>
								<Input type="text" name="name" placeholder="Your Name" />
								<Input type="email" name="email" placeholder="Your E-mail" />
								<Input type="text" name="street" placeholder="Street" />
								<Input type="text" name="zip" placeholder="ZIP Code" />
                                <SuccessButton onClick={this.orderHandler}>Place Order</SuccessButton>
							</Form>
            </ContactDataContainer>
        )
    }
}

export default ContactData;