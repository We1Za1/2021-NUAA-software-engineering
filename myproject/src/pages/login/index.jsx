import React,{Component} from 'react';
import {Button,Input,Form,message} from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

import {reqLogin} from '../../api'


import  'antd/dist/antd.css'
import './login.css'

export default class Login extends Component {

    formRef = React.createRef()


    onFinish = async (value) => {
        
        const {id, password} = value
        const result = await reqLogin(id)
        console.log(id)
        console.log(result)
        if(password == result.password){
            this.props.history.replace('/home')
        } else {
            message.error('输入错误')
        }
    }

    onFinishFailed = (errorInfo) => {
        console.log("失败啦-------------failed",errorInfo)
    }

    validatePwd = (rule, value, callback) => {
        // console.log('validatePwd()', rule, value)
        if(!value) {
          callback('密码必须输入')
        } else if (value.length<4) {
          callback('密码长度不能小于4位')
        } else if (value.length>12) {
          callback('密码长度不能大于12位')
        } else if (!/^[a-zA-Z0-9_]+$/.test(value)) {
          callback('密码必须是英文、数字或下划线组成')
        } else {
          callback() // 验证通过
        }
        // callback('xxxx') // 验证失败, 并指定提示的文本
      }

    render() {
        return (
            <div className="login">
                <header className="login-header">
                    <h1>南京航空航天大学体育场所预约</h1>
                </header>
                <section className="login-content">
                    <h2>用户登录</h2>

                    <Form  className="login-form" onFinish={this.onFinish} onFinishFailed={this.onFinishFailed}>
                        <Form.Item name="id" rules={[
                            { required: true, whitespace: true, message: 'ID必须输入' },
                            { min: 1, message: 'id至少1位' },
                            { max: 12, message: 'id最多12位' },
                            { pattern: /^[a-zA-Z0-9_]+$/, message: 'id必须是数字' },
                        ]} >
                            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="id" />
                        </Form.Item>

                        <Form.Item name="password" rules={[{validator: this.validatePwd }]} >
                            <Input prefix={<LockOutlined className="site-form-item-icon" />} type="password" placeholder="密码" />
                        </Form.Item>

                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                登录
                            </Button>
                        </Form.Item>
                    </Form>
                </section>
            </div>
        )
    }
}