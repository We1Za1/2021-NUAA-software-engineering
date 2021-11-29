import React, { Component }from 'react'
import { Table, 
  Space ,
  Card,Button,Form,Input,
  Modal,
  message} from 'antd';

import {reqBaos,reqBao,reqDeleteBao} from '../../api/index'
import BaoForm from './baoForm'
import UpdateBao from './baoUpdate'

export default class Baoxiu extends Component {

    state = {
        baoxius: [],
        searchreqBao:[],
        isShow: false,
        isShow2: false,
    }


    componentWillMount() {
        this.getBaoxiu()
    }

    getBaoxiu = async () => {
        const result = await reqBaos()
        const baoxius = result
        console.log(baoxius)
        this.setState({baoxius})
    }

    deleteBaoxiu = async (baoxiu)=> {
        const result = await reqDeleteBao(baoxiu.id)
        this.getBaoxiu()
        message.info(result)
    }
    
      // 修改操作
    showUpdate = async (baoxiu)=> {
        this.baoxiu = baoxiu // 保存 changdi 数据
        this.setState({isShow2: true})
        this.getBaoxiu()   
    }

    showAdd = async ()=> {
        this.baoxiu = null
        this.setState({isShow: true})
        this.getBaoxiu()
      }

    onFinish =  async (value) => {
      const id = value.id; 
      console.log(id)
      const result = await reqBao(id)
      console.log(result)
      var searchbaoxiu = result;
      this.setState({searchbaoxiu})
  
    }



    render(){

        const {baoxius,searchbaoxiu,isShow,isShow2} = this.state
        const baoxiu = this.baoxiu || {}

        const data = [searchbaoxiu]

        const title = <Button type="primary" onClick={this.showAdd}>创建新报修申请</Button>

/* 
   baoxiu:
      id,userID,name,content
*/

        const columns = [
            {
              title: 'ID',
              dataIndex: 'id' ,
              key: 'id'    
            },
            {
                title: 'UserID',
                dataIndex: 'userID' ,
                key: 'userID'    
              },
            {
              title: 'Name',
              dataIndex: 'name',
              key: 'name',
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
              render: (baoxiu) => (
                <Space size="middle">
                  <a href="#" onClick={() => this.showUpdate(baoxiu)}>修改</a>
                  <a href="#" onClick={() => this.deleteBaoxiu(baoxiu)}>删除</a>
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


                <Button type='primary' onClick={this.getBaoxiu}>点我刷新数据</Button>
                <Table columns={columns} dataSource={baoxius} />
                <Modal title={baoxiu.id ? '修改申请' : '添加申请'} 
                  visible={isShow} 
                  onCancel={()=>{this.setState({isShow: false});this.getBaoxiu()}} 
                  footer={null}
                  >
                  <BaoForm
                    setForm={form => this.fomr = form}
                    baoxiu={baoxiu}
                  />
                </Modal>
                <Modal title={baoxiu.id ? '修改申请' : '添加申请'} 
                  visible={isShow2} 
                  onCancel={()=>{this.setState({isShow2: false});this.getBaoxiu()}} 
                  footer={null}
                  >
                    <UpdateBao 
                      setForm={form => this.fomr = form}
                      baoxiu={baoxiu}>
                    </UpdateBao>
                </Modal>
            </Card>
        )
    }
}