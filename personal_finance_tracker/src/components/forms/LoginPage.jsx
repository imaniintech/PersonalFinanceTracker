import React, { Component } from 'react';


class LoginPage extends Component {


    state = {
        email: '',
        password: ''
    }


    render() {
        return (
            <div>
                <form className="loginForm">

                    <div className="form-group">
                        <label htmlFor="email"></label>
                        <input type="text" className="email" placeholder="Email" name="email" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password"></label>
                        <input type="text" className="password" placeholder="Password" type="password" name="password" />
                    </div>

                    <div className="form-group">
                        <input type="submit" className="submitButton" value="Submit" />
                    </div>
                </form>
            </div>
        )
    }
};

export default LoginPage;