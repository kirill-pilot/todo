import { useSelector, useDispatch } from 'react-redux';
import { useCallback } from 'react';
import { Layout } from '../../layouts/default';
import TodoItem from './components/todoItem/view';
import { removeTodo, editTodo } from '../../../redux/actionCreators/todos';
import './styles.scss';

function TodosPage() {
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();

  const handleRemove = useCallback((todoId) => {
    dispatch(removeTodo(todoId));
  }, [dispatch]);
  const handleUpdate = useCallback((todoId, newName) => {
    dispatch(editTodo(todoId, newName));
  }, [dispatch]);

  return (
    <Layout>
      <main className="todos-page">
        {todos.length === 0 && <span>Todo list is empty!</span>}
        <ul className="todos-page__list-item">
          {todos.map((todo) => (
            <TodoItem
              key={todo.id}
              id={todo.id}
              name={todo.name}
              onRemove={handleRemove}
              onUpdate={handleUpdate}
            />
          ))}
        </ul>
      </main>
    </Layout>
  );
}

export default TodosPage;
