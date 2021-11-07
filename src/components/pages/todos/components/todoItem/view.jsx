import PropTypes from 'prop-types';
import { useCallback, useState } from 'react';
import { validateLength } from '../../../../../helpers/validators/validateLength';
import './styles.scss';

const minLengthValue = 1;
const maxLengthValue = 30;

function TodoItem(props) {
  const { id, name, onUpdate, onRemove } = props;
  const [isEdit, setIsEdit] = useState(false);
  const [isValidValue, setIsValidValue] = useState(true);
  const [inputValue, setInputValue] = useState('');

  const handelChangeInput = useCallback((event) => {
    setInputValue(event.target.value);
    setIsValidValue(validateLength(event.target.value, maxLengthValue, minLengthValue));
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
    <li className="todo-item">
      <div className="todo-item__data-wrapper">
        {isEdit ? (
          <input className="todo-item__input" type="text" value={inputValue} onChange={handelChangeInput} />
        ) : (
          <span className="todo-item__text">{name}</span>
        )}
        {isEdit && (
          <button
            className="todo-item__button-confirm"
            disabled={!isValidValue}
            onClick={handleClickConfirm}
          >
            Confirm
          </button>
        )}
      </div>
      <div className="todo-item__action-wrapper">
        <button className="todo-item__button-edit" disabled={isEdit} onClick={handleClickEdit}>Edit</button>
        <button className="todo-item__button-remove" onClick={handleRemove}>Remove</button>
      </div>
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
