import { saveComment } from "../index";
import { SAVE_COMMENT } from "../types";

describe('Save Comment', () => {
    it('should have the correct action type', () => {
        const action = saveComment();

        expect(action.type).toEqual(SAVE_COMMENT);
    });

    it('should have the correct action payload', () => {
        const action = saveComment('payload');

        expect(action.payload).toEqual('payload');
    })
});