import { useCallback, useState } from 'react';
import { Layout } from '../../layouts/default';

function AddPage() {
  const [inputValue, setInputValue] = useState('');

  const handelChangeInput = useCallback((event) => {
    setInputValue(event.target.value);
  }, []);

  return (
    <div>
      <Layout>
        <input type="text" value={inputValue} onChange={handelChangeInput} />
        <button >Add</button>
      </Layout>
    </div>
  );
}

export default AddPage;
