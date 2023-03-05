import React, { useState } from 'react';

function App() {
  const [result, setResult] = useState('');

  const handleClick = (value) => {
    setResult(prevResult => prevResult + value);
  }

  const clear = () => {
    setResult('');
  }

  const calculate = () => {
    try {
      setResult(result.toString());
    } catch (error) {
      setResult("Error");
    }
  }

  const renderButton = (value) => {
    return (
      <button key={value} className="btn" onClick={() => handleClick(value)}>
        {value}
      </button>
    )
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6">
        <div className="mb-4 flex items-center justify-between">
          <input type="text" value={result} className="w-full h-10 p-2 border rounded-l-lg text-gray-700 focus:outline-none focus:border-blue-500" />
          <button className="h-10 px-4 rounded-r-lg btn bg-red-500 text-white" onClick={clear}>Clear</button>
        </div>
        <div className="grid grid-cols-4 gap-2">
          {['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', '0', '.', '=', '+'].map(value =>
            value === '=' ?
            <button key={value} className="btn bg-blue-500 text-white" onClick={calculate}>{value}</button>
            : renderButton(value)
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
