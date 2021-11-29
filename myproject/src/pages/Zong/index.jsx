import React, { Component}from 'react';
import {Card,Col, Row,Table} from 'antd'
import {selectNew,selectNew_1,selectNew_2} from '../../api/index'


export default class Zong extends Component {

    state = {
        lanqiu:[],
        yumaoqiu: [],
        pinpangqiu: []
    }

    componentWillMount() {
        this.getShenqings()
    }

    getShenqings = async () => {
        const result = await selectNew()
        const result1 = await selectNew_1()
        const result2 = await selectNew_2()
        const lanqiu = result
        const yumaoqiu = result1
        const pinpangqiu = result2
        this.setState({lanqiu})
        this.setState({yumaoqiu})
        this.setState({pinpangqiu})
    }


    render(){

        const {lanqiu, yumaoqiu,pinpangqiu} = this.state

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
            }
        ]

        return (
            <div className="site-card-wrapper">
                <h1 style={{color:'lightblue',textAlign:'center'}}>所有未操作或被拒绝的申请</h1>
                <Row gutter={16}>
                    <Col span={24}>
                        <Card title="篮球申请" bordered={false}>
                            <Table columns={columns} dataSource={lanqiu}></Table>
                        </Card>
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col span={24}>
                        <Card title="羽毛球申请" bordered={false}>
                            <Table columns={columns} dataSource={yumaoqiu}></Table>
                        </Card>
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col span={24}>
                        <Card title="乒乓球申请" bordered={false}>
                        <Table columns={columns} dataSource={pinpangqiu}></Table>
                        </Card>
                    </Col>
                </Row>
                
            </div>
        )
    }
}