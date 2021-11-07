import { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Layout } from '../../layouts/default';
import { addTodo } from '../../../redux/actionCreators/todos';
import { validateLength } from '../../../helpers/validators/validateLength';

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
      <main>
        <input type="text" value={inputValue} onChange={handelChangeInput} />
        <button disabled={!isValidValue} onClick={handleClick}>Add</button>
      </main>
    </Layout>
  );
}

export default AddPage;
