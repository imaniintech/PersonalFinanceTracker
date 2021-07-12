import React, { Component } from 'react';
import firebase1 from '../firebase/Firebase';



class PersonalTracker extends Component {


    signOut = () => {
        firebase1.auth().signOut()
    }


    render() {
        return (
            <div className="personalTracker">

                <div className="dashboard">
                    <h4>Hi!</h4>
                    <button className="signOut" onClick={this.signOut}>Sign Out</button>
                </div>

                <div className="total"><h3>$1000</h3></div>

                <div className="transactionForm">
                    <div className="newTransactionForm">

                        <form>
                            <input placeholder="Transaction Name" type="text" name="nameOfTransaction" />

                            <div className="">
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
            </div>
        )
    }
}

export default PersonalTracker;