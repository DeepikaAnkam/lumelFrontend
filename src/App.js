import React, { useState } from "react";
import Table from "./Table";

const initialData = [
  {
    id: "electronics",
    label: "Electronics",
    value: 1500,
    children: [
      { id: "phones", label: "Phones", value: 800 },
      { id: "laptops", label: "Laptops", value: 700 },
    ],
  },
  {
    id: "furniture",
    label: "Furniture",
    value: 1000,
    children: [
      { id: "tables", label: "Tables", value: 300 },
      { id: "chairs", label: "Chairs", value: 700 },
    ],
  },
];

function App() {
  const [data, setData] = useState(initialData);

  const updateValue = (parentId, id, newValue) => {
    const newData = data.map((group) => {
      if (group.id === parentId || !parentId) {
        const children = group.children.map((item) => {
          if (item.id === id) {
            return { ...item, value: newValue };
          }
          return item;
        });
        const sum = children.reduce((acc, curr) => acc + curr.value, 0);
        return { ...group, value: sum, children };
      }
      return group;
    });
    setData(newData);
  };

  return (
    <div className="App">
      <Table data={data} updateValue={updateValue} />
    </div>
  );
}

export default App;
