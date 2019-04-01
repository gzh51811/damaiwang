import React, { Component } from 'react';
import { connect } from 'react-redux'


class AddGoods extends Component {
    render() {
        return (
            <div>
                添加商品
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
)(AddGoods);