import React, { useContext } from "react";

import { Container } from "./styles";

import IncomeImg  from '../../assets/income.svg'
import OutcomeImg from '../../assets/outcome.svg'
import TotalImg from '../../assets/total.svg'
import { useTransactions } from "../../hooks/useTransactions";

export function Summary(){
    const {transactions} = useTransactions(); // hook que permite trazer informacao para qualquer componente

    // const totalDeposits = transactions.reduce((acc, transaction) => {
    //     if (transaction.type === 'deposit') {
    //         return acc + transaction.amount;
    //     }

    //     return acc
    // }, 0)
    
    const summary = transactions.reduce((acc, transaction) => {
        if(transaction.type === 'deposit'){
            acc.deposits += transaction.amount
            acc.total += transaction.amount;
        }
        else{
            acc.withdraw += transaction.amount;
            acc.total -= transaction.amount;
        }
        return acc;
    },{
        deposits: 0,
        withdraw: 0,
        total: 0,
    })


    return(
        <Container>
            <div>
                <header>
                    <p>Income</p>
                    <img src={ IncomeImg } alt="Income logo" />
                </header>
                <strong>
                {new Intl.NumberFormat('en', {
                    style: 'currency',
                    currency: 'USD'
                    }).format(summary.deposits)}
                </strong>
            </div>
            <div>
                <header>
                    <p>outcome</p>
                    <img src={ OutcomeImg } alt="Income logo" />
                </header>
                <strong>- 
                {new Intl.NumberFormat('en', {
                    style: 'currency',
                    currency: 'USD'
                    }).format(summary.withdraw)}
                </strong>
            </div>
            <div className= "Highlight-background">
                <header>
                    <p>Total</p>
                    <img src={ TotalImg } alt="Income logo" />
                </header>
                <strong>{new Intl.NumberFormat('en', {
                    style: 'currency',
                    currency: 'USD'
                    }).format(summary.total)}
                </strong>
            </div>
        </Container>
    )
    
};