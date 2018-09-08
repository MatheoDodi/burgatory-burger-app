import React, { Component } from 'react';
import styled from 'styled-components';

class ContactData extends Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        }
    }

    render() { 
        return (
            <div>
							<h4>Enter your Contact Data</h4>
							<form>
								<input type="text" name="name" placeholder="Your Name" />
								<input type="email" name="email" placeholder="Your E-mail" />
								<input type="text" name="street" placeholder="Street" />
								<input type="text" name="zip" placeholder="ZIP Code" />

							</form>
            </div>
        )
    }
}

export default ContactData;