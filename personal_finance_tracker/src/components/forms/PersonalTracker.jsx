import React, { Component } from 'react';
import firebase1 from '../firebase/Firebase';
import TransactionList from '../TransactionList';


class PersonalTracker extends Component {

    state = {
        nameOfTransaction: '',
        amountOfTransaction: '',
        transactionType: '',
        currentUserID: firebase1.auth().currentUser.uid,
        availableMoney: 0,
        transactionList: []

    }

    signOut = () => {
        firebase1.auth().signOut()
    }





    handleChange = input => e => {
        this.setState({
            [input]: e.target.value !== '0' ? e.target.value : ''
        });
    };


    componentWillMount() {


        const { currentUserID, availableMoney } = this.state;
        let totalAmount = availableMoney;
        const transactionState = this.state.transactionList;
        firebase1.database().ref('TransactionList/' + currentUserID).once('value', (grabItemInfo) => {
            // console.log(grabItemInfo);
            grabItemInfo.forEach((item) => {

                totalAmount =
                    item.val().type === 'deposit' ? parseFloat(item.val().amountOfTransaction) + totalAmount : totalAmount - parseFloat(item.val().amountOfTransaction);

                transactionState.push({
                    newID: grabItemInfo.val().newID,
                    name: grabItemInfo.val().name,
                    amount: grabItemInfo.val().amount,
                    type: grabItemInfo.val().type,
                    currentID: grabItemInfo.val().currentID
                });
            });


            this.setState({
                transactionList: transactionState,
                amount: totalAmount
            })
        })
    }


    addANewTransaction = () => {
        const {
            nameOfTransaction,
            amountOfTransaction,
            transactionType,
            currentUserID,
            availableMoney
        } = this.state;

        if (nameOfTransaction && amountOfTransaction && transactionType) {
            const transactionState = this.state.transactionList
            transactionState.push({
                newID: transactionState.length + 1,
                name: nameOfTransaction,
                amount: amountOfTransaction,
                type: transactionType,
                currentID: currentUserID,
            })
            // console.log(transactionState);
            firebase1.database().ref('TransactionList/' + currentUserID).push({
                newID: transactionState.length,
                name: nameOfTransaction,
                amount: amountOfTransaction,
                type: transactionType,
                currentID: currentUserID
            }).then((data) => {
                ///used to receive callback
                console.log("callback went through successfully");

                this.setState({
                    nameOfTransaction: '',
                    amountOfTransaction: '',
                    transactionType: '',
                    transactionList: transactionState,
                    availableMoney: transactionType === 'deposit' ? availableMoney + parseFloat(amountOfTransaction) : availableMoney - parseFloat(amountOfTransaction),
                })
            }).catch((error) => {
                console.log("There's an error: ", error);
            })
        }
    };








    render() {


        return (
            <div className="personalTracker">

                <div className="dashboard">
                    <h4>Welcome!</h4>
                    <button className="signOut" onClick={this.signOut}>Sign Out</button>
                </div>

                <div className="total"><h5>${this.state.availableMoney}</h5></div>

                <div className="transactionForm">
                    <div className="newTransactionInfo">

                        <form>
                            <input placeholder="Transaction Name" type="text" name="nameOfTransaction"
                                onChange={this.handleChange('nameOfTransaction')} value={this.state.nameOfTransaction} />

                            <div className="transCluster">
                                <select name="type"
                                    onChange={this.handleChange('transactionType')} value={this.state.transactionType}>
                                    <option value="0">Transaction Type?</option>
                                    <option value="deposit">Deposit</option>
                                    <option value="expense">Expense</option>
                                </select>
                                <input placeholder="Amount" type="text" name="amountOfTransaction"
                                    onChange={this.handleChange('amountOfTransaction')} value={this.state.amountOfTransaction} />
                            </div>
                        </form>


                        <button className="addANewTransaction" onClick={() => this.addANewTransaction()}> Add Transaction</button>

                    </div>
                </div>

                <div className="allTransactions">
                    <h4 className="list">List of Transactions</h4>
                    <ul>
                        {
                            Object.keys(this.state.transactionList).map((id) => (
                                <TransactionList key={id}
                                    type={this.state.transactionList[id].type}
                                    name={this.state.transactionList[id].name}
                                    amount={this.state.transactionList[id].amount}
                                />
                            ))
                        }
                        {/* <li>
                            <div>Deposit</div>
                            <div> +20 </div>
                        </li> */}
                    </ul>
                </div>
            </div>
        )
    }
}

export default PersonalTracker;