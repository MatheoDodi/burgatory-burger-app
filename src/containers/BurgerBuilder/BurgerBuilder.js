import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal';
import NotSignedInModal from '../../components/UI/NotSignedInModal/NotSignedInModal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Spinner from '../../components/UI/Spinnner/Spinner';
import * as burgerBuilderActions from '../../store/actions/index';

class BurgerBuilder extends Component {
    state = {
        ordering: false,
        loading: false,
        orderComplete: false,
        error: false,
        showPopUp: false
    }

    componentDidMount() {
        if (this.props.isLoggedIn) {
            this.setState( {showPopUp: false} )
        } else {
            this.setState( {showPopUp: true} )
        }
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

    closePopUpHandler = () => {
        this.setState( {showPopUp: false, popUpSeen: true} )
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
                <NotSignedInModal show={this.state.showPopUp} modalClosed={this.closePopUpHandler}>
                    Please keep in mind that you won't be able <br />
                    to complete any orders without being Signed In.
                </NotSignedInModal>
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
        ings: state.burgerBuilder.ingredients,
        totalPrc: state.burgerBuilder.totalPrice,
        purchased: state.order.purchased,
        isLoggedIn: state.auth.token
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onIngredientAdded: (ingr) => dispatch(burgerBuilderActions.addIngredient(ingr)),
        onIngredientRemoved: (ingr) => dispatch(burgerBuilderActions.removeIngredient(ingr)),
        onNewOrder: () => dispatch(burgerBuilderActions.newOrder()),
        onPurchase: () => dispatch(burgerBuilderActions.purchaseInt())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BurgerBuilder);