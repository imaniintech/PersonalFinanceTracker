import React, { Component } from 'react';



class MainInfo extends Component {



    state = {
        userLoggedIn: 1,
        loading: true
    }

    render() {
        return (
            <div className="mainInfo">
                Main Information
            </div>
        )
    }
};

export default MainInfo;