import React, {Component} from 'react'
import {
    Form,
    Input,
    Button,
    message,
  } from 'antd'

import {reqAddLiu} from '../../api/index'


export default class ChangForm extends Component {

    state = {id:0}


    formRef = React.createRef();

    onFinish =  async (value) => {
        const liuyan = value; // 增加场地

        const result = await reqAddLiu(liuyan)
        console.log(result) 
        message.info("操作成功")

    }

    onFinishFailed = (errorInfo) => {
        console.log("失败啦-------------failed",errorInfo)
    }

    render() {

        const {liuyan} = this.props;
        
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
                rules={[{ required: true, message: 'Please input 留言 id!' }]}
            >
                <Input />
            </Form.Item>
                
            <Form.Item
              label="userID"
              name="userID"
              rules={[{ required: true, message: 'Please input 留言 userID!' }]}
            >
                <Input />
            </Form.Item>
      
            <Form.Item
              label="comment"
              name="comment"
              rules={[{ required: true, message: 'Please input 留言 comment!' }]}
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
