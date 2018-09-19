import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from '../Checkout/ContactData/ContactData';
import * as actions from '../../store/actions/index';

class Checkout extends Component {

	onCheckoutCancelHandler = () => {
		this.props.history.goBack();
	}

	onCheckoutContinueHandler = () => {
		this.props.history.replace('/checkout/contact-data');
	}

	render() {
		let summary = <div>
						<CheckoutSummary 
							ingredients={this.props.ingr}
							onCheckoutCancel={this.onCheckoutCancelHandler}
							onCheckoutContinue={this.onCheckoutContinueHandler}/>
						<ContactData />
					</div>

		if (this.props.purchased) {
			summary = <Redirect to="/order-complete" />
		}
		return summary
	}
}

const mapStateToProps = state => {
	return {
		purchased: state.order.purchased
	}
}

export default connect(mapStateToProps)(Checkout);