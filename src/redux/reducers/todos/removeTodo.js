export const removeTodo = (state, { payload }) => state.filter(todo => todo.id !== payload);
