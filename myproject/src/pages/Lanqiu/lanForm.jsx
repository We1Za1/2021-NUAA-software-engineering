import React, {Component} from 'react'
import {
    Form,
    Input,
    Button,
    message,
  } from 'antd'

import {Add} from '../../api/index'


export default class LanForm extends Component {

    state = {id:0}


    formRef = React.createRef();

    onFinish =  async (value) => {
        const shenqing = value; // 增加申请
        const result = await Add(shenqing)
        console.log(result) 
        message.info("操作成功")

    }

    onFinishFailed = (errorInfo) => {
        console.log("失败啦-------------failed",errorInfo)
    }

    render() {

        const {shenqing} = this.props;
        const id = shenqing.id;
        
        return (
        <Form
            name="basic"
            labelCol={{ span: 6 }}
            wrapperCol={{ span: 15 }}
            onFinish={this.onFinish}
            onFinishFailed={this.onFinishFailed}
        >
             
            <Form.Item
                label="id"
                name="id"
                rules={[{ required: true, message: 'Please input 申请 id!' }]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="userID"
                name="userID"
                rules={[{ required: true, message: 'Please input 申请人 id!' }]}
            >
                <Input />
            </Form.Item>
                
            <Form.Item
              label="startTime"
              name="startTime"
              rules={[{ required: true, message: 'Please input your startTime!' }]}
            >
                <Input />
            </Form.Item>

            <Form.Item
              label="endTime"
              name="endTime"
              rules={[{ required: true, message: 'Please input your endTime!' }]}
            >
                <Input />
            </Form.Item>

            <Form.Item
              label="cause"
              name="cause"
              rules={[{ required: true, message: 'Please input your cause!' }]}
            >
                <Input />
            </Form.Item>

          <Form.Item>
                    <Button type="primary" htmlType="submit" style={{marginLeft:200+'px'}}  >
                        提交
                    </Button>
            </Form.Item>
          </Form>
        )
    }
}
