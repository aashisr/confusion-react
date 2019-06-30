import { DISHES } from "../shared/dishes";

export const Dishes = (state = DISHES, action) => {
    switch (action.type) {
        // Return dishes withour modifying anything for now
        default:
            return state;
    }
};
