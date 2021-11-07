import { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Layout } from '../../layouts/default';
import { addTodo } from '../../../redux/actionCreators/todos';

function AddPage() {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();

  const handelChangeInput = useCallback((event) => {
    setInputValue(event.target.value);
  }, []);
  const handleClick = useCallback(() => {
    dispatch(addTodo(inputValue));
    setInputValue('');
  }, [dispatch, inputValue]);

  return (
    <div>
      <Layout>
        <input type="text" value={inputValue} onChange={handelChangeInput} />
        <button onClick={handleClick}>Add</button>
      </Layout>
    </div>
  );
}

export default AddPage;
