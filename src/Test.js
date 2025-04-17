import { useState } from 'react';

function Test() {
  const [text, setText] = useState('');
  const [list, setList] = useState([]);

  const handleSubmit = () => {
    setList([...list, text]);
    setText('');
  };

  return (
    <div>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={handleSubmit}>追加</button>
      <ul>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
export default Test;