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
        this.props.onFetchingOrders();
    }

    render() {
        let showOrders = <Spinner />
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
        orders: state.order.orders
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onFetchingOrders: () => dispatch(actions.fetchOrders())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Orders);