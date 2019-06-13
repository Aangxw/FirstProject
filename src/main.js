/*
js入口
*/

import Vue from 'vue'
import App from './App.vue'
// 引入路由
import router from './router'
// 移动端延迟三秒
import FastClick from 'fastclick'
FastClick.attach(document.body)

new Vue({
    el: '#app',
    render: h => h(App),
    // 注册路由
    router
})

