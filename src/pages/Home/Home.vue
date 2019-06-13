<template>
    <section class="msite">
        <!-- 首页头部 -->
        <header-top title="北京市大兴区">
            <span class="header_search" slot="left">
                <i class="iconfont iconsearch"></i>
            </span>
            <span class="header_login" slot="right">
                <span class="header_login_text">登陆|注册</span>
            </span>
        </header-top>
        
        <!-- 首页轮播 -->
        <nav class="msite_nav">
            <div class="swiper-container">
                <div class="swiper-wrapper">
                    <div class="swiper-slide">
                        <a href="javascript:" class="link_to_food">
                            <div class="food_container">
                                <img src="./images/nav/1.jpg" alt="">
                            </div>
                            <span>甜品饮品</span>
                        </a>
                        <a href="javascript:" class="link_to_food">
                            <div class="food_container">
                                <img src="./images/nav/2.jpg" alt="">
                            </div>
                            <span>甜品饮品</span>
                        </a>
                        <a href="javascript:" class="link_to_food">
                            <div class="food_container">
                                <img src="./images/nav/3.jpg" alt="">
                            </div>
                            <span>甜品饮品</span>
                        </a>
                        <a href="javascript:" class="link_to_food">
                            <div class="food_container">
                                <img src="./images/nav/4.jpg" alt="">
                            </div>
                            <span>甜品饮品</span>
                        </a>
                        <a href="javascript:" class="link_to_food">
                            <div class="food_container">
                                <img src="./images/nav/5.jpg" alt="">
                            </div>
                            <span>甜品饮品</span>
                        </a>
                        <a href="javascript:" class="link_to_food">
                            <div class="food_container">
                                <img src="./images/nav/6.jpg" alt="">
                            </div>
                            <span>甜品饮品</span>
                        </a>
                        <a href="javascript:" class="link_to_food">
                            <div class="food_container">
                                <img src="./images/nav/7.jpg" alt="">
                            </div>
                            <span>甜品饮品</span>
                        </a>
                        <a href="javascript:" class="link_to_food">
                            <div class="food_container">
                                <img src="./images/nav/8.jpg" alt="">
                            </div>
                            <span>甜品饮品</span>
                        </a>

                    </div>
                    <div class="swiper-slide">
                        <a href="javascript:" class="link_to_food">
                            <div class="food_container">
                                <img src="./images/nav/1.jpg" alt="">
                            </div>
                            <span>甜品饮品</span>
                        </a>
                    </div>
                </div>
                <div class="swiper-pagination"></div>
            </div>
            <div class="swiper-pagination"></div>
            <!-- <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div> -->
        </nav>
        <!-- 附近商家 -->
        <div class="msite_shop_list">
            <div class="shop_header">
                <i class="iconfont iconxuanxiang shop_icon"></i>
                <span class="shop_header_title">附近商家</span>
            </div>
            <shop-list/>
        </div>
    </section>
</template>

<script>

// 引入swiper
import swiper from 'swiper'
// swiper css
import 'swiper/dist/css/swiper.min.css'

// 引入头部组件
import HeaderTop from '../../components/HeaderTop/HeaderTop.vue'
// 引入商家列表组件
import ShopList from '../../components/ShopList/ShopList.vue'
export default {
    mounted () {
        new swiper('.swiper-container' ,{
            // 是否循环轮播
            loop: true,
            // 是否用分页器
            pagination: {
                el: '.swiper-pagination',
            },
        })
    },
    components:{
        HeaderTop,
        ShopList
    }
}
</script>

<style lang="stylus" scoped>
@import "../../common/stylus/mixins.styl"
// 首页
.msite
    width 100%
    .msite_nav
        bottom-border-1px(#e4e4e4)
        margin-top 45px
        height 200px
        background #fff
        .swiper-container
            width 100%
            height 100%
            .swiper-wrapper
                width 100%
                height 100%
                .swiper-slide
                    display flex
                    justify-content center
                    align-items flex-start
                    flex-wrap wrap
                    .link_to_food
                        width 25%
                        .food_container
                            display block
                            width 100%
                            text-align center
                            padding-bottom 10px
                            font-size 0
                            img
                                display inline-block
                                width 50px
                                height 50px
                        span
                            display inline-block
                            width 100%
                            text-align center
                            font-size 13px
                            color #666
            .swiper-pagination
                >span.swiper-pagination-bullet-active
                    background #02a774
    .msite_shop_list
        top-border-1px(#e4e4e4)
        margin-top 10px
        background #fff
        .shop_header
            padding 10px 10px 0
            .shop_icon
                margin-left 5px
                color #999
            .shop_header_title
                color #999
                font-size 14px
                line-height 20px    
</style>


