import React, { Component } from 'react';
import { connect } from 'react-redux'


class Non extends Component {
    render() {
        return (
            <div>
                404
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
)(Non);