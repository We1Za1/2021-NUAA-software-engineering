import React, {Component} from 'react'
import {
    Form,
    Input,
    Button,
    message,
  } from 'antd'

import {reqUpdateGong} from '../../api/index'


export default class GongForm extends Component {

    state = {id:0}


    formRef = React.createRef();

    onFinish =  async (value) => {
        console.log(value)
        const gonggao = value; // 更改公告

        const result = await reqUpdateGong(gonggao)
        console.log(result) 
        message.info(result)

    }

    onFinishFailed = (errorInfo) => {
        console.log("失败啦-------------failed",errorInfo)
    }

/* 
   gonggao:
      id,time,title,content
*/

    render() {

        const {gonggao} = this.props;
        
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
                <Input placeholder= {gonggao.id} />
            </Form.Item>
                
            <Form.Item
              label="time"
              name="time"
              rules={[{ required: true, message: 'Please input 公告 time!' }]}
            >
                <Input placeholder={gonggao.time}/>
            </Form.Item>
      
            <Form.Item
              label="title"
              name="title"
              rules={[{ required: true, message: 'Please input 公告 title!' }]}
            >
              <Input placeholder= {gonggao.title}/>
            </Form.Item>

            <Form.Item
              label="content"
              name="content"
              rules={[{ required: true, message: 'Please input 公告 content!' }]}
            >
              <Input defaultValue={gonggao.content}/>
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
