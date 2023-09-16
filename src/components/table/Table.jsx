// import React, { Component } from 'react';
import TableRow from "./TableRow";
import "../../assets/css/Table.css";

export default function Table({ header, data }) {
  console.log(data);
  return (
    <div className="table-container">
      <table className="movie-table">
        <thead>
          <tr>
            {header.map((col, i) => {
              return <th key={col + i}>{col}</th>;
            })}
          </tr>
        </thead>
      
        <tbody>
          {data.map((rowData, rowIndex) => (
            <tr key={rowIndex}>
              {header.map((col, colIndex) => (
                <td key={colIndex}>{rowData[col]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
