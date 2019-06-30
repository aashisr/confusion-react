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
