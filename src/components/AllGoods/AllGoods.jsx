import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Table, Input, InputNumber, Popconfirm, Form, } from 'antd';
import './allgoods.css'

const FormItem = Form.Item;
const EditableContext = React.createContext();

class EditableCell extends React.Component {
    getInput = () => {
        if (this.props.inputType === 'number') {
            return <InputNumber />;
        }
        return <Input />;
    };

    render() {
        const {
            editing,
            dataIndex,
            title,
            inputType,
            record,
            index,
            ...restProps
        } = this.props;
        return (
            <EditableContext.Consumer>
                {(form) => {
                    const { getFieldDecorator } = form;
                    return (
                        <td {...restProps}>
                            {editing ? (
                                <FormItem style={{ margin: 0 }}>
                                    {getFieldDecorator(dataIndex, {
                                        rules: [{
                                            required: true,
                                            message: `Please Input ${title}!`,
                                        }],
                                        initialValue: record[dataIndex],
                                    })(this.getInput())}
                                </FormItem>
                            ) : restProps.children}
                        </td>
                    );
                }}
            </EditableContext.Consumer>
        );
    }
}

class EditableTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
       
        this.columns = [
            {
                title: 'verticalPic',
                dataIndex: 'verticalPic',
                width: '10%',
                editable: false,
            },
            {
                title: 'Name',
                dataIndex: 'Name',
                width: '20%',
                editable: true,
            },
            {
                title: 'showTime',
                dataIndex: 'showTime',
                width: '10%',
                editable: true,
            },
            {
                title: 'venue',
                dataIndex: 'venue',
                width: '10%',
                editable: true,
            }, {
                title: 'venueCity',
                dataIndex: 'venueCity',
                width: '10%',
                editable: true,
            }, {
                title: 'PriceStr',
                dataIndex: 'PriceStr',
                width: '10%',
                editable: true,
            }, {
                title: 'categoryName',
                dataIndex: 'categoryName',
                width: '11.5%',
                editable: true,
            }, {
                title: "subname",
                dataIndex: "subname",
                width: '10%',
                editable: true,
            }, {
                title: 'operation',
                dataIndex: 'operation',
                render: (text, record) => {
                    const { editingKey } = this.state;
                    const editable = this.isEditing(record);
                    return (
                        <div>
                            {editable ? (
                                <span>
                                    <EditableContext.Consumer>
                                        {form => (
                                            <a
                                                href="javascript:;"
                                                onClick={() => this.save(form, record.key)}
                                                style={{ marginRight: 8 }}
                                            >
                                                Save
                      </a>
                                        )}
                                    </EditableContext.Consumer>
                                    <Popconfirm
                                        title="Sure to cancel?"
                                        onConfirm={() => this.cancel(record.key)}
                                    >
                                        <a>Cancel</a>
                                    </Popconfirm>
                                </span>
                            ) : (
                                    <a disabled={editingKey !== ''} onClick={() => this.edit(record.key)}>Edit</a>
                                )}
                        </div>
                    );
                },
            },
        ];
    }
    getData() {
        fetch(` http://localhost:3002/setting/all`, {
            method: "GET"
        }).then(res => res.json())
            .then(msg => {
                console.log(msg.info)
                this.setState({
                    data: msg.info.map(function (item, index) {
                        return ({
                            key: index,
                            verticalPic: <img className="img" src={item.verticalPic} />,
                            Name: item.name,
                            showTime: item.showtime,
                            venue: item.venue,
                            venueCity: item.venuecity,
                            PriceStr: item.price_str,
                            categoryName: item.categoryname,
                            subname: item.subcategoryname
                        })
                    })
                })
            })
            .catch(e => console.log('错误：', e))
    }
    componentWillMount() {
        this.getData()
    }

    isEditing = record => record.key === this.state.editingKey;

    cancel = () => {
        this.setState({ editingKey: '' });
    };

    save(form, key) {
        form.validateFields((error, row) => {
            if (error) {
                return;
            }
            const newData = [...this.state.data];
            const index = newData.findIndex(item => key === item.key);
            if (index > -1) {
                const item = newData[index];
                newData.splice(index, 1, {
                    ...item,
                    ...row,
                });
                this.setState({ data: newData, editingKey: '' });
            } else {
                newData.push(row);
                this.setState({ data: newData, editingKey: '' });
            }
        });
    }

    edit(key) {
        this.setState({ editingKey: key });
    }

    render() {
        const components = {
            body: {
                cell: EditableCell,
            },
        };

        const columns = this.columns.map((col) => {
            if (!col.editable) {
                return col;
            }
            return {
                ...col,
                onCell: record => ({
                    record,
                    inputType: col.dataIndex,
                    dataIndex: col.dataIndex,
                    title: col.title,
                    editing: this.isEditing(record),
                }),
            };
        });

        return (
            <EditableContext.Provider value={this.props.form}>
                <Table
                pagination={{ pageSize: 50 }} scroll={{ y: 600 }}
                    components={components}
                    bordered
                    dataSource={this.state.data}
                    columns={columns}
                    rowClassName="editable-row"
                    pagination={{
                        onChange: this.cancel,
                    }}
                />
            </EditableContext.Provider>
        );
    }
}

const EditableFormTable = Form.create()(EditableTable);


export default connect(
    (state) => {
        // console.log(state)
        return state
    },
    (dispatch) => {
        return {

        }
    }
)(EditableFormTable);