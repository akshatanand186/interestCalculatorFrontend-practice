import { useState } from "react";
import logo from "./assets/investment-calculator-logo.png";

function App() {
  const [currentSavings, setCurrentSavings] = useState(0);
  const [yearlySavings, setYearlySavings] = useState(0);
  const [expectedReturn, setExpectedReturn] = useState(0);
  const [investmentDuration, setInvestmentDuration] = useState(0);
  const [calculationsTable, setCalculationsTable] = useState([]);
  const calculateHandler = (userInput) => {
    // Should be triggered when form is submitted
    // You might not directly want to bind it to the submit event on the form though...

    const yearlyData = []; // per-year results

    // let reccuringSavingsOfUser = +userInput["current-savings"]; // feel free to change the shape of this input object!
    // const yearlyContribution = +userInput["yearly-contribution"]; // as mentioned: feel free to change the shape...
    // const expectedReturn = +userInput["expected-return"] / 100;
    // const duration = +userInput["duration"];
    let reccuringSavingsOfUser = +currentSavings; // feel free to change the shape of this input object!
    const yearlyContribution = +yearlySavings; // as mentioned: feel free to change the shape...
    const interestRate = +expectedReturn / 100;
    const duration = investmentDuration;
    let totalInterest = 0;

    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = +reccuringSavingsOfUser * interestRate;
      reccuringSavingsOfUser += yearlyInterest + yearlyContribution;
      totalInterest += yearlyInterest;
      yearlyData.push({
        // feel free to change the shape of the data pushed to the array!
        year: i + 1,
        yearlyInterest: yearlyInterest,
        totalSavings: reccuringSavingsOfUser,
        totalInterest: totalInterest,
        yearlyContribution: yearlyContribution,
        investedCapital: (i + 1) * +yearlyContribution + +currentSavings,
      });
    }
    setCalculationsTable(yearlyData);
    console.log(calculationsTable);
    console.log(yearlyData);
    // do something with yearlyData ...
  };

  const submitHandler = (event) => {
    event.preventDefault();
    calculateHandler();
    console.log("Hello");
  };
  const currentSavingsHandler = (event) => {
    setCurrentSavings(event.target.value);
  };
  const yearlySavingsHandler = (event) => {
    setYearlySavings(event.target.value);
  };
  const expectedReturnHandler = (event) => {
    setExpectedReturn(event.target.value);
  };
  const investmentDurationHandler = (event) => {
    setInvestmentDuration(event.target.value);
  };
  return (
    <div>
      <header className="header">
        <img src={logo} alt="logo" />
        <h1>Investment Calculator</h1>
      </header>

      <form className="form" onSubmit={submitHandler}>
        <div className="input-group">
          <p>
            <label htmlFor="current-savings">Current Savings ($)</label>
            <input
              type="number"
              id="current-savings"
              value={currentSavings}
              onChange={currentSavingsHandler}
            />
          </p>
          <p>
            <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
            <input
              type="number"
              id="yearly-contribution"
              value={yearlySavings}
              onChange={yearlySavingsHandler}
            />
          </p>
        </div>
        <div className="input-group">
          <p>
            <label htmlFor="expected-return">
              Expected Interest (%, per year)
            </label>
            <input
              type="number"
              id="expected-return"
              value={expectedReturn}
              onChange={expectedReturnHandler}
            />
          </p>
          <p>
            <label htmlFor="duration">Investment Duration (years)</label>
            <input
              type="number"
              id="duration"
              value={investmentDuration}
              onChange={investmentDurationHandler}
            />
          </p>
        </div>
        <p className="actions">
          <button type="reset" className="buttonAlt">
            Reset
          </button>
          <button type="submit" className="button">
            Calculate
          </button>
        </p>
      </form>

      {/* Todo: Show below table conditionally (only once result data is available) */}
      {/* Show fallback text if no data is available */}

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
    </div>
  );
}

export default App;
