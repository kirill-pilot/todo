export const editTodo = (state, { payload }) => state.map(todo => todo.id !== payload.id ? todo : { id: todo.id, name: payload.name });
