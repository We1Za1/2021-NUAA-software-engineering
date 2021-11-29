import React, { Component }from 'react'
import { Table, 
  Space ,
  Card,Button,Form,Input,
  Modal,
  message} from 'antd';

import {reqUsers,reqUser,reqDeleteUser} from "../../api/index"
import UserForm from './userForm'
import UpdateUser from './userUpdate'

export default class users extends Component {
  state = {
    users:[], // 用来存储用户列表
    searchUser: [],
    isShow: false, //控制对话框1是否出现
    isShow2: false, //控制对话框2是否出现
  }

  componentWillMount () {
    this.getUsers()
  }


  getUsers = async ()=>{
    // result 获取的数据是一个数组，每一个元素都是一个对象
    const result = await reqUsers()
    const users = result
    this.setState({users})
    console.log(this.state.users)
  }



  // 删除数据后重新查询用户数据
  deleteUser = async (user)=> {
    const result = await reqDeleteUser(user.id)
    this.getUsers()
    message.info(result)
  }

  // 修改操作
  showUpdate = async (user)=> {
    this.user = user // 保存 user 数据
    this.setState({isShow2: true})
    this.getUsers()

  }

  // 增加操作
  showAdd = async ()=> {
    this.user = null
    this.setState({isShow: true})
    this.getUsers()
  }

  onFinish =  async (value) => {
    const id = value.id; 
    console.log(id)
    const result = await reqUser(id)
    console.log(result)
    var searchUser = result;
    this.setState({searchUser})

  }



  render() {

    const {users,searchUser ,isShow,isShow2} = this.state
    const user = this.user || {}

    const title = <Button type="primary" onClick={this.showAdd}>
                        创建用户
                  </Button>
                  
    const data = [searchUser]

    const columns = [
      {
        title: 'ID',
        dataIndex: 'id' ,
        key: 'ID'    
      },
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render: text => <a href="#" >{text}</a>,
      },
      {
        title: 'Password',
        dataIndex: 'password',
        key: 'password',
      },
      {
        title: 'Role',
        dataIndex: 'role',
        key: 'role',
      },
      {
        title: 'Action',
        key: 'action',
        render: (user) => (
          <Space size="middle">
            <a href="#" onClick={() => this.showUpdate(user)}>修改</a>
            <a href="#" onClick={() => this.deleteUser(user)}>删除</a>
          </Space>
        ),
      },
    ];

    return (
      <Card title={title}>


          <Form
           name="basic"
           labelCol={{ span: 0 }}
           wrapperCol={{ span: 15 }}
           onFinish={this.onFinish}
           onFinishFailed={this.onFinishFailed}
           >
             <Form.Item
                label="id"
                name="id">
                <Input placeholder="输入想要查询的id" style ={{width:200+"px"}}></Input>
             </Form.Item>
             <Form.Item>
                <Button  type='primary' htmlType="submit" style={{marginLeft:10+"px"}} >点我查询</Button>
            </Form.Item>
          </Form>

          <Table columns={columns} dataSource={data} />
          
          <Button type='primary' onClick={this.getUsers}>点我刷新数据</Button>
          <Table columns={columns} dataSource={users} />
          <Modal title={user.id ? '修改用户' : '添加用户'} 
            visible={isShow} 
            onCancel={()=>{this.setState({isShow: false});this.getUsers()}} 
            footer={null}
            >
            <UserForm
              setForm={form => this.fomr = form}
              user={user}
            />
          </Modal>
          <Modal title={user.id ? '修改用户' : '添加用户'} 
            visible={isShow2} 
            onCancel={()=>{this.setState({isShow2: false});this.getUsers()}} 
            footer={null}
            >
              <UpdateUser 
                setForm={form => this.fomr = form}
                user={user}>
              </UpdateUser>
          </Modal>
      </Card>
    )
  }
}