export const todoReducer = (initialState=[], action) => {
    
    switch (action.type) {
        case '[TODO] add todo':
            return [...initialState, action.payload];
           
        case '[TODO] delete todo':
            return initialState.filter(todo => todo.id!== action.payload);
        case '[TODO] toggle todo':
            return initialState.map(todo => todo.id === action.payload? {...todo, done:!todo.done } : todo);
        case '[TODO] edit todo':
            return initialState.map(todo => todo.id === action.payload.id? {...todo, todo: action.payload.todo } : todo);
        default:
            return initialState;
    }

    
}