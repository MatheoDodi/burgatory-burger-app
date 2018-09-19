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

export const purchaseBurger = (orderData) => {
    return dispatch => {
        setTimeout(() => {
            axios.post('/orders.json', orderData)
                .then(response => {
                    dispatch(purchaseBurgerSuccess(response.data));
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