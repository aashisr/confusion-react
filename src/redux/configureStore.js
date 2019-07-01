import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { Dishes } from "./dishes";
import { Comments } from "./comments";
import { Promotions } from "./promotions";
import { Leaders } from "./leaders";

export const ConfigureStore = () => {
    //Create a store with redux createStore function
    //CreateStore takes enhancer as second parameter which here is applyMiddleware()
    const store = createStore(
        //Combine the reducers received from multiple files into a single reducer
        combineReducers({
            dishes: Dishes,
            comments: Comments,
            promotions: Promotions,
            leaders: Leaders
        }),
        // applyMiddleware() makes thunk and logger available within the application
        applyMiddleware(thunk, logger)
    );

    return store;
};
