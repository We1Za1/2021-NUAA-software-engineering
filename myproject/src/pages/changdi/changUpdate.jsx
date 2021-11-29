import React, {Component} from 'react'
import {
    Form,
    Input,
    Button,
    message,
  } from 'antd'

import {reqUpdateChang} from '../../api/index'


export default class ChangForm extends Component {

    state = {id:0}


    formRef = React.createRef();

    onFinish =  async (value) => {
        console.log(value)
        const chang = value; // 增加场地

        const result = await reqUpdateChang(chang)
        console.log(result) 
        message.info(result)

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
                <Input placeholder= {changdi.id} />
            </Form.Item>
                
            <Form.Item
              label="name"
              name="name"
              rules={[{ required: true, message: 'Please input 场地 name!' }]}
            >
                <Input placeholder={changdi.name}/>
            </Form.Item>
      
            <Form.Item
              label="jianjie"
              name="jianjie"
              rules={[{ required: true, message: 'Please input 场地 password!' }]}
            >
              <Input placeholder= {changdi.jianjie}/>
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
