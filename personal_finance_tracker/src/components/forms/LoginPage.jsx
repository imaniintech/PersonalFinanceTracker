import React, { Component } from 'react';


class LoginPage extends Component {


    state = {
        email: '',
        password: ''
    }

    render() {
        return (
            <div>
                <form>

                    <input type="text" className="email" placeholder="Email" name="email" />

                    <input type="text" className="password" placeholder="Password" name="password" />

                    <input type="submit" className="submit" value="Submit" />
                </form>
            </div>
        )
    }
};

export default LoginPage;