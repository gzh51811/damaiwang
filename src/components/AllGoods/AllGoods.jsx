import React, { Component } from 'react';
import { connect } from 'react-redux'


class AllGoods extends Component {
    render() {
        return (
            <div>
                所有商品
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
)(AllGoods);