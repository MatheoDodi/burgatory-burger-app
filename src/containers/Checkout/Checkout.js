import React, { Component } from 'react';
import styled from 'styled-components';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import { Route } from 'react-router-dom';
import ContactData from '../Checkout/ContactData/ContactData';
class Checkout extends Component {
	state = {
		ingredients: {
		}
	}

	componentDidMount() {
		const query = new URLSearchParams(this.props.location.search);
		const ingredients = {};
		for (let param of query.entries()) {
			ingredients[param[0]] = +param[1];
		}
		this.setState({ingredients: ingredients});
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
				<Route path={`${this.props.match.url}/contact-data`} component={ContactData} />
			</div>
		)
	}
}

export default Checkout;