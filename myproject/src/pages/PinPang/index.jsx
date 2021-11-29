import React, { Component }from 'react'
import { Table, 
  Space ,
  Card,Button,Form,
  Modal,Input,
  message} from 'antd';

import {searchID_2,searchuserID_2,searchAll_2,deleteID_2,change_2,reject_2} from "../../api/index"
import PinForm from './pinForm'
import PinUpdate from './pinUpdate'

export default class PinQiu extends Component {
  state = {
    shenqings:[], // 用来存储申请列表
    searchshenqing:[],
    searchusers:[], //
    isShow: false, //控制对话框1是否出现
    isShow2: false, //控制对话框2是否出现
  }

  componentWillMount () {
    this.getShenqings()
  }


  getShenqings = async ()=>{
    // result 获取的数据是一个数组，每一个元素都是一个对象
    const result = await searchAll_2()
    const shenqings = result
    this.setState({shenqings})
    console.log(this.state.shenqings)
  }

  // 删除数据后重新查询用户数据
  deleteShenqing= async (shenqing)=> {
    const result = await deleteID_2(shenqing.id)
    this.getShenqings()
    message.info(result)
  }

  // 修改操作
  showUpdate = async (shenqing)=> {
    this.shenqing = shenqing // 保存 user 数据
    this.setState({isShow2: true})
    this.getShenqings()

  }

  // 增加操作
  showAdd = async ()=> {
    this.shenqing = null
    this.setState({isShow: true})
    this.getShenqings()
  }

  Allow = async (shenqing)=>{
      const result = await change_2(shenqing)
      message.info(result)
      this.getShenqings()
  }

  Reject = async (shenqing)=>{
      const result = await reject_2(shenqing)
      message.info(result)
      this.getShenqings()
  }

  onFinish =  async (value) => {
    const id = value.id; 
    console.log(id)
    const result = await searchID_2(id)
    console.log(result)
    var searchshenqing = result;
    this.setState({searchshenqing})

  }

  onFinish_1 = async (value) =>{
    var userID = value.userID;
    var result = await searchuserID_2(userID)
    console.log(result)
    var searchusers = result;
    this.setState({searchusers})
    console.log(searchusers)
    console.log(this.state.searchusers)
  }

  formRef = React.createRef();


  render() {

    const {shenqings,searchusers,searchshenqing ,isShow,isShow2} = this.state
    const shenqing = this.shenqing || {}

    const title = <Button type="primary" onClick={this.showAdd}>
                        创建申请
                  </Button>
                  

    const columns = [
      {
        title: 'ID',
        dataIndex: 'id' ,
        key: 'ID'    
      },
      {
        title: 'UserID',
        dataIndex: 'userID',
        key: 'userID',
        render: text => <a href="#" >{text}</a>,
      },
      {
        title: 'StartTime',
        dataIndex: 'startTime',
        key: 'startTime',
      },
      {
        title: 'EndTime',
        dataIndex: 'endTime',
        key: 'endTime',
      },
      {
        title: 'Cause',
        dataIndex: 'cause',
        key: 'cause',
      },
      {
        title: 'State',
        dataIndex: 'state',
        key: 'state',
      },
      {
        title: 'Action',
        key: 'action',
        render: (shenqing) => (
          <Space size="middle">
            <a href="#" onClick={() => this.showUpdate(shenqing)}>修改</a>
            <a href="#" onClick={() => this.Allow(shenqing)}>批准</a>
            <a href="#" onClick={() => this.Reject(shenqing)}>拒绝</a>
            <a href="#" onClick={() => this.deleteShenqing(shenqing)}>删除</a>
          </Space>
        ),
      },
    ];

    const data = [searchshenqing]

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

          <Form
           name="basic"
           labelCol={{ span: 0 }}
           wrapperCol={{ span: 15 }}
           onFinish={this.onFinish_1}
           onFinishFailed={this.onFinishFailed}
           >
             <Form.Item
                label="userID"
                name="userID">
                <Input placeholder="输入想要查询的userID" style ={{width:200+"px"}}></Input>
             </Form.Item>
             <Form.Item>
                <Button  type='primary' htmlType="submit" style={{marginLeft:10+"px"}} >点我查询</Button>
            </Form.Item>
          </Form>
          <Table columns={columns} dataSource={searchusers} />

          <Button type='primary' onClick={this.getShenqings}>点我刷新数据</Button>
          <Table columns={columns} dataSource={shenqings} />
          <Modal title={shenqing.id ? '修改申请' : '添加申请'} 
            visible={isShow} 
            onCancel={()=>{this.setState({isShow: false});this.getShenqings()}} 
            footer={null}
            >
            <PinForm
              setForm={form => this.fomr = form}
              shenqing={shenqing}
            />
          </Modal>
          <Modal title={shenqing.id ? '修改申请' : '添加申请'} 
            visible={isShow2} 
            onCancel={()=>{this.setState({isShow2: false});this.getShenqings()}} 
            footer={null}
            >
            <PinUpdate 
                setForm={form => this.fomr = form}
                shenqing={shenqing}>
            </PinUpdate>
          </Modal>
      </Card>
    )
  }
}