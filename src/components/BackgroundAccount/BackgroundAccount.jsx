import React, { Component } from 'react';
import { connect } from 'react-redux'


class BackgroundAccount extends Component {
    render() {
        return (
            <div>
                后台账号管理
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
)(BackgroundAccount);