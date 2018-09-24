import React, { Component } from 'react';
import Order from '../../components/Order/Order';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import Spinner from '../../components/UI/Spinnner/Spinner';


class Orders extends Component {
    state = {
        orders: [],
    }

    componentDidMount() {
        this.props.onFetchingOrders(this.props.tokenId, this.props.userId);
    }

    componentWillUnmount() {
        this.props.onClearError();
    }

    render() {
        let showOrders = <p style={{paddingTop: '4rem', fontSize: '1.5rem', textAlign: 'center'}}>Sign in to see your orders!</p>
        if (this.props.tokenId) {
            showOrders = <Spinner />
        }
        if (!this.props.ordersError && this.props.tokenId) {
            showOrders = <p style={{paddingTop: '5rem', textAlign: 'center'}}>It seems like you don't have any orders placed yet!</p>
        }
        if (this.props.orders[0]) {
            showOrders = this.props.orders.map(order => (
                <Order 
                    key={order.id}
                    data={order.orderData}
                    ingredients={order.ingredients} 
                    price={order.price} />
            ))
        }

        return(
            <div style={{paddingTop: '4rem'}}>
                {showOrders}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        orders: state.order.orders,
        tokenId: state.auth.token,
        userId: state.auth.userId,
        ordersError: state.order.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onFetchingOrders: (tokenId, userId) => dispatch(actions.fetchOrders(tokenId, userId)),
        onClearError: () => dispatch(actions.clearOrdersError())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Orders);