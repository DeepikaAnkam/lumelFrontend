import React, { useState } from "react";

const TableRow = ({ row, updateValue, parentId }) => {
  const [inputValue, setInputValue] = useState("");
  const [variance, setVariance] = useState(0);

  const handlePercentageChange = () => {
    const percentage = parseFloat(inputValue) / 100;
    const newValue = row.value + row.value * percentage;
    updateValue(parentId, row.id, newValue);
    // const variance = ((newValue - row.value) / row.value) * 100;
    // setVariance(variance);
  };

  const handleValueChange = () => {
    const newValue = parseFloat(inputValue);
    updateValue(parentId, row.id, newValue);
  };

  return (
    <tr>
      <td>{row.label}</td>
      <td>{row.value.toFixed(2)}</td>
      <td>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </td>
      <td>
        <button onClick={handlePercentageChange}>Apply %</button>
      </td>
      <td>
        <button onClick={handleValueChange}>Set Value</button>
      </td>
      <td>{variance}%</td>
      
    </tr>
  );
};

export default TableRow;
