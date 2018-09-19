import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as burgerBuilderActions from '../../../store/actions/index';

class OrderComplete extends Component {

    componentWillUnmount() {
        this.props.onNewOrder();
        this.props.onPurchase();
    }

    render() {
        return (
            <h2 style={{width: 'auto', margin: '0 auto'}}>
                We thank you for your order!
            </h2>
        )
    }
}

const mapStateToProps = state => {
    return {
        ings: state.burgerBuilder.ingredients,
        purchased: state.order.purchased
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onNewOrder: () => dispatch(burgerBuilderActions.newOrder()),
        onPurchase: () => dispatch(burgerBuilderActions.purchaseInt())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderComplete);