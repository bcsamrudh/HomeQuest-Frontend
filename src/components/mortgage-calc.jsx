import { useState } from 'react';
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

const MortgageCalculator = () => {
  const [loanAmount, setLoanAmount] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [loanTerm, setLoanTerm] = useState('');
  const [monthlyPayment, setMonthlyPayment] = useState(null);
  const [totalPayment, setTotalPayment] = useState(null);
  const [totalInterest, setTotalInterest] = useState(null);
  const [error, setError] = useState('');

  const calculateMortgage = () => {
    if (!loanAmount || !interestRate || !loanTerm) {
      setError('Please fill in all fields');
      return;
    }

    const P = parseFloat(loanAmount);
    const annualRate = parseFloat(interestRate) / 100;
    const n = parseFloat(loanTerm) * 12;
    const i = annualRate / 12;

    const monthlyPayment =
      (P * i * Math.pow(1 + i, n)) / (Math.pow(1 + i, n) - 1);

    setMonthlyPayment(monthlyPayment.toFixed(2));
    setTotalPayment((monthlyPayment * n).toFixed(2));
    setTotalInterest((monthlyPayment * n - P).toFixed(2));
    setError('');
  };

  return (
    <div>
        <div className="p-4">
        {error && (
          <div className="text-red-500">{error}</div>
        )}
      <h1 className="text-2xl font-semibold mb-4">Mortgage Calculator</h1>
      <div className="space-y-4">
        <input
          type="text"
          placeholder="Loan Amount ($)"
          value={loanAmount}
          onChange={(e) => setLoanAmount(e.target.value)}
          className="border p-2 rounded"
        />
        <input
          type="text"
          placeholder="Interest Rate (%)"
          value={interestRate}
          onChange={(e) => setInterestRate(e.target.value)}
          className="border p-2 rounded"
        />
        <input
          type="text"
          placeholder="Loan Term (years)"
          value={loanTerm}
          onChange={(e) => setLoanTerm(e.target.value)}
          className="border p-2 rounded"
        />
       <Button onClick={calculateMortgage}>Calculate</Button>
        {monthlyPayment && (
          <div className="space-y-2">
            <p>Monthly Payment: ${monthlyPayment}</p>
            <p>Total Payment: ${totalPayment}</p>
            <p>Total Interest Paid: ${totalInterest}</p>
          </div>
        )}
      </div>
      </div>
      </div>
  );
};

export default MortgageCalculator;