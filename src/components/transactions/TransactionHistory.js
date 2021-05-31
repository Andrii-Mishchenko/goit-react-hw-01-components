import React from 'react';
import TransactionItem from './TransactionItem'

const TransactionHistory =({items})=>(
    <table className="transaction-history">
        <thead>
            <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
            </tr>
        </thead>

        <tbody>
            {items.map(({type, amount, currency, id})=>(
                <TransactionItem
                type={type}
                amount={amount}
                currency={currency}
                key = {id}
                />
            ))}
        </tbody>
    </table>
)

export default TransactionHistory