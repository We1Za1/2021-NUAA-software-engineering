import React, { Component }from 'react'
import { Table, 
  Input, 
  Space ,
  Card,Button,Form,
  Modal,
  message} from 'antd';

import {reqGongs,reqGong,reqDeleteGong} from "../../api/index"

import GongForm from './gongForm'
import UpdateGong from './gongUpdate'

export default class Gonggao extends Component {
  state = {
    gonggaos:[], // 用来存储公告列表
    searchgonggao:[],
    isShow: false, //控制对话框1是否出现
    isShow2: false, //控制对话框2是否出现
  }

  componentWillMount () {
    this.getGonggao()
  }

  getGonggao = async ()=>{
    // result 获取的数据是一个数组，每一个元素都是一个对象
    const result = await reqGongs()
    const gonggaos = result
    this.setState({gonggaos})
    console.log(this.state.gonggaos)
  }

  // 删除数据后重新查询场地数据
  deleteGonggao = async (gonggao)=> {
    const result = await reqDeleteGong(gonggao.id)
    this.getGonggao()
    message.info(result)
  }

  // 修改操作
  showUpdate = async (gonggao)=> {
    this.gonggao = gonggao // 保存 user 数据
    this.setState({isShow2: true})
    this.getGonggao()

  }

  // 增加操作
  showAdd = async ()=> {
    this.gonggao = null
    this.setState({isShow: true})
    this.getGonggao()
  }

  onFinish =  async (value) => {
    const id = value.id; 
    console.log(id)
    const result = await reqGong(id)
    console.log(result)
    var searchgonggao = result;
    this.setState({searchgonggao})

  }



  render() {

    const {gonggaos,searchgonggao,isShow,isShow2} = this.state
    const gonggao = this.gonggao || {}

    const data = [searchgonggao]

    const title = <Button type="primary" onClick={this.showAdd}>
                        发布公告
                  </Button>
    
/* 
   gonggao:
      id,time,title,content
*/

    const columns = [
      {
        title: 'ID',
        dataIndex: 'id' ,
        key: 'id'    
      },
      {
        title: 'Time',
        dataIndex: 'time' ,
        key: 'time'    
      },
      {
        title: 'Title',
        dataIndex: 'title',
        key: 'title',
        render: text => <a href="#">{text}</a>,
      },
      {
        title: 'Content',
        dataIndex: 'content',
        key: 'content',
      },
      {
        title: 'Action',
        key: 'action',
        render: (gonggao) => (
          <Space size="middle">
            <a href="#" onClick={() => this.showUpdate(gonggao)}>修改</a>
            <a href="#" onClick={() => this.deleteGonggao(gonggao)}>删除</a>
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
      
          <Button type='primary' onClick={this.getGonggao}>点我刷新数据</Button>         
          <Table columns={columns} dataSource={gonggaos} />
          <Modal title={gonggao.id ? '修改公告' : '添加公告'} 
            visible={isShow} 
            onCancel={()=>{this.setState({isShow: false});this.getGonggao()}} 
            footer={null}
            >
            <GongForm
              setForm={form => this.fomr = form}
              gonggao={gonggao}
            />
          </Modal>
          <Modal title={gonggao.id ? '修改公告' : '添加公告'} 
            visible={isShow2} 
            onCancel={()=>{this.setState({isShow2: false});this.getGonggao()}} 
            footer={null}
            >
              <UpdateGong
                setForm={form => this.fomr = form}
                gonggao={gonggao}>
              </UpdateGong>
          </Modal>
      </Card>
    )
  }
}