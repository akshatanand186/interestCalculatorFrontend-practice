import React from "react";
const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "INR",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

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
        {calculationsTable.map((val) => {
          return (
            <tr key={val.year}>
              <td>{val.year}</td>
              <td>{formatter.format(val.totalSavings)}</td>
              <td>{formatter.format(val.yearlyInterest)}</td>
              <td>{formatter.format(val.totalInterest)}</td>
              <td>{formatter.format(val.investedCapital)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
