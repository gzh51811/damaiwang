import React, { Component } from 'react';
import { connect } from 'react-redux'


class AddVenue extends Component {
    render() {
        return (
            <div>
                添加场馆
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
)(AddVenue);