import React, { Component } from 'react';
import styled from 'styled-components';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import { Route } from 'react-router-dom';
import ContactData from '../Checkout/ContactData/ContactData';

class Checkout extends Component {
	state = {
		ingredients: {
		},
		totalPrice: 4
	}

	componentDidMount() {
		const query = new URLSearchParams(this.props.location.search);
		const ingredients = {};
		let price = 0;
		for (let param of query.entries()) {
			if (param[0] === 'price') {
				price = param[1];
			} else { 
				ingredients[param[0]] = +param[1];
			}
		}
		this.setState({ingredients: ingredients, totalPrice : price});
	}

	onCheckoutCancelHandler = () => {
		this.props.history.goBack();
	}

	onCheckoutContinueHandler = () => {
		this.props.history.replace('/checkout/contact-data');
	}

	render() {
		console.log(this.props);
		return (
			<div>
				<CheckoutSummary 
					ingredients={this.state.ingredients}
					onCheckoutCancel={this.onCheckoutCancelHandler}
					onCheckoutContinue={this.onCheckoutContinueHandler}/>
				<Route path={`${this.props.match.url}/contact-data`} render={(props) => <ContactData {...props} price={this.state.totalPrice} ingredients={this.state.ingredients} />} />
			</div>
		)
	}
}

export default Checkout;