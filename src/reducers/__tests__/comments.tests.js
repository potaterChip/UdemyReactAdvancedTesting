import CommentReducer from '../comments';
import { SAVE_COMMENT } from "../../actions/types";

it('returns the state with the new comment', () => {
   const action = {
       type: SAVE_COMMENT,
       payload: 'New Comment'
   };

   const newState = CommentReducer([], action);

   expect(newState).toEqual(['New Comment']);
});