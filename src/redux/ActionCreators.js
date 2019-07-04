//Import everything that is being exported from ActionType.js
import * as ActionTypes from "./ActionTypes";
import { baseUrl } from "../shared/baseUrl";
import fetch from "cross-fetch";

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

//DISHES

//Create fetchDishes as a thunk, returns dispatch as a function
// Thunk returns function instead of an action object
export const fetchDishes = () => (dispatch) => {
    dispatch(dishesLoading(true));

    //Fetch dishes from server using fetch API, convert the response to json and Dispacth a call to addDishes function
    return fetch(baseUrl + "dishes")
        .then((response) => response.json())
        .then((dishes) => dispatch(addDishes(dishes)));
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

//COMMENTS

export const fetchComments = () => (dispatch) => {
    //Fetch comments from server using fetch API, convert the response to json and Dispacth a call to addComments function
    return fetch(baseUrl + "comments")
        .then((response) => response.json())
        .then((comments) => dispatch(addComments(comments)));
};

export const commentsFailed = (errmes) => {
    return {
        type: ActionTypes.COMMENTS_FAILED,
        payload: errmes
    };
};

export const addComments = (comments) => {
    return {
        type: ActionTypes.ADD_COMMENTS,
        payload: comments
    };
};

//PROMOS

export const fetchPromos = () => (dispatch) => {
    dispatch(promosLoading(true));

    return fetch(baseUrl + "promotions")
        .then((response) => response.json())
        .then((promos) => dispatch(addPromos(promos)));
};

export const promosLoading = () => ({
    type: ActionTypes.PROMOS_LOADING
});

export const promosFailed = (errmes) => ({
    type: ActionTypes.PROMOS_FAILED,
    payload: errmes
});

export const addPromos = (promos) => ({
    type: ActionTypes.ADD_PROMOS,
    payload: promos
});
