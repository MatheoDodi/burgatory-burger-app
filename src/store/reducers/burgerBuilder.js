import * as actionTypes from '../actions/actionTypes';

const initialState = {
    ingredients: {
        salad: 0,
        meat: 0,
        bacon: 0,
        cheese: 0
    },
    totalPrice: 4
}

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.6,
    meat: 1.3,
    bacon: 0.7
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_INGREDIENT:
            return {
                ...state,
                totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName],
                ingredients: {
                    ...state.ingredients,
                    [action.ingredientName]: state.ingredients[action.ingredientName] + 1
                }
            }
        case actionTypes.REMOVE_INGREDIENT:
            return {
                ...state,
                totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName],
                ingredients: {
                    ...state.ingredients,
                    [action.ingredientName]: state.ingredients[action.ingredientName] - 1
                }
        }
        case actionTypes.NEW_ORDER:
            return {
                ...state,
                ingredients: { ...initialState.ingredients },
                totalPrice: initialState.totalPrice
            }
        default:
            return state;
    }
}

export default reducer;