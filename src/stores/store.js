import {
    createStore
} from 'redux';

// 引入各模块数据
import Home from './states/home.js'
// 引入数据处理方法
import HomeDataProcessing from './dataProcessing/home'

let store = createStore((states = {
    // 将模块数据挂载到states上
    Home
}, action) => {

    // 分配数据处理 当前 switch 匹配页面 再将任务分配给页面数据方法文件处理数据后 再返回
    // 约定acton type 将定义由哪个方法处理一个数据模块的数据
    // 数据模块如何处理 改数据模块的数据 约定由 action.claim 确定 并在 该数据处理方法中判断后 处理 返回
    switch (action.type) {
        case 'Home':
            return HomeDataProcessing(states,action)
        default:
            return states
    }
})

export default store;