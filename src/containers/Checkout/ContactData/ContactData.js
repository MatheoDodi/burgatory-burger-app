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
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            street: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Street',
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            zipCode : {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'ZIP Code',
                },
                value: '',
                validation: {
                    required: true,
                    length: 5,
                },
                valid: false,
                touched: false
            },
            country: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your Country',
                },
                value: '',
                validation: {
                    required: true,
                },
                valid: false,
                touched: false
            },
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'e-mail',
                    placeholder: 'Your E-mail',
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            deliveryMethod: {
                elementType: 'select',
                elementConfig: {
                    options: [
                        {value: 'normal', displayValue: 'Normal'},
                        {value: 'fastest', displayValue: 'Fastest'}
                    ]
                },
                value: '',
                validation: {
                    required: true
                }
            }
        },
        loading: false,   
    }

    checkIfTouched = (event, id) => {

        const updatedOrderForm = {
            ...this.state.orderForm
        }
        const updatedFormElement = {...updatedOrderForm[id]};
        updatedFormElement.touched = true;

        updatedOrderForm[id] = updatedFormElement;

        this.setState( {orderForm : updatedOrderForm} );

        console.log(this.state.orderForm[id].touched);
    } 

    checkValidity = (value, rules) =>  {
        let isValid = false;

        if (rules.required) {
            isValid = value.trim() !== '';
        }

        if (rules.length) {
            if (Number(value)) {
                isValid = value.length == rules.length
            } else {
                isValid = false;
            }
        }

        return isValid;
    }

    orderHandler = (event) => {
        event.preventDefault();
        this.setState({loading : true});
        const formData = {};
        for (let key in this.state.orderForm) {
            formData[key] = this.state.orderForm[key].value;
        }

        const order = {
            orderData: formData,
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

    formChangeHandler = (event, id) => {
        const updatedOrderForm = {
            ...this.state.orderForm
        }
        const updatedFormElement = {...updatedOrderForm[id]};
        updatedFormElement.value= event.target.value;
        updatedFormElement.valid = this.checkValidity(updatedFormElement.value, updatedFormElement.validation);
        updatedOrderForm[id] = updatedFormElement;

        console.log(updatedFormElement);
        this.setState( {orderForm: updatedOrderForm} );
    }  

    render() { 
        const formElementsArray = [];
        for (let key in this.state.orderForm) {
            formElementsArray.push({
                id: key,
                config: this.state.orderForm[key]
            });
        }

        let form = null;
        if (this.state.loading) {
            form = <Form><Spinner /></Form>
        } else {
            form =  <Form onSubmit={this.orderHandler}>
                        {formElementsArray.map(formElement => (
                            <Input
                                touched={formElement.config.touched}
                                clicked={(event) => this.checkIfTouched(event, formElement.id)}
                                invalid={formElement.config.valid} 
                                elementType={formElement.config.elementType}
                                elementConfig={formElement.config.elementConfig}
                                value={formElement.config.value}
                                changed={(event) => this.formChangeHandler(event, formElement.id)}
                                key={formElement.id} />
                        ))}
                        <SuccessButton>Place Order</SuccessButton>
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