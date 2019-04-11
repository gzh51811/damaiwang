import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Upload, Icon, Modal, Form, Input, Tooltip, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete, } from 'antd';

// const { Option } = Select;
class RegistrationForm extends Component {
    state = {
        confirmDirty: false,
        autoCompleteResult: [],
    }

    normFile = (e) => {
        console.log('Upload event:', e);
        if (Array.isArray(e)) {
            return e;
        }
        return e && e.fileList;
    }


    //提交事件
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            } else {
                this.setState({
                    autoCompleteResult: [],
                })
            }
        });
    }
    validateToNextPassword = (rule, value, callback) => {
        const form = this.props.form;
        if (value && this.state.confirmDirty) {
            form.validateFields(['confirm'], { force: true });
        }
        callback();
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        // const { autoCompleteResult } = this.state;
        //样式设置
        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 8 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 10 },
            },
        };
        const tailFormItemLayout = {
            wrapperCol: {
                xs: {
                    span: 24,
                    offset: 0,
                },
                sm: {
                    span: 16,
                    offset: 8,
                },
            },
        };
        return (
            <div>
                <Form  {...formItemLayout} onSubmit={this.handleSubmit}>
                    {/* 上传图片 */}
                    <Form.Item
                        label="Upload"
                        extra=""
                    >
                        {getFieldDecorator('upload', {
                            valuePropName: 'fileList',
                            getValueFromEvent: this.normFile,
                        })(
                            <Upload name="logo" listType="picture">
                                <Button>
                                    <Icon type="upload" /> Click to upload
                                </Button>
                            </Upload>
                        )}
                    </Form.Item>
                    {/* 内容部分 */}
                    <Form.Item label="name">
                        <Input id="name" placeholder="Name" />
                    </Form.Item>
                    <Form.Item label="showTime">
                        <Input id="showTime" placeholder="showTime" />
                    </Form.Item>
                    <Form.Item label="venue">
                        <Input id="venue" placeholder="venue" />
                    </Form.Item>
                    <Form.Item label="venueCity">
                        <Input id="venueCity" placeholder="venueCity" />
                    </Form.Item>
                    <Form.Item label="PriceStr">
                        <Input id="PriceStr" placeholder="PriceStr" />
                    </Form.Item>
                    <Form.Item label="categoryName">
                        <Input id="categoryName" placeholder="categoryNam" />
                    </Form.Item>
                    <Form.Item label="subname">
                        <Input id="subname" placeholder="subname" />
                    </Form.Item>
                    <Form.Item {...tailFormItemLayout}>
                        <Button type="primary" htmlType="submit">Register</Button>
                    </Form.Item>
                </Form>
            </div>
        );
    }
}
const WrappedRegistrationForm = Form.create({ name: "register" })(
    RegistrationForm
);

export default connect(
    (state) => {
        // console.log(state)
        return state
    },
    (dispatch) => {
        return {

        }
    }
)(WrappedRegistrationForm);