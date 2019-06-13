
<template>
    <div id="app">
        <router-view/>
        <foot-guide v-show="$route.meta.showFooter"/>
    </div>
</template>

<script>
// 引入底部导航组件
import FootGuide from './components/FootGuide/FootGuide.vue'
export default {
    components: {
        // 注册组件
        FootGuide
    }
}
</script>

<style lang="stylus" scoped>
    #app
        width 100%
        height 100%
        background-color #f5f5f5
</style>



