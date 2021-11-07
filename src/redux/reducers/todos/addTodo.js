import { v4 as uuidv4 } from 'uuid';

export const addTodo = (state, { payload }) => state.concat({ ...payload, id: uuidv4() });
