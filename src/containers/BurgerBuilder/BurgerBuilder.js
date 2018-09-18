import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import axios from '../../axios-orders';
import Spinner from '../../components/UI/Spinnner/Spinner';
import * as actionTypes from '../../store/actions';

class BurgerBuilder extends Component {
    state = {
        ordering: false,
        loading: false,
        orderComplete: false,
        error: false
    }

    orderContinueHnalder = () => {
        this.props.history.push({
            pathname: '/checkout',
        });
    }

    orderButtonHandler = () => {
        this.setState( {ordering: true} );
    }

    orderCancelHandler = () => {
        this.setState( {ordering: false, orderComplete: false} );
    }

    render() {
        const disabledInfo = {
            ...this.props.ings
        };
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0;
        }

        const disabledButtonCheck = this.props.totalPrc === 4;

        let orderSummary = <OrderSummary 
            ingredients={this.props.ings}
            cancel={this.orderCancelHandler}
            continue={this.orderContinueHnalder}
            total={this.props.totalPrc} />

        if (this.state.loading) {
            orderSummary = <Spinner />
        }

        if (this.state.orderComplete) {
            orderSummary = <h3 style={{textAlign: 'center'}}>You're ordered has been placed!</h3>
        }

        return (
            <Fragment>
                <Modal 
                    show={this.state.ordering}
                    modalClosed={this.orderCancelHandler}>
                        {orderSummary} 
                </Modal>
                <Burger 
                    ingredients={this.props.ings} />
                <BuildControls
                    ingredientAdded={this.props.onIngredientAdded}
                    ingredientRemoved={this.props.onIngredientRemoved}
                    disabled={disabledInfo}
                    price={this.props.totalPrc}
                    disabledButton={disabledButtonCheck}
                    order={this.orderButtonHandler} />
            </Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        ings: state.ingredients,
        totalPrc: state.totalPrice
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onIngredientAdded: (ingr) => dispatch({type: actionTypes.ADD_INGREDIENT, ingredientName: ingr}),
        onIngredientRemoved: (ingr) => dispatch({type: actionTypes.REMOVE_INGREDIENT, ingredientName: ingr})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BurgerBuilder);