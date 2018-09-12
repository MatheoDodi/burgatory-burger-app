import React, { Component } from 'react';
import styled from 'styled-components';
import axios from '../../../axios-orders';
import Spinner from '../../..//components/UI/Spinnner/Spinner';
import Input from '../../../components/UI/Input/Input';
import { withRouter } from 'react-router-dom'

const ContactDataContainer = styled.div`
    padding: 1rem;
    margin: 3rem auto;
    width: 500px;
    text-align: center;
    background-color: white;
    border: 1px solid #ccc;
    border-radius: 15px;
    box-shadow: 0 4px 6px rgba(0,0,0,.2);
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
    width: 100%;
`


class ContactData extends Component {
    state = {
        orderForm : {
            name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your Name',
                },
                value: ''
            },
            street: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Street',
                },
                value: ''
            },
            zipCode : {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'ZIP Code',
                },
                value: ''
            },
            country: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your Country',
                },
                value: ''
            },
            email: {
                elementType: 'email',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your E-mail',
                },
                value: ''
            },
            deliveryMethod: {
                elementType: 'input',
                elementConfig: {
                    options: [
                        {value: 'fastest', displayValue: 'Fastest'},
                        {value: 'normal', displayValue: 'Normal'}
                    ]
                }
            }
        },
        loading: false,
        
    }

    orderHandler = (event) => {
        event.preventDefault();
        this.setState({loading : true});
        const order = {
            ingredients: this.props.ingredients,
            price : this.props.price,
        }
        axios.post('/orders.json', order)
            .then(response => {
                setTimeout(() => {
                    this.setState({loading: false});
                    this.props.history.push('/');
                }, 2000);
            })
            .catch(error => this.setState({loading: false}))
    }

    render() { 
        let form = null;
        if (this.state.loading) {
            form = <Form><Spinner /></Form>
        } else {
            form =  <Form>
                        <Input elementType=".." elementConfig=".." value=".."/>
                        <Input inputType="input" type="email" name="email" placeholder="Your E-mail" />
                        <Input inputType="input" type="text" name="street" placeholder="Street" />
                        <Input inputType="input" type="text" name="zip" placeholder="ZIP Code" />
                        <SuccessButton onClick={this.orderHandler}>Place Order</SuccessButton>
                    </Form>
        }
            return (
                <ContactDataContainer>
                                <h2>Enter your contact data bellow</h2>
                                {form}
                </ContactDataContainer>
            )
    }
}

export default withRouter(ContactData);