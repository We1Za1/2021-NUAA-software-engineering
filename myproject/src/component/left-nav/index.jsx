import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import { Menu} from 'antd';
import {
    HomeOutlined,
    UserOutlined,
    UnorderedListOutlined,
    ToolOutlined,
    IdcardOutlined,
    BarChartOutlined,
    DribbbleOutlined,
    SlidersOutlined,
    ZoomInOutlined,
    FireOutlined
  } from '@ant-design/icons';

import "./index.css"

const {SubMenu} = Menu;




export default class LeftNav extends Component {
    render() {
        return (
        <Menu
            style={{ width: 256 }}
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            mode="inline"
            className="left-nav"
        >
            <Link to='/home' className="left-nav-header">
                <h1>体育场所管理中心</h1>
            </Link>

            <Menu.Item key="9" icon={<HomeOutlined />}>
                <Link to='/home'>
                    <span>首页</span>
                </Link>
            </Menu.Item>
 
            <Menu.Item key="1" icon={<UnorderedListOutlined />}>
                    <Link to='/zhongxin'>
                        <span>管理中心</span>
                    </Link>
            </Menu.Item>

            <Menu.Item key="2" icon={<ToolOutlined />}>
                <Link to='/changdi'>
                        <span>场地管理</span>
                    </Link>
            </Menu.Item>
            

            <Menu.Item key="3" icon={<IdcardOutlined />}>
                <Link to='/gonggao'>
                    <span>公告管理</span>
                </Link>
            </Menu.Item>

            <Menu.Item key="4" icon={<IdcardOutlined /> }>
                <Link to='/liuyan'>
                    <span>留言管理</span>
                </Link>
            </Menu.Item>

            <SubMenu title="申请管理"  icon={<BarChartOutlined />}>
                <Menu.Item key="5" icon={<ZoomInOutlined/>}>
                    <Link to='/zong'>
                    <span>申请总管理</span>
                    </Link>
                </Menu.Item>
                <Menu.Item key="16" icon={<DribbbleOutlined />}>
                    <Link to='/lanqiu' >
                        <span>篮球申请管理</span>
                    </Link>
                </Menu.Item >
                <Menu.Item key="17" icon={<SlidersOutlined />}>
                    <Link to='/yumao'>
                            <span>羽毛球申请管理</span>
                    </Link>
                </Menu.Item>
                <Menu.Item key="18" icon={<FireOutlined/>}>
                    <Link to='/pinpang'>
                            <span>乒乓球申请管理</span>
                    </Link>
                </Menu.Item>
            </SubMenu>

            <Menu.Item key="6" icon={<ToolOutlined />}>
                <Link to='/baoxiu'>
                    <span>场所保修</span>
                </Link>
            </Menu.Item>

            <Menu.Item key="7" icon={<UserOutlined />}>
                <Link to='/user'>
                    <span>用户信息管理</span>
                </Link>
            </Menu.Item>

          </Menu>
        )
    }
}
