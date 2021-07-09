import React, { Component } from 'react';
import LoginPage from './forms/LoginPage'


class MainInfo extends Component {



    state = {
        userLoggedIn: 1,
        loading: true
    }

    render() {
        return (
            <div className="mainInfo">
                <LoginPage />
                <div className="accountSetup">
                    Don't have an account?
                    <button className="signUp">Sign Up</button>
                </div>

            </div>
        )
    }
};

export default MainInfo;