import { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Layout } from '../../layouts/default';
import { addTodo } from '../../../redux/actionCreators/todos';
import { validateLength } from '../../../helpers/validators/validateLength';
import './styles.scss';

const minLengthValue = 1;
const maxLengthValue = 30;

function AddPage() {
  const [inputValue, setInputValue] = useState('');
  const [isValidValue, setIsValidValue] = useState(false);
  const dispatch = useDispatch();

  const handelChangeInput = useCallback((event) => {
    setInputValue(event.target.value);
    setIsValidValue(validateLength(event.target.value, maxLengthValue, minLengthValue));
  }, []);
  const handleClick = useCallback(() => {
    dispatch(addTodo(inputValue));
    setInputValue('');
    setIsValidValue(false);
  }, [dispatch, inputValue]);

  return (
    <Layout>
      <main className="add-page">
        <input
          className="add-page__input-todo"
          type="text"
          placeholder="Write a new todo..."
          value={inputValue}
          onChange={handelChangeInput}
        />
        <button
          className="add-page__button-add"
          disabled={!isValidValue}
          onClick={handleClick}
        >
          Add
        </button>
      </main>
    </Layout>
  );
}

export default AddPage;
