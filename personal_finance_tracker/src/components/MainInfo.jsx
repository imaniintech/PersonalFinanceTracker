import React, { Component } from 'react';
import firebase1 from './firebase/Firebase';
import LoginPage from './forms/LoginPage';
import RegisterPage from './forms/RegisterPage';
import PersonalTracker from './forms/PersonalTracker';


class MainInfo extends Component {



    state = {
        userLoggedIn: 1,
        loading: true,
        changeForms: false //shows login first -will be able to set an if statement
    };

    componentDidMount() {
        this.listenForAuth();
    };

    listenForAuth() {
        firebase1.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ user })
            } else {
                this.setState({ user: undefined })
            }
        });
    }


    changeForms = (switchForm) => {
        console.log(switchForm);
        this.setState({ changeForms: switchForm === 'registerAccount' ? true : false })
    };

    render() {
        const toggleForms = !this.state.changeForms ? <LoginPage /> : <RegisterPage />



        return (
            <div>
                {!this.state.user ?
                    < div className="mainInfo" >
                        {toggleForms}
                        {/* <LoginPage /> */}
                        {!this.state.changeForms ?
                            (
                                < div className="accountSetup">
                                    Don't have an account? <button onClick={() => this.changeForms(!this.state.changeForms ? 'registerAccount' : 'loginAccount')} className="signUp">Sign Up</button>
                                </div>
                            ) : (
                                < div className="accountSetup">
                                    Already have an account? <button onClick={() => this.changeForms(!this.state.changeForms ? 'registerAccount' : 'loginAccount')} className="signUp">Sign In</button>
                                </div>
                            )
                        }
                    </div > : <PersonalTracker />
                }
            </div >


        )
    }
};

export default MainInfo;