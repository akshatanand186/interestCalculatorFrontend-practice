import { useState } from "react";
import logo from "./assets/investment-calculator-logo.png";
import Form from "./Form";
import Table from "./Table";
function App() {
  const [calculationsTable, setCalculationsTable] = useState([]);
  const calculateHandler = ({
    currentSavings,
    yearlySavings,
    expectedReturn,
    investmentDuration,
  }) => {
    const yearlyData = []; // per-year results
    let reccuringSavingsOfUser = +currentSavings; // feel free to change the shape of this input object!
    const yearlyContribution = +yearlySavings; // as mentioned: feel free to change the shape...
    const interestRate = +expectedReturn / 100;
    const duration = investmentDuration;
    let totalInterest = 0;

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
  };

  return (
    <div>
      <header className="header">
        <h1>Investment Calculator</h1>
      </header>

      <Form onSubmitHandler={calculateHandler}></Form>

      {calculationsTable.length > 0 ? (
        <Table calculationsTable={calculationsTable}></Table>
      ) : (
        <div className="paragraph">No Data Entered !!</div>
      )}
    </div>
  );
}

export default App;
