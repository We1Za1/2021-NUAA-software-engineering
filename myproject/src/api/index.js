/*
要求: 能根据接口文档定义接口请求
包含应用中所有接口请求函数的模块
每个函数的返回值都是promise

基本要求: 能根据接口文档定义接口请求函数
 */
import jsonp from 'jsonp'
import {message} from 'antd'
import ajax from './ajax'

const BASE = 'http://localhost:8080'
// 登陆

// 登陆接口
export const reqLogin = (id) => ajax(BASE + '/user/reqLogin/'+id)

/* 
   user:
      id,name,password,role
*/

// 获取指定用户的列表
export const reqUser = (id) => ajax(BASE + '/user/getUser/'+id)
// 获取所有用户的列表
export const reqUsers = () => ajax(BASE + '/user/selectAll')
// 删除指定用户
export const reqDeleteUser = (id) => ajax(BASE + '/user/delete?id='+id)
// 添加
export const reqAddUser = (user) => ajax(BASE + '/user/insert?id='+user.id+'&name='+user.name+'&password='+user.password+'&role='+user.role)
//更新用户
export const reqUpdateUser = (user) => ajax(BASE + '/user/update?id='+user.id+'&name='+user.name+'&password='+user.password+'&role='+user.role)

/* 
   changdi:
      id,name,jianjie
*/

// 获取指定场地的列表
export const reqChang = (id) => ajax(BASE + '/chang/getChang/'+id)
// 获取所有场地的列表
export const reqChangs = () => ajax(BASE + '/chang/selectAll')
// 删除指定场地
export const reqDeleteChang = (id) => ajax(BASE + '/chang/delete?id='+id)
// 添加场地
export const reqAddChang = (chang) => ajax(BASE + '/chang/insert?id='+chang.id+'&name='+chang.name+'&jianjie='+chang.jianjie)
//更新场地
export const reqUpdateChang = (chang) => ajax(BASE + '/chang/update?id='+chang.id+'&name='+chang.name+'&jianjie='+chang.jianjie)


/* 
   gonggao:
      id,time,title,content
*/

// 获取指定公告的列表
export const reqGong = (id) => ajax(BASE + '/gong/getGong/'+id)
// 获取所有公告的列表
export const reqGongs = () => ajax(BASE + '/gong/selectAll')
// 删除指定公告
export const reqDeleteGong = (id) => ajax(BASE + '/gong/delete?id='+id)
// 添加公告
export const reqAddGong = (gong) => ajax(BASE + '/gong/insert?id='+gong.id+'&time='+gong.time+'&title='+gong.title+'&content='+gong.content)
//更新公告
export const reqUpdateGong = (gong) => ajax(BASE + '/gong/update?id='+gong.id+'&time='+gong.time+'&title='+gong.title+'&content='+gong.content)


/* 
   baoxiu:
      id,userID,name,content
*/
// 获取指定报修的列表
export const reqBao = (id) => ajax(BASE + '/bao/getBao/'+id)
// 获取所有报修的列表
export const reqBaos = () => ajax(BASE + '/bao/selectAll')
// 删除指定报修
export const reqDeleteBao = (id) => ajax(BASE + '/bao/delete?id='+id)
// 添加报修
export const reqAddBao = (bao) => ajax(BASE + '/bao/insert?id='+bao.id+'&userID='+bao.userID+'&name='+bao.name+'&content='+bao.content)
//更新报修
export const reqUpdateBao = (bao) => ajax(BASE + '/bao/update?id='+bao.id+'&userID='+bao.userID+'&name='+bao.name+'&content='+bao.content)


/* 
   liu:
      id,userID,comment
*/

// 获取指定留言的列表
export const reqLiu = (id) => ajax(BASE + '/liuyan/getLiuyan/'+id)
// 获取所有留言的列表
export const reqLius = () => ajax(BASE + '/liuyan/selectAll')
// 删除指定留言
export const reqDeleteLiu = (id) => ajax(BASE + '/liuyan/delete?id='+id)
// 添加留言
export const reqAddLiu = (liuyan) => ajax(BASE + '/liuyan/insert?id='+liuyan.id+'&userID='+liuyan.userID+'&comment='+liuyan.comment)
//更新留言
export const reqUpdateLiu = (liuyan) => ajax(BASE + '/liuyan/update?id='+liuyan.id+'&userID='+liuyan.userID+'&comment='+liuyan.comment)
//查看某个用户的所有留言
export const searchuserID_0 = (userID) => ajax(BASE + '/liuyan/selectuserAll?userID='+userID)


/* 
   lanqiu:
      id,userID,startTime,endTime,cause,state
*/

