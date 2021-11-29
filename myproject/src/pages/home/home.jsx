import React, { Component }from 'react'

import {reqUsers} from "../../api/index"


export default class home extends Component {
  state = {roles:[]}

  getRoles = async ()=>{
    const result = await reqUsers()
    const roles = result.data
    this.setState({roles})
    console.log(result)
  }


  render() {
    return (
      <div >
          hello world
          <button onClick={this.getRoles}>点我获取数据</button>
      </div>
    )
  }
}