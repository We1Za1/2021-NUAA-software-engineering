import React, {Component} from 'react'
import {
    Form,
    Input,
    Button,
    message,
  } from 'antd'

import {reqAddGong} from '../../api/index'


export default class GongForm extends Component {

    state = {id:0}


    formRef = React.createRef();

    onFinish =  async (value) => {
        const gonggao = value; // 增加公告
        console.log(value)

        const result = await reqAddGong(gonggao)
        console.log(result) 
        message.info("操作成功")

    }

    onFinishFailed = (errorInfo) => {
        console.log("失败啦-------------failed",errorInfo)
    }

    render() {

        const {gonggao} = this.props;

/* 
   gonggao:
      id,time,title,content
*/
        
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
                rules={[{ required: true, message: 'Please input 公告 id!' }]}
            >
                <Input />
            </Form.Item>
                
            <Form.Item
              label="time"
              name="time"
              rules={[{ required: true, message: 'Please input 公告 time!' }]}
            >
                <Input />
            </Form.Item>
      
            <Form.Item
              label="title"
              name="title"
              rules={[{ required: true, message: 'Please input 公告 jianjie!' }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="content"
              name="content"
              rules={[{ required: true, message: 'Please input 公告 content!' }]}
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
