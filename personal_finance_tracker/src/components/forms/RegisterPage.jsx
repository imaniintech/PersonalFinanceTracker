import React, { Component } from 'react';


class RegisterPage extends Component {


    state = {
        fistName: '',
        lastName: '',
        email: '',
        password: ''
    }

    render() {
        return (
            <div>
                <form className="loginForm">

                    <div className="form-group">
                        <label htmlFor="firstName"></label>
                        <input type="text" className="firstName" placeholder="First Name" name="name" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="lastName"></label>
                        <input type="text" className="lastName" placeholder="Last Name" name="name" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email"></label>
                        <input type="text" className="email" placeholder="Email" name="email" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password"></label>
                        <input type="text" className="password" placeholder="Password" name="password" />
                    </div>

                    <div className="form-group">
                        <input type="submit" className="submitButton" value="Submit" />
                    </div>
                </form>
            </div>
        )
    }
};

export default RegisterPage;