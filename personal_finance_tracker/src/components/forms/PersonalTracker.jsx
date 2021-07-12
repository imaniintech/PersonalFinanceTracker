import React, { Component } from 'react';
import firebase1 from '../firebase/Firebase';



class PersonalTracker extends Component {


    signOut = () => {
        firebase1.auth().signOut()
    }

    state = {
        availableMoney: 0,
        transactionList: [],
        nameOfTransaction: '',
        amountOfTransaction: '',
        type: '',
        currentUserID: firebase1.auth().currentUser.uid
    }


    render() {
        return (
            <div className="personalTracker">

                <div className="dashboard">
                    <h4>Hi!</h4>
                    <button className="signOut" onClick={this.signOut}>Sign Out</button>
                </div>

                <div className="total"><h5>$1000</h5></div>

                <div className="transactionForm">
                    <div className="newTransactionInfo">

                        <form>
                            <input placeholder="Transaction Name" type="text" name="nameOfTransaction" />

                            <div className="transCluster">
                                <select name="type">
                                    <option value="0">Transaction Type?</option>
                                    <option value="0">Deposit</option>
                                    <option value="0">Expense</option>
                                </select>
                                <input placeholder="Amount" type="text" name="amountOfTransaction" />
                            </div>

                            <button className="addNewTransaction"> Add Transaction</button>
                        </form>

                    </div>
                </div>

                <div className="allTransactions">
                    <h4 className="list">List of Transactions</h4>
                    <ul>
                        <li>
                            <div>Deposit</div>
                            <div> +20 </div>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default PersonalTracker;