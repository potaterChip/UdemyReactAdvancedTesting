export default ({ dispatch }) => next => action => {
    // Check to see if the payload of the action is a promise
    if (!action.payload || !action.payload.then) {
        return next(action);
    }

    action.payload.then((response) => {
        const newAction = { ...action, payload: response };
        dispatch(newAction);
    });
}