import React, { Component } from 'react';
import { connect } from 'react-redux'


class DataOverview extends Component {
    render() {
        return (
            <div>
                数据概览
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
)(DataOverview);