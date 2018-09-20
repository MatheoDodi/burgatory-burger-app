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
        this.props.onFetchingOrders(this.props.tokenId);
    }

    render() {
        let showOrders = <p style={{fontSize: '1.5rem', textAlign: 'center'}}>Sign in to see your orders!</p>
        if (this.props.tokenId) {
            showOrders = <Spinner />
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
            <div>
                {showOrders}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        orders: state.order.orders,
        tokenId: state.auth.token
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onFetchingOrders: (tokenId) => dispatch(actions.fetchOrders(tokenId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Orders);