import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Table} from 'antd';


const columns = [
    {
        title: 'actors',
        dataIndex: 'actors',
    }, {
        title: 'Name',
        dataIndex: 'Name',
    }, {
        title: 'showTime',
        dataIndex: 'showTime',
    }, {
        title: 'venue',
        dataIndex: 'venue',
    }, {
        title: 'venueCity',
        dataIndex: 'venueCity',
    }, {
        title: 'verticalPic',
        dataIndex: 'verticalPic',
    }, {
        title: 'formattedPriceStr',
        dataIndex: 'formattedPriceStr',
    }, {
        title: 'categoryName',
        dataIndex: 'categoryName',
    }, {
        title: 'showstatus',
        dataIndex: 'showstatus',
    }];

const data = [];
for (let i = 0; i < 46; i++) {
    data.push({
        key: i,
        name: `Edward King ${i}`,
        age: 32,
        address: `London, Park Lane no. ${i}`,
    });
}

class AllGoods extends Component {
    constructor(props){
        super(props)
        this.props=props;
        this.state={
            goodsData:[],
            selectedRowKeys: []
        }
        this.getData=this.getData.bind(this)
    }
    getData(){
        fetch(` http://localhost:3002/setting/all`,{
    method:"GET"
    }).then(res=>res.jsonn()).then(data=>{
            console.log(data)
            this.setState({
                goodsData:data,
            })
        }).catch(e=>console.log('错误：',e))
    }
    componentWillMount() {
        this.getData();
    }
    // state = {
    //     selectedRowKeys: [], // Check here to configure the default column
    // };

    onSelectChange = (selectedRowKeys) => {
        // console.log('selectedRowKeys changed: ', selectedRowKeys);
        this.setState({ selectedRowKeys });
    }
    render() {
        const { selectedRowKeys } = this.state;
        const rowSelection = {
            selectedRowKeys,
            onChange: this.onSelectChange,
            hideDefaultSelections: true,
            selections: [{
                key: 'all-data',
                text: 'Select All Data',
                onSelect: () => {
                    this.setState({
                        selectedRowKeys: [...Array(46).keys()], // 0...45
                    });
                },
            }, {
                key: 'odd',
                text: 'Select Odd Row',
                onSelect: (changableRowKeys) => {
                    let newSelectedRowKeys = [];
                    newSelectedRowKeys = changableRowKeys.filter((key, index) => {
                        if (index % 2 !== 0) {
                            return false;
                        }
                        return true;
                    });
                    this.setState({ selectedRowKeys: newSelectedRowKeys });
                },
            }, {
                key: 'even',
                text: 'Select Even Row',
                onSelect: (changableRowKeys) => {
                    let newSelectedRowKeys = [];
                    newSelectedRowKeys = changableRowKeys.filter((key, index) => {
                        if (index % 2 !== 0) {
                            return true;
                        }
                        return false;
                    });
                    this.setState({ selectedRowKeys: newSelectedRowKeys });
                },
            }],
            onSelection: this.onSelection,
        };
        return (
            <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
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