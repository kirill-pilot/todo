import PropTypes from 'prop-types';
import { useCallback, useState } from 'react';

function TodoItem(props) {
  const { id, name, onUpdate, onRemove } = props;
  const [isEdit, setIsEdit] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const handelChangeInput = useCallback((event) => {
    setInputValue(event.target.value);
  }, []);
  const handleClickEdit = useCallback(() => {
    setIsEdit(true);
    setInputValue(name);
  }, [name]);
  const handleClickConfirm = useCallback(() => {
    setIsEdit(false);
    onUpdate(id, inputValue);
  }, [onUpdate, id, inputValue]);
  const handleRemove = useCallback(() => {
    onRemove(id);
  }, [onRemove, id]);

  return (
    <li>
      {isEdit ? <input type="text" value={inputValue} onChange={handelChangeInput} /> : <span>{name}</span>}
      {isEdit && <button onClick={handleClickConfirm}>Confirm</button>}
      <button disabled={isEdit} onClick={handleClickEdit}>Edit</button>
      <button onClick={handleRemove}>Remove</button>
    </li>
  );
}

TodoItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onUpdate: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
};

export default TodoItem;
