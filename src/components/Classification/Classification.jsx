import React, { Component } from 'react';
import { connect } from 'react-redux'


class Classification extends Component {
    render() {
        return (
            <div>
                分类管理
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
)(Classification);