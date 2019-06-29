import { DISHES } from "../shared/dishes";
import { COMMENTS } from "../shared/comments";
import { LEADERS } from "../shared/leaders";
import { PROMOTIONS } from "../shared/promotions";

export const initialState = {
    //Store the initial states of the application
    dishes: DISHES,
    comments: COMMENTS,
    leaders: LEADERS,
    promotions: PROMOTIONS,
};

//Reducer function
//receives current state (initialState if state is undefined) and action as parameters
export const Reducer = (state = initialState, action) => {
    // Can not modify the state directly here
    // Do an immutable (do not modify original state) change and return the updated version of state
    return state;
};
