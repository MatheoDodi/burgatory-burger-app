import React, { Component } from 'react';
import Input from '../../components/UI/Input/Input';
import styled from 'styled-components';
import * as actions from '../../store/actions/index';
import { connect } from 'react-redux';

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

class Auth extends Component {
    state = {
        controls: {
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'E-mail Address',
                },
                value: '',
                validation: {
                    required: true,
                    email: true
                },
                valid: false,
                touched: false
            },
            password: {
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    placeholder: 'Password',
                },
                value: '',
                validation: {
                    required: true,
                    length: 6
                },
                valid: false,
                touched: false
            }
        },
        formIsValid: false
    }

    submitHandler = (event) => {
        event.preventDefault();
        this.props.onAuth(this.state.controls.email.value, this.state.controls.password.value);
    }

    checkIfTouched = (event, id) => {

        const updatedOrderForm = {
            ...this.state.controls
        }
        const updatedFormElement = {...updatedOrderForm[id]};
        updatedFormElement.touched = true;

        updatedOrderForm[id] = updatedFormElement;

        this.setState( {controls : updatedOrderForm} );

    } 

    checkValidity = (value, rules) =>  {
        let isValid = false;

        if (rules.required) {
            isValid = value.trim() !== '';
        }

        if (rules.length) {
            if (value) {
                isValid = value.length >= rules.length
            } else {
                isValid = false;
            }
        }

        if (rules.email) {
            isValid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)
        }

        return isValid;
    }

    formChangeHandler = (event, id) => {
        const updatedOrderForm = {
            ...this.state.controls
        }
        const updatedFormElement = {...updatedOrderForm[id]};
        updatedFormElement.value= event.target.value;
        updatedFormElement.valid = this.checkValidity(updatedFormElement.value, updatedFormElement.validation);
        updatedOrderForm[id] = updatedFormElement;

        let formIsValid = true;
        for (let id in updatedOrderForm) {
            formIsValid = updatedOrderForm[id].valid && formIsValid;
        }

        this.setState( {controls: updatedOrderForm, formIsValid: formIsValid} );
    }  

    render () {
        const formElementsArray = [];
        for (let key in this.state.controls) {
            formElementsArray.push({
                id: key,
                config: this.state.controls[key]
            });
        }


            let form =  <Form onSubmit={this.submitHandler}>
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
                        <SuccessButton disabled={!this.state.formIsValid}>Sign In</SuccessButton>
                    </Form>
        
        return (
            <ContactDataContainer>
                <h2>Please Sign In</h2>
                {form}
            </ContactDataContainer>
        )
    }
}

// const mapStateToProps = state => {
// 	return {
// 	}
// }

const mapDispatchToProps = dispatch => {
    return {
        onAuth: (email, password) => dispatch(actions.auth(email, password))
    }
}

export default connect(null, mapDispatchToProps)(Auth);