// 根据申请 id 查找申请
export const searchID = (id) => ajax(BASE + '/lanqiu/getLanqiu/' + id)
// 查看某个用户的所有申请
export const searchuserID = (userID) => ajax(BASE + '/lanqiu/selectuserAll?userID='+userID)
// 查找所有申请
export const searchAll = () => ajax(BASE + '/lanqiu/selectAll')
// 查找没有被操作的申请
export const selectNew = () => ajax(BASE + '/lanqiu/getNew')
// 根据指定的 id 删除申请
export const deleteID = (id) => ajax(BASE + '/lanqiu/delete?id='+id)
// 删除某个用户的所有申请
export const deletesuserID = (userID) => ajax(BASE + '/lanqiu/deletes?userID='+userID)
// 插入留言
export const Add = (shenqing) => ajax(BASE + '/lanqiu/insert?id='+shenqing.id+'&userID='+shenqing.userID+'&startTime='+shenqing.startTime+'&endTime='+shenqing.endTime+'&cause='+shenqing.cause+'&state='+'未操作')
// 更改申请
export const update = (shenqing) => ajax(BASE + '/lanqiu/update?id='+shenqing.id+'&userID='+shenqing.userID+'&startTime='+shenqing.startTime+'&endTime='+shenqing.endTime+'&cause='+shenqing.cause+'&state='+'未操作')
// 批准申请
export const change = (shenqing) => ajax(BASE + '/lanqiu/changeState?id='+shenqing.id+'&state='+'OK')
// 拒接申请
export const reject = (shenqing) => ajax(BASE + '/lanqiu/changeState?id='+shenqing.id+'&state='+'reject')


// 根据申请 id 查找申请
export const searchID_1 = (id) => ajax(BASE + '/yumaoqiu/getYumaoqiu/' + id)
// 查看某个用户的所有申请
export const searchuserID_1 = (userID) => ajax(BASE + '/yumaoqiu/selectuserAll?userID='+userID)
// 查找所有申请
export const searchAll_1 = () => ajax(BASE + '/yumaoqiu/selectAll')
// 查找没有被操作的申请
export const selectNew_1 = () => ajax(BASE + '/yumaoqiu/getNew')
// 根据指定的 id 删除申请
export const deleteID_1 = (id) => ajax(BASE + '/yumaoqiu/delete?id='+id)
// 删除某个用户的所有申请
export const deletesuserID_1 = (userID) => ajax(BASE + '/yumaoqiu/deletes?userID='+userID)
// 插入留言
export const Add_1 = (shenqing) => ajax(BASE + '/yumaoqiu/insert?id='+shenqing.id+'&userID='+shenqing.userID+'&startTime='+shenqing.startTime+'&endTime='+shenqing.endTime+'&cause='+shenqing.cause+'&state='+'未操作')
// 更改申请
export const update_1 = (shenqing) => ajax(BASE + '/yumaoqiu/update?id='+shenqing.id+'&userID='+shenqing.userID+'&startTime='+shenqing.startTime+'&endTime='+shenqing.endTime+'&cause='+shenqing.cause+'&state='+'未操作')
// 批准申请
export const change_1 = (shenqing) => ajax(BASE + '/yumaoqiu/changeState?id='+shenqing.id+'&state='+'OK')
// 拒接申请
export const reject_1 = (shenqing) => ajax(BASE + '/yumaoqiu/changeState?id='+shenqing.id+'&state='+'reject')


// 根据申请 id 查找申请
export const searchID_2 = (id) => ajax(BASE + '/pinpangqiu/getPinpang/' + id)
// 查看某个用户的所有申请
export const searchuserID_2 = (userID) => ajax(BASE + '/pinpangqiu/selectuserAll?userID='+userID)
// 查找所有申请
export const searchAll_2 = () => ajax(BASE + '/pinpangqiu/selectAll')
// 查找没有被操作的申请
export const selectNew_2 = () => ajax(BASE + '/pinpangqiu/getNew')
// 根据指定的 id 删除申请
export const deleteID_2 = (id) => ajax(BASE + '/pinpangqiu/delete?id='+id)
// 删除某个用户的所有申请
export const deletesuserID_2 = (userID) => ajax(BASE + '/pinpangqiu/deletes?userID='+userID)
// 插入留言
export const Add_2 = (shenqing) => ajax(BASE + '/pinpangqiu/insert?id='+shenqing.id+'&userID='+shenqing.userID+'&startTime='+shenqing.startTime+'&endTime='+shenqing.endTime+'&cause='+shenqing.cause+'&state='+'未操作')
// 更改申请
export const update_2 = (shenqing) => ajax(BASE + '/pinpangqiu/update?id='+shenqing.id+'&userID='+shenqing.userID+'&startTime='+shenqing.startTime+'&endTime='+shenqing.endTime+'&cause='+shenqing.cause+'&state='+'未操作')
// 批准申请
export const change_2 = (shenqing) => ajax(BASE + '/pinpangqiu/changeState?id='+shenqing.id+'&state='+'OK')
// 拒接申请
export const reject_2 = (shenqing) => ajax(BASE + '/pinpangqiu/changeState?id='+shenqing.id+'&state='+'reject')





// reqWeather('北京')
/*
jsonp解决ajax跨域的原理
  1). jsonp只能解决GET类型的ajax请求跨域问题
  2). jsonp请求不是ajax请求, 而是一般的get请求
  3). 基本原理
   浏览器端:
      动态生成<script>来请求后台接口(src就是接口的url)
      定义好用于接收响应数据的函数(fn), 并将函数名通过请求参数提交给后台(如: callback=fn)
   服务器端:
      接收到请求处理产生结果数据后, 返回一个函数调用的js代码, 并将结果数据作为实参传入函数调用
   浏览器端:
      收到响应自动执行函数调用的js代码, 也就执行了提前定义好的回调函数, 并得到了需要的结果数据
 */