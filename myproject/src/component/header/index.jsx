import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
import { Modal} from 'antd'


import {formateDate} from '../../utils/dateUtils'
// import memoryUtils from '../../utils/memoryUtils'
// import storageUtils from '../../utils/storageUtils.js'

import "./index.css"

export default class Header extends Component {

    state = {
        currentTime: formateDate(Date.now())
    }

    getTime = ()=> {
        this.interval =setInterval(() => {
            const currentTime = formateDate(Date.now())
            this.setState({currentTime})
        }, 1000);
    }

    componentDidMount(){
        this.getTime()
    }

    componengWillUnmount() {
        clearInterval(this.interval)
    }

    exit = () => {
        this.props.history.push('/login')
    }


    render() {
        const {currentTime} = this.state
        return (
            <div className="header">
                <div className="header-top">
                <span>欢迎,weizai</span>
                {/* <a href="#" onClick={this.exit}>退出登录</a> */}
                </div>
                <div className="header-bottom">
                <div className="header-bottom-right">
                    <span>{currentTime}</span>
                </div>
                </div>
            </div>
        )
    }
}
