import React, { Component } from 'react';
import styled from 'styled-components';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';

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
				<CheckoutSummary 
					ingredients={this.state.ingredients}
					onCheckoutCancel={this.onCheckoutCancelHandler}
					onCheckoutContinue={this.onCheckoutContinueHandler}/>
		)
	}
}

export default Checkout;