import React from 'react';


const TransactionList = props => {

    return (
        <div>
            <li>
                <div>{props.name}</div>
                <div>
                    {props.type === 'deposit' ? (
                        <div className="deposits"> +{props.amount}</div>
                    ) : (
                        <div className="expenses"> -{props.amount}</div>
                    )}
                </div>
            </li>
        </div>
    )

};

export default TransactionList;