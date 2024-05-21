import React from "react";
import TableRow from "./TableRow";
import "./App.css";

const Table = ({ data, updateValue }) => (
  <table>
    <thead>
      <tr>
        <th>Label</th>
        <th>Value</th>
        <th>Input</th>
        <th>Allocation %</th>
        <th>Allocation Val</th>
        <th>Variance %</th>
      </tr>
    </thead>
    <tbody>
      {data.map((group) => (
        <>
          <TableRow
            key={group.id}
            row={group}
            updateValue={updateValue}
            parentId={null}
          />
          {group.children.map((child) => (
            <TableRow
              key={child.id}
              row={child}
              updateValue={updateValue}
              parentId={group.id}
            />
          ))}
        </>
      ))}
    </tbody>
  </table>
);

export default Table;
