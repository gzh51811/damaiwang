import React, { Component } from 'react';
import { connect } from 'react-redux'
import './Login.css';

class Login extends Component {
    render() {
        return (
            <div className="login">
                <div className="login_nr">

                </div>
            </div>
        );
    }
}


export default connect(
    (state) => {
        // console.log(state)
        return state
    },
    (dispatch) => {
        return {

        }
    }
)(Login);