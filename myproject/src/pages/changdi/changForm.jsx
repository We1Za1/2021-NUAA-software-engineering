import React, {Component} from 'react'
import {
    Form,
    Input,
    Button,
    message,
  } from 'antd'

import {reqAddChang} from '../../api/index'


export default class ChangForm extends Component {

    state = {id:0}


    formRef = React.createRef();

    onFinish =  async (value) => {
        const chang = value; // 增加场地

        const result = await reqAddChang(chang)
        console.log(result) 
        message.info("操作成功")

    }

    onFinishFailed = (errorInfo) => {
        console.log("失败啦-------------failed",errorInfo)
    }

    render() {

        const {changdi} = this.props;
        
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
                rules={[{ required: true, message: 'Please input 场地 id!' }]}
            >
                <Input />
            </Form.Item>
                
            <Form.Item
              label="name"
              name="name"
              rules={[{ required: true, message: 'Please input 场地 name!' }]}
            >
                <Input />
            </Form.Item>
      
            <Form.Item
              label="jianjie"
              name="jianjie"
              rules={[{ required: true, message: 'Please input 场地 jianjie!' }]}
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
