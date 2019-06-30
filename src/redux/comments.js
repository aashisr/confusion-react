import { COMMENTS } from "../shared/comments";
import * as ActionTypes from "./ActionTypes";

export const Comments = (state = COMMENTS, action) => {
    switch (action.type) {
        case ActionTypes.ADD_COMMENT:
            var comment = action.payload;
            //Comment id not needed when connected to server
            comment.id = state.length;
            comment.date = new Date().toISOString();

            console.log("Comment in comments.js " + JSON.stringify(comment));

            //Can not modify the state sent as parameter, so concat (immutable operation)
            return state.concat(comment);
        default:
            return state;
    }
};
