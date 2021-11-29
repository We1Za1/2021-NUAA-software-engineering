import React, {Component} from 'react'
import {
    Form,
    Input,
    Button,
    message,
  } from 'antd'

import {reqUpdateLiu} from '../../api/index'


export default class ChangForm extends Component {

    state = {id:0}


    formRef = React.createRef();

    onFinish =  async (value) => {
        console.log(value)
        const liuyan = value; // 增加场地

        const result = await reqUpdateLiu(liuyan)
        console.log(result) 
        message.info(result)

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
                <Input placeholder= {liuyan.id} />
            </Form.Item>
                
            <Form.Item
              label="userID"
              name="userID"
              rules={[{ required: true, message: 'Please input 留言 userID!' }]}
            >
                <Input placeholder={liuyan.userID}/>
            </Form.Item>
      
            <Form.Item
              label="comment"
              name="comment"
              rules={[{ required: true, message: 'Please input 留言 comment!' }]}
            >
              <Input placeholder= {liuyan.comment}/>
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
