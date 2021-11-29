import React, {Component} from 'react'
import {
    Form,
    Input,
    Button,
    message,
  } from 'antd'

import {reqAddUser} from '../../api/index'


export default class UserForm extends Component {

    state = {id:0}


    formRef = React.createRef();

    onFinish =  async (value,id) => {
        console.log(id)
        const user = value; // 增加用户

        const result = await reqAddUser(user)
        console.log(result) 
        message.info("操作成功")

    }

    onFinishFailed = (errorInfo) => {
        console.log("失败啦-------------failed",errorInfo)
    }

    render() {

        const {user} = this.props;
        const id = user.id;
        
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
                rules={[{ required: true, message: 'Please input your id!' }]}
            >
            <Input />
            </Form.Item>
                
            <Form.Item
              label="name"
              name="name"
              rules={[{ required: true, message: 'Please input your name!' }]}
            >
                <Input />
            </Form.Item>
      
            <Form.Item
              label="password"
              name="password"
              rules={[{ required: true, message: 'Please input your password!' }]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              label="role"
              name="role"
              rules={[{ required: true, message: 'Please input your role!' }]}
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
