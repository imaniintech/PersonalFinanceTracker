import React from 'react';


const TransactionList = props => {

    return (
        <div>
            <li>
                {props.name}
                {props.type === 'deposit' ? (
                    <div className="deposits"> {props.amount}</div>
                ) : (
                    <div className="expenses"> {props.amount}</div>
                )}
            </li>
        </div>
    )

};

export default TransactionList;