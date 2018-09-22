import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions/index';
import Spinner from '../../..//components/UI/Spinnner/Spinner';
import Input from '../../../components/UI/Input/Input';
import { withRouter } from 'react-router-dom'
import { authStart } from '../../../store/actions/auth';

const ContactDataContainer = styled.div`
    box-sizing: border-box;
    padding: 1rem;
    margin: 3rem auto;
    width: 450px;
    text-align: center;
    background-color: white;
    border: 1px solid #ccc;
    border-radius: 15px;
    box-shadow: 0 4px 6px rgba(0,0,0,.2);
    @media (max-width: 800px) {
        width: 350px;
    }
`

const SuccessButton = styled.button`
    border: #5C9210;
    border-radius: 5px;
    color: white;
    text-shadow: 1px 1px 1px black;
    background-color: #38c900;
    outline: none;
    cursor: pointer;
    font: inherit;
    padding: 10px;
    margin: 10px;
    font-weight: bold;
    font-size: 1.35rem;
    &:disabled {
        color: gray;
        border: 1px solid rgba(0,0,0,.35);
        background-color: white;
        cursor: not-allowed;
    }
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
                value: 'normal',
                label: 'Delivery Method',
                valid: true,
                validation: {
                    required: true
                }
            }
        },
        formIsValid : false,
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
                isValid = value.length === rules.length
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
            ingredients: this.props.ingr,
            price : this.props.totalPrc
        }

        if (this.state.orderForm.deliveryMethod.value === 'fastest') {
            order.price += 2;
        }

        this.props.onOrderLoading();
        this.props.onOrderBurger(order, this.props.tokenId);
    }

    formChangeHandler = (event, id) => {
        const updatedOrderForm = {
            ...this.state.orderForm
        }
        const updatedFormElement = {...updatedOrderForm[id]};
        updatedFormElement.value= event.target.value;
        updatedFormElement.valid = this.checkValidity(updatedFormElement.value, updatedFormElement.validation);
        updatedOrderForm[id] = updatedFormElement;

        let formIsValid = true;
        for (let id in updatedOrderForm) {
            formIsValid = updatedOrderForm[id].valid && formIsValid;
        }

        this.setState( {orderForm: updatedOrderForm, formIsValid: formIsValid} );
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
        if (this.props.loading) {
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
                                label={formElement.config.label}
                                changed={(event) => this.formChangeHandler(event, formElement.id)}
                                key={formElement.id} />
                        ))}
                        {this.props.tokenId ? <SuccessButton disabled={!this.state.formIsValid}>Place Order</SuccessButton> : <SuccessButton disabled={true}>Please Sign In</SuccessButton>}
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

const mapStateToProps = state => {
	return {
		ingr: state.burgerBuilder.ingredients,
        totalPrc: state.burgerBuilder.totalPrice,
        loading: state.order.loading,
        tokenId: state.auth.token
	}
}

const mapDispatchToProps = dispatch => {
    return {
        onOrderBurger: (orderData, tokenId) => dispatch(actions.purchaseBurger(orderData, tokenId)),
        onOrderLoading: () => dispatch(actions.purchaseBurgerStart())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ContactData));