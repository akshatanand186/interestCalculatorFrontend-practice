import React from "react";

const Table = ({ calculationsTable }) => {
  return (
    <table className="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Total Savings</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {calculationsTable.length > 0 ? (
          calculationsTable.map((val) => {
            return (
              <tr>
                <td>{val.year}</td>
                <td>{val.totalSavings}</td>
                <td>{val.yearlyInterest}</td>
                <td>{val.totalInterest}</td>
                <td>{val.investedCapital}</td>
              </tr>
            );
          })
        ) : (
          <div></div>
        )}
      </tbody>
    </table>
  );
};

export default Table;
