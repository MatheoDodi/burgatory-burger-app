import React, { Component } from 'react';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from '../Checkout/ContactData/ContactData';

class Checkout extends Component {

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
					ingredients={this.props.ingr}
					onCheckoutCancel={this.onCheckoutCancelHandler}
					onCheckoutContinue={this.onCheckoutContinueHandler}/>
				<ContactData />
			</div>
		)
	}
}

export default Checkout;