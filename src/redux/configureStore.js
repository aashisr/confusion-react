import { createStore, combineReducers, applyMiddleware } from "redux";
import { createForms } from "react-redux-form";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { Dishes } from "./dishes";
import { Comments } from "./comments";
import { Promotions } from "./promotions";
import { Leaders } from "./leaders";
import { InitialFeedback } from "./forms";

export const ConfigureStore = () => {
    //Create a store with redux createStore function
    //CreateStore takes enhancer as second parameter which here is applyMiddleware()
    const store = createStore(
        //Combine the reducers received from multiple files into a single reducer
        combineReducers({
            dishes: Dishes,
            comments: Comments,
            promotions: Promotions,
            leaders: Leaders,
            // Adds necessary reducer function and state information into createStore,
            // react-redux-form adds reducers, action creators etc by itself
            ...createForms({
                // InitialFeedback is supplied to reset the initial state of form after submitting
                feedback: InitialFeedback
            })
        }),
        // applyMiddleware() makes thunk and logger available within the application
        applyMiddleware(thunk, logger)
    );

    return store;
};
