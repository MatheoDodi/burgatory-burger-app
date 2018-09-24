import * as actionTypes from './actionTypes';
import axios from '../../axios-orders';

export const purchaseBurgerSuccess = (id, orderData) => {
    return {
        type: actionTypes.PURCHARSE_BURGER_SUCCESS,
        orderId: id,
        orderData: orderData
    }
}

export const purchaseBurgerFail = (error) => {
    return {
        type: actionTypes.PURCHARSE_BURGER_FAIL,
        error: error
    }
}

export const purchaseBurgerStart = () => {
    return {
        type: actionTypes.PURCHARSE_BURGER_START
    }
}

export const purchaseBurger = (orderData, tokenId) => {
    return dispatch => {
        setTimeout(() => {
            axios.post('/orders.json?auth=' + tokenId, orderData)
                .then(response => {
                    console.log();
                    dispatch(purchaseBurgerSuccess(tokenId, response.data));
                })
                .catch(error => {
                    dispatch(purchaseBurgerFail(error));
                })
        }, 2000)
    }
}

export const purchaseInt = () => {
    return {
        type: actionTypes.PURCHASE_INIT
    }
}

export const fetchOrdersSuccess = (orders) => {
    return {
        type: actionTypes.FETCH_ORDERS_SUCCESS,
        orders: orders
    }
}

export const fetchOrdersFail = () => {
    return {
        type: actionTypes.FETCH_ORDERS_FAIL
    }
}

export const fetchOrders = (tokenId, userId) => {
    return dispatch => {
        axios.get('/orders.json?auth=' + tokenId)
            .then(response => {
                const fetchedOrders = [];
                
                for (let key in response.data) {
                    if (response.data[key].userId === userId) {
                        fetchedOrders.push({
                            ...response.data[key],
                        id: key
                        });
                    }
                }
                dispatch(fetchOrdersSuccess(fetchedOrders));
            })
            .catch(error => {
               dispatch(fetchOrdersFail());
            })
    }
}

export const clearOrdersError = () => {
    return {
        type: actionTypes.CLEAR_ERROR
    }
}

export const clearOrders = () => {
    return {
        type: actionTypes.CLEAR_ORDERS
    }
}