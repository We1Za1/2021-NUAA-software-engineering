import React, {Component} from 'react'
import {
    Form,
    Input,
    Button,
    message,
  } from 'antd'

import {update_1} from '../../api/index'


export default class UserForm extends Component {

    state = {id:0}


    formRef = React.createRef();

    onFinish =  async (value) => {
        const shenqing = value; 
        const result = await update_1(shenqing)
        console.log(result) 
        message.info(result)

    }

    onFinishFailed = (errorInfo) => {
        console.log("失败啦-------------failed",errorInfo)
    }

    render() {

        const {shenqing} = this.props;
        
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
                <Input placeholder= {shenqing.id} />
            </Form.Item>
                
            <Form.Item
              label="userID"
              name="userID"
              rules={[{ required: true, message: 'Please input your userID!' }]}
            >
                <Input placeholder= {shenqing.name}/>
            </Form.Item>
      
            <Form.Item
              label="startTime"
              name="startTime"
              rules={[{ required: true, message: 'Please input your startTime!' }]}
            >
                <Input placeholder={shenqing.startTime}/>
            </Form.Item>

            <Form.Item
              label="endTime"
              name="endTime"
              rules={[{ required: true, message: 'Please input your endTime!' }]}
            >
                <Input placeholder={shenqing.endTime}/>
            </Form.Item>

            <Form.Item
              label="cause"
              name="cause"
              rules={[{ required: true, message: 'Please input your cause!' }]}
            >
                <Input defaultValue={shenqing.cause}/>
            </Form.Item>

            
            <Form.Item>
                <Button type="primary" htmlType="submit" style={{marginLeft:200+'px'}}>
                    修改
                </Button>
            </Form.Item>
             

            
          </Form>
        )
    }
}
