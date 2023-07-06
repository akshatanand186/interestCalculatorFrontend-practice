import { useState } from "react";

const Form = (props) => {
  const [currentSavings, setCurrentSavings] = useState(0);
  const [yearlySavings, setYearlySavings] = useState(0);
  const [expectedReturn, setExpectedReturn] = useState(0);
  const [investmentDuration, setInvestmentDuration] = useState(0);
  const [calculationsTable, setCalculationsTable] = useState([]);

  const resetHandler = (event) => {
    setCurrentSavings(0);
    setYearlySavings(0);
    setExpectedReturn(0);
    setInvestmentDuration(0);
    setCalculationsTable([]);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onSubmitHandler({
      currentSavings,
      yearlySavings,
      expectedReturn,
      investmentDuration,
    });
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
        <button type="reset" className="buttonAlt" onClick={resetHandler}>
          Reset
        </button>
        <button type="submit" className="button">
          Calculate
        </button>
      </p>
    </form>
  );
};

export default Form;
