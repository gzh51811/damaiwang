import React, { Component } from 'react';
import { connect } from 'react-redux'


class AllVenues extends Component {
    render() {
        return (
            <div>
                所有场馆
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
)(AllVenues);