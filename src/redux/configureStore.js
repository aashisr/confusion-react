import { createStore, combineReducers } from "redux";
import { Dishes } from "./dishes";
import { Comments } from "./comments";
import { Promotions } from "./promotions";
import { Leaders } from "./leaders";

export const ConfigureStore = () => {
    //Create a store with redux createStore function
    const store = createStore(
        //Combine the reducers received from multiple files into a single reducer
        combineReducers({
            dishes: Dishes,
            comments: Comments,
            promotions: Promotions,
            leaders: Leaders,
        }),
    );

    return store;
};
