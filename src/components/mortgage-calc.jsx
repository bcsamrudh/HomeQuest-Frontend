'use client'
import 'src/app/globals.css';
import { useState } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { Label } from '@/components/ui/label';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { EmptyPlaceholder } from './empty-placeholder';

ChartJS.register(ArcElement, Tooltip, Legend);

//the component of this file
function MortgageCalculatorForm() {
    
    //initial/ setting state
    const [homeValue, setHomeValue] = useState(400000);
    const [downPayment, setDownPayment] = useState(80000);
    const [interestRate, setInterestRate] = useState(2.12);
    const [loanTerm, setLoanTerm] = useState(30);
    const [pDisplay, setParaDisplay] = useState(1202.08);
    
    //some new variables to make formula writing easier further
    const monthlyInterestRate = interestRate / 1200;
    const months = loanTerm * 12;
    const power = Math.pow((1 + monthlyInterestRate), months);
    const principal = homeValue - downPayment;
    const mortgagePayment = (principal * monthlyInterestRate * power) / (power - 1);
    
    //button action, mainly to update the mortgage payment (monthly)
    const handleClick = (event) => { 
        event.preventDefault();
        setParaDisplay(mortgagePayment.toFixed(2));
    }

    //more intermediate value storing
    const monthlyPrincipal = (homeValue - downPayment) / (12 * loanTerm);
    const monthlyInterest = mortgagePayment - monthlyPrincipal;
    
    //data and options for the chart
    const data = {
        labels: ['principal', 'interest'],
        datasets: [{
          label: 'amount',
          data: [monthlyPrincipal, monthlyInterest],
          backgroundColor: ['black', 'red'],
          borderColor: ['white', 'white'],
        }]
    }
  
    return (
        <div className="col-span-3 lg:col-span-4 lg:border-l">
        <div className="h-full px-4 py-6 lg:px-8">
        <label className='text-2xl font-bold'>Mortgage Calculator</label>
        <div className="pb-4">
        <div className='mortgage-calculator'>
            <div className='mortgage-form'>
                <form>
                    <label>Home value: </label>
                    <input 
                        type="number" 
                        id="home-value" 
                        required
                        value={ homeValue }
                        onChange={(event) => setHomeValue(event.target.value)}
                    />

                    <label>Down payment: </label>
                    <input 
                        type="number" 
                        id="down-payment" 
                        required
                        value={ downPayment }
                        onChange={(event) => setDownPayment(event.target.value)}
                    />

                    <label>Interest rate: </label>
                    <input 
                        type="number" 
                        id="interest-rate" 
                        required
                        value={ interestRate }
                        onChange={(event) => setInterestRate(event.target.value)}
                    />

                    <label>Loan term (years): </label>
                    <input 
                        type="number" 
                        id="loan-term" 
                        required
                        value={ loanTerm }
                        onChange={(event) => setLoanTerm(event.target.value)}
                    />
                    
                    <button onClick={ handleClick }>Show mortgage details</button>
                </form>
            </div>
            <div className='display-container'>
                <div className='mortgage-display'>
                    <p>Your monthly mortgage:</p>
                    <p id='mortgage-value'>{ pDisplay }</p>
                    <div className='mortgage-chart'>
                        <Doughnut 
                            data = { data }
                            options = { {}}
                        />
                    </div>
                </div>
            </div>
            </div>
        </div>
        </div>
        </div>
        
    )
}

export default MortgageCalculatorForm;