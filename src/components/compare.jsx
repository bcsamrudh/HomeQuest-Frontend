import { useState } from 'react';

const Compare = () => {
  const [item1, setItem1] = useState('');
  const [item2, setItem2] = useState('');
  const [comparisonResult, setComparisonResult] = useState('');

  const handleItem1Change = (e) => {
    setItem1(e.target.value);
  }

  const handleItem2Change = (e) => {
    setItem2(e.target.value);
  }

  const compareItems = () => {
    if (item1 === item2) {
      setComparisonResult('Items are the same.');
    } else {
      setComparisonResult('Items are different.');
    }
  }

  return (
    <div>
      <div>
        <input type="text" placeholder="Item 1" value={item1} onChange={handleItem1Change} />
        <input type="text" placeholder="Item 2" value={item2} onChange={handleItem2Change} />
        <button onClick={compareItems}>Compare</button>
      </div>
      <div>
        <p>{comparisonResult}</p>
      </div>
    </div>
  );
}

export default Compare;
