import React, { Component } from 'react';
import firebase1 from '../firebase/Firebase';



class PersonalTracker extends Component {


    signOut = () => {
        firebase1.auth().signOut()
    }


    render() {
        return (
            <div>

                <button onClick={this.signOut}>Sign Out</button>

            </div>
        )
    }
}

export default PersonalTracker;