import React from "react";

const Transactions = () => {
  return (
    <div>
        <div className="transaction-header">
            <h1>
                Transactions
                <span>All transactions</span>
            </h1>
        </div>
        <table className="table-fill">
            <thead>
                <tr>
                    <th className="text-left">Sender</th>
                    <th className="text-left">Receiver</th>
                    <th className="text-left">Message</th>
                    <th className="text-left">Amount</th>
                    <th className="text-left">Timestamp</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className="text-left">
                        <a>Text</a>
                    </td>
                    <td className="text-left">
                        <a>Text</a>
                    </td>
                    <td className="text-left">
                        <a>Text</a>
                    </td>
                    <td className="text-left">
                        <a>Text</a>
                    </td>
                    <td className="text-left">
                        <a>Text</a>
                    </td>
                </tr>
                
            </tbody>
        </table>
    </div>
  )
};

export default Transactions