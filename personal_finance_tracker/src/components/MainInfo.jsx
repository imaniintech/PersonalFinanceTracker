import React, { Component } from 'react';
import LoginPage from './forms/LoginPage';
import RegisterPage from './forms/RegisterPage';


class MainInfo extends Component {



    state = {
        userLoggedIn: 1,
        loading: true,
        changeForms: false //shows login first -will be able to set an if statement
    }


    changeForms = (switchForm) => {
        console.log(switchForm);
        this.setState({ changeForms: switchForm === 'registerAccount' ? true : false })
    }

    render() {
        const toggleForms = !this.state.changeForms ? <LoginPage /> : <RegisterPage />



        return (
            <div>
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
                </div >
            </div >

        )
    }
};

export default MainInfo;