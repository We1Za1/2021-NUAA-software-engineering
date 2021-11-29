import React, {Component} from 'react'
import {
    Form,
    Input,
    Button,
    message,
  } from 'antd'

import {reqUpdateUser} from '../../api/index'


export default class UserForm extends Component {

    state = {id:0}


    formRef = React.createRef();

    onFinish =  async (value,id) => {
        console.log(value)
        const user = value; // 增加用户

        const result = await reqUpdateUser(user)
        console.log(result) 
        message.info(result)

    }

    onFinishFailed = (errorInfo) => {
        console.log("失败啦-------------failed",errorInfo)
    }

    render() {

        const {user} = this.props;
        
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
            >
                <Input placeholder= {user.id} />
            </Form.Item>
                
            <Form.Item
              label="name"
              name="name"
              rules={[{ required: true, message: 'Please input your name!' }]}
            >
                <Input placeholder= {user.name}/>
            </Form.Item>
      
            <Form.Item
              label="password"
              name="password"
              rules={[{ required: true, message: 'Please input your password!' }]}
            >
              <Input.Password placeholder= {user.password}/>
            </Form.Item>

            <Form.Item
              label="role"
              name="role"
              rules={[{ required: true, message: 'Please input your role!' }]}
            >
               <Input placeholder= {user.role} />
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
