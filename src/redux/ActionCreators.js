import { DISHES } from "../shared/dishes";
//Import everything that is being exported from ActionType.js
import * as ActionTypes from "./ActionTypes";

//Export the function to add comment as addComment action
export const addComment = (dishId, rating, author, comment) => ({
    type: ActionTypes.ADD_COMMENT,
    // Data to be added as comment sent as payload
    payload: {
        dishId: dishId,
        rating: rating,
        author: author,
        comment: comment
    }
});

//Create fetchDishes as a thunk, returns dispatch as a function
// Thunk returns function instead of an action object
export const fetchDishes = () => (dispatch) => {
    dispatch(dishesLoading(true));

    //Delay the dispatching of dishes
    setTimeout(() => {
        //Dispacth a call to addDishes function after 2 s
        dispatch(addDishes(DISHES));
    }, 2000);
};

//This is not a thunk since it is returning an action opject
export const dishesLoading = () => {
    // Return an DISHES_LOADING action without data
    return {
        type: ActionTypes.DISHES_LOADING
    };
};

export const dishesFailed = (errmes) => {
    return {
        type: ActionTypes.DISHES_FAILED,
        payload: errmes
    };
};

export const addDishes = (dishes) => {
    return {
        type: ActionTypes.ADD_DISHES,
        payload: dishes
    };
};
