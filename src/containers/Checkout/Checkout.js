import React, { Component } from 'react';
import { connect } from 'react-redux';
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
				<ContactData price={this.props.totalPrc} ingredients={this.props.ingr} />
			</div>
		)
	}
}

const mapStateToProps = state => {
	return {
		ingr: state.ingredients,
		totalPrc: state.totalPrice
	}
}

export default connect(mapStateToProps)(Checkout);