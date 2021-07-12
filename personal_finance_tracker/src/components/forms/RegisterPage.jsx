import React, { Component } from 'react';
import firebase1 from '../firebase/Firebase';


class RegisterPage extends Component {


    state = {
        fistName: '',
        lastName: '',
        email: '',
        password: '',
        errorsInFireBase: ''
    };

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    };

    registerAccount = e => {
        e.preventDefault();
        firebase1.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((user) => {
            let currentUser = firebase1.auth().currentUser;
            currentUser.update({
                firstName: this.state.firstName
            })
        }).catch((error) => {
            this.setState({ errorsInFireBase: error.message })
        });
    }

    render() {
        return (
            <div>
                <form className="loginForm">

                    <div className="form-group">
                        <label htmlFor="firstName"></label>
                        <input type="text" className="firstName" placeholder="First Name" name="firstName"
                            onChange={this.handleChange} value={this.state.firstName}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="lastName"></label>
                        <input type="text" className="lastName" placeholder="Last Name" name="lastName"
                            onChange={this.handleChange} value={this.state.lastName}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email"></label>
                        <input type="text" className="email" placeholder="Email" name="email"
                            onChange={this.handleChange} value={this.state.email}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password"></label>
                        <input type="text" className="password" placeholder="Password" name="password"
                            onChange={this.handleChange} value={this.state.password}
                        />
                    </div>

                    <div className="form-group">
                        <input onClick={this.registerAccount} type="submit" className="submitButton" value="Submit" />
                    </div>
                </form>
            </div>
        )
    }
};

export default RegisterPage;