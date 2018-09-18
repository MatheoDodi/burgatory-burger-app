import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import axios from '../../axios-orders';
import Spinner from '../../components/UI/Spinnner/Spinner';
import * as actionTypes from '../../store/actions';

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.6,
    meat: 1.3,
    bacon: 0.7
}

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 0,
            meat: 0,
            bacon: 0,
            cheese: 0
        },
        totalPrice: 4,
        ordering: false,
        loading: false,
        orderComplete: false,
        error: false
    }

    componentDidMount() {
        console.log(this.props);
        axios.get('https://burgatory-burger-app.firebaseio.com/ingredients.json')
            .then(response => {
                
            })
    }

    orderContinueHnalder = () => {
        const queryParams = [];
        for (let i in this.state.ingredients) {
            queryParams.push(encodeURIComponent(i) + '=' + encodeURIComponent(this.state.ingredients[i]))
        }
        queryParams.push('price=' + this.state.totalPrice);
        const queryString = queryParams.join('&');
        this.props.history.push({
            pathname: '/checkout',
            search: '?' + queryString
        });
    }

    orderButtonHandler = () => {
        this.setState( {ordering: true} );
    }

    orderCancelHandler = () => {
        this.setState( {ordering: false, orderComplete: false} );
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const priceAddition = INGREDIENT_PRICES[type];
        const newPrice = this.state.totalPrice + priceAddition;
        this.setState( {ingredients: updatedIngredients, totalPrice: newPrice} )
    }

    removeIngredientHandler = (type) => {
            const oldCount = this.state.ingredients[type];
            if (oldCount > 0) {
                const updatedCount = oldCount - 1;
                const updatedIngredients = {
                ...this.state.ingredients
                };
                updatedIngredients[type] = updatedCount;
                const priceDeduction = INGREDIENT_PRICES[type];
                const newPrice = this.state.totalPrice - priceDeduction;
                this.setState( {ingredients: updatedIngredients, totalPrice: newPrice} )
            }
    }

    render() {
        const disabledInfo = {
            ...this.props.ings;
        };
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0;
        }

        const disabledButtonCheck = this.state.totalPrice === 4;

        let orderSummary = <OrderSummary 
            ingredients={this.props.ings}
            cancel={this.orderCancelHandler}
            continue={this.orderContinueHnalder}
            total={this.state.totalPrice} />

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
                    price={this.state.totalPrice}
                    disabledButton={disabledButtonCheck}
                    order={this.orderButtonHandler} />
            </Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        ings: state.ingredients
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onIngredientAdded: (ingr) => dispatch({type: actionTypes.ADD_INGREDIENT, ingredientName: ingr}),
        onIngredientRemoved: (ingr) => dispatch({type: actionTypes.REMOVE_INGREDIENT, ingredientName: ingr})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BurgerBuilder);