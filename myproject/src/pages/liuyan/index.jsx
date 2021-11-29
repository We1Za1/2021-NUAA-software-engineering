import React, { Component }from 'react'
import { Table, 
  Space ,
  Card,Button,Form,Input,
  Modal,
  message} from 'antd';

import {reqLius,searchuserID_0,reqLiu,reqDeleteLiu} from '../../api/index'
import LiuForm from './liuForm'
import UpdateLiu from './liuUpdate'

export default class Changdi extends Component {

    state = {
        liuyans: [],
        searchliuyan:[],
        searchusers:[],
        isShow: false,
        isShow2: false,
    }


    componentWillMount() {
        this.getLiuyan()
    }

    getLiuyan = async () => {
        const result = await reqLius()
        const liuyans = result
        console.log(liuyans)
        this.setState({liuyans})
    }

    deleteLiuyan = async (liuyan)=> {
        const result = await reqDeleteLiu(liuyan.id)
        this.getLiuyan()
        message.info(result)
    }
    
      // 修改操作
    showUpdate = async (liuyan)=> {
        this.liuyan = liuyan // 保存 changdi 数据
        this.setState({isShow2: true})
        this.getLiuyan()   
    }

    showAdd = async ()=> {
        this.liuyan = null
        this.setState({isShow: true})
        this.getLiuyan()
      }

    onFinish =  async (value) => {
        const id = value.id; 
        console.log(id)
        const result = await reqLiu(id)
        console.log(result)
        var searchliuyan = result;
        this.setState({searchliuyan})
    
     }

    onFinish_1 = async (value) => {
      var userID = value.userID;
      var result = await searchuserID_0(userID)
      console.log(result)
      var searchusers = result
      this.setState({searchusers})
      console.log(searchusers)
      console.log(this.state.searchusers)

    }

    formRef = React.createRef();

    render(){

        const {liuyans,searchusers,searchliuyan,isShow,isShow2} = this.state
        const liuyan = this.liuyan || {}

        const data = [searchliuyan];

        const title = <Button type="primary" onClick={this.showAdd}>创建新留言</Button>

        const columns = [
            {
              title: 'ID',
              dataIndex: 'id' ,
              key: 'id'    
            },
            {
              title: 'UserID',
              dataIndex: 'userID',
              key: 'userID',
              render: text => <a href="#">{text}</a>,
            },
            {
              title: 'Comment',
              dataIndex: 'comment',
              key: 'comment',
            },
            {
              title: 'Action',
              key: 'action',
              render: (liuyan) => (
                <Space size="middle">
                  <a href="#" onClick={() => this.showUpdate(liuyan)}>修改</a>
                  <a href="#" onClick={() => this.deleteLiuyan(liuyan)}>删除</a>
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

              <Button type='primary' onClick={this.getLiuyan}>点我刷新数据</Button>
              <Table columns={columns} dataSource={liuyans} />
              <Modal title={liuyan.id ? '修改留言' : '添加留言'} 
                visible={isShow} 
                onCancel={()=>{this.setState({isShow: false});this.getLiuyan()}} 
                footer={null}
                >
                <LiuForm
                  setForm={form => this.fomr = form}
                  liuyan={liuyan}
                />
              </Modal>

              <Modal title={liuyan.id ? '修改留言' : '添加留言'} 
                visible={isShow2} 
                onCancel={()=>{this.setState({isShow2: false});this.getLiuyan()}}
                footer={null}
                >
                  <UpdateLiu 
                    setForm={form => this.fomr = form}
                    liuyan={liuyan}>
                  </UpdateLiu>
              </Modal>
            </Card>
        )
    }
}