import React, { Component }from 'react'
import { Table, 
  Space ,
  Card,Button,Form,Input,
  Modal,
  message} from 'antd';

import {reqChangs,reqChang,reqDeleteChang} from '../../api/index'
import ChangForm from './changForm'
import UpdateChang from './changUpdate'

export default class Changdi extends Component {

    state = {
        changdis: [],
        searchchangdi:[],
        isShow: false,
        isShow2: false,
    }


    componentWillMount() {
        this.getChangdi()
    }

    getChangdi = async () => {
        const result = await reqChangs()
        const changdis = result
        console.log(changdis)
        this.setState({changdis})
    }

    deleteChangdi = async (changdi)=> {
        const result = await reqDeleteChang(changdi.id)
        this.getChangdi()
        message.info(result)
    }
    
      // 修改操作
    showUpdate = async (changdi)=> {
        this.changdi = changdi // 保存 changdi 数据
        this.setState({isShow2: true})
        this.getChangdi()   
    }

    showAdd = async ()=> {
        this.changdi = null
        this.setState({isShow: true})
        this.getChangdi()
      }


      onFinish =  async (value) => {
        const id = value.id; 
        console.log(id)
        const result = await reqChang(id)
        console.log(result)
        var searchchangdi = result;
        this.setState({searchchangdi})
    
      }

    render(){

        const {changdis,searchchangdi,isShow,isShow2} = this.state
        const changdi = this.changdi || {}

        const data = [searchchangdi];

        const title = <Button type="primary" onClick={this.showAdd}>创建新场地</Button>

        const columns = [
            {
              title: 'ID',
              dataIndex: 'id' ,
              key: 'id'    
            },
            {
              title: 'Name',
              dataIndex: 'name',
              key: 'name',
              render: text => <a href="#">{text}</a>,
            },
            {
              title: 'JianJie',
              dataIndex: 'jianjie',
              key: 'jianjie',
            },
            {
              title: 'Action',
              key: 'action',
              render: (changdi) => (
                <Space size="middle">
                  <a href="#" onClick={() => this.showUpdate(changdi)}>修改</a>
                  <a href="#" onClick={() => this.deleteChangdi(changdi)}>删除</a>
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
            
                <Button type='primary' onClick={this.getChangdi}>点我刷新数据</Button>
                <Table columns={columns} dataSource={changdis} />
                <Modal title={changdi.id ? '修改场地' : '添加场地'} 
                  visible={isShow} 
                  onCancel={()=>{this.setState({isShow: false});this.getChangdi()}} 
                  footer={null}
                  >
                  <ChangForm
                    setForm={form => this.fomr = form}
                    changdi={changdi}
                  />
                </Modal>
                <Modal title={changdi.id ? '修改场地' : '添加场地'} 
                  visible={isShow2} 
                  onCancel={()=>{this.setState({isShow2: false});this.getChangdi()}}
                  footer={null}
                  >
                    <UpdateChang 
                      setForm={form => this.fomr = form}
                      changdi={changdi}>
                    </UpdateChang>
                </Modal>
            </Card>
        )
    }
}