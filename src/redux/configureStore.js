import { createStore } from "redux";
import { Reducer, initialState } from "./reducer";

export const ConfigureStore = () => {
    //Create a store with redux createStore function
    const store = createStore(Reducer, initialState);

    return store;
};
