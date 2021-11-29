import React, { Component}from 'react';
import {Redirect,Route,Switch} from 'react-router-dom'

import { Layout  } from 'antd';

import LeftNav from '../../component/left-nav'
import Header from '../../component/header'

import Home from '../home/home'
import Users from '../user'
import ChangDi from '../changdi'
import GongGao from '../gonggao'
import BaoXiu from '../baoxiu'
import LiuYan from '../liuyan'
import Zong from '../Zong'
import LanQiu from '../Lanqiu'
import YuMao from '../YuMao'
import PinPang from '../PinPang'

const {Footer, Sider, Content } = Layout;



export default class Admin extends Component {
    render() {
        return (
            <Layout style={{minHeight:'100%'}}>
                <Sider style={{width:'200px'}}>
                    <LeftNav />
                </Sider>
                <Layout>
                    <Header>HEADER</Header>
                    <Content style={{margin: 20, backgroundColor: '#fff'}}>
                        <Switch>
                            <Redirect from='/'exact to='/home' />
                            <Route path='/home' component={Home}/>
                            <Route path='/user' component={Users}/>
                            <Route path='/changdi' component={ChangDi}/>
                            <Route path='/gonggao' component={GongGao}/>
                            <Route path='/baoxiu' component={BaoXiu}/>
                            <Route path='/liuyan' component={LiuYan}/>
                            <Route path='/zong' component={Zong}/>
                            <Route path='/lanqiu' component={LanQiu}/>
                            <Route path='/yumao' component={YuMao}/>
                            <Route path='/pinpang' component={PinPang}/>
                        </Switch>
                    </Content>
                    <Footer style={{textAlign:'center',color:'#cccccc'}}>推荐使用谷歌浏览器，可以获得更佳页面操作体验</Footer>
                </Layout>
            </Layout>
        )
    }
}