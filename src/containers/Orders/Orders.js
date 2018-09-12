import React, { Component } from 'react';
import Order from '../../components/Order/Order';
import axios from '../../axios-orders';


class Orders extends Component {
    state = {
        orders: [],
        loading: true
    }

    componentDidMount() {
        axios.get('/orders.json')
            .then(response => {
                const fetchedOrders = [];
                for (let key in response.data) {
                    fetchedOrders.push({
                        ...response.data[key],
                    id: key
                    });
                }
                this.setState( {orders : fetchedOrders, loading: false} );
            })
            .catch(error => {
                this.setState( {loading: false} );
            })
    }

    render() {
        console.log(this.state.orders);

        let showOrders = <p style={{fontSize: '1.2rem'}}>Seems like you haven't made any orders yet.<br /> Head over to the Burger Builder section so we can prepare you an awesome burger!</p>;
        if (this.state.orders[0]) {
            showOrders = this.state.orders.map(order => (
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

export default Orders;