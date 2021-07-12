import React, { Component } from 'react';
import firebase1 from '../firebase/Firebase';


class LoginPage extends Component {


    state = {
        email: '',
        password: '',
        errorsInFireBase: ''
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    signIn = e => {
        e.preventDefault()
        firebase1.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
            .catch((error) => {
                this.setState({ errorsInFireBase: error.message })
            })
    }


    render() {

        return (
            <div>
                <form className="loginForm">

                    <div className="form-group">
                        <label htmlFor="email"></label>
                        <input type="text" className="email" placeholder="Email" name="email"
                            onChange={this.handleChange} value={this.state.email}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password"></label>
                        <input type="text" className="password" placeholder="Password" type="password" name="password" onChange={this.handleChange} value={this.state.password}
                        />
                    </div>

                    <div className="form-group">
                        <input onClick={this.signIn} type="submit" className="submitButton" value="Submit" />
                    </div>
                </form>
            </div>
        )
    }
};

export default LoginPage;