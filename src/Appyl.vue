<style scoped>
    
    .layout{
        border: 1px solid #d7dde4;
        background: #f5f7f9;
        position: relative;
        border-radius: 4px;
        overflow: hidden;
    }
    .layout-header-bar{
        background: #fff;
        box-shadow: 0 1px 1px rgba(0,0,0,.1);
    }
    .layout-logo-left{
        width: 90%;
        height: 30px;
        background: #5b6270;
        border-radius: 3px;
        margin: 15px auto;
    }
    .menu-icon{
        transition: all .3s;
    }
    .rotate-icon{
        transform: rotate(-90deg);
    }
    .menu-item span{
        display: inline-block;
        overflow: hidden;
        width: 69px;
        text-overflow: ellipsis;
        white-space: nowrap;
        vertical-align: bottom;
        transition: width .2s ease .2s;
    }
    .menu-item i{
        transform: translateX(0px);
        transition: font-size .2s ease, transform .2s ease;
        vertical-align: middle;
        font-size: 16px;
    }
    .collapsed-menu span{
        width: 0px;
        transition: width .2s ease;
    }
    .collapsed-menu i{
        transform: translateX(5px);
        transition: font-size .2s ease .2s, transform .2s ease .2s;
        vertical-align: middle;
        font-size: 22px;
    }
</style>
<template>
<div class="com-app">
    <transition>
        <router-view class="child-view"></router-view>
    </transition>
    <!-- <div v-if="activeRoute!='登录' && activeRoute!='注册' && activeRoute!='修改密码'" class="ChangePlant" @mouseover="OverShow" @mouseout="OutHide"  @click="ChangePlatform">
        {{activeRoute}}
        <span v-if="ChangeShow" class="ChangePlantMask">切换</span>
    </div> -->
</div>
    <!-- <div class="layout">
        <Layout>
            <Sider :style="{float:'left',overflow:'hidden'}" ref="side1" hide-trigger collapsible :collapsed-width="0" v-model="isCollapsed">
                <Menu active-name="1-2" theme="dark" width="auto" :class="menuitemClasses">
                    <MenuItem name="1-1">
                        <Icon type="ios-navigate"></Icon>
                        <span>Option 1</span>
                    </MenuItem>
                    <Submenu name="用户管理">
                        <template slot="title">
                            <Icon type="person-stalker" size="22"></Icon>
                            用户管理
                        </template>
                        <MenuItem name="用户情况">用户情况</MenuItem>
                        <MenuItem name="活跃用户">活跃用户</MenuItem>
                    </Submenu>
                    <MenuItem name="1-3">
                        <Icon type="settings"></Icon>
                        <span>Option 3</span>
                    </MenuItem>
                </Menu>
            </Sider>
            <Layout>
                <Header :style="{padding: 0}" class="layout-header-bar">
                    <Icon @click.native="collapsedSider" :class="rotateIcon" :style="{margin: '20px 20px 0'}" type="navicon-round" size="24"></Icon>
                </Header>
                <Content :style="{margin: '20px', background: '#fff', minHeight: '260px'}">
                    <transition>
                        <router-view class="child-view"></router-view>
                    </transition>
                </Content>
            </Layout>
        </Layout>
    </div> -->
</template>
<script>
    export default {
        data () {
            return {
                isCollapsed: false
            }
        },
        computed: {
            rotateIcon () {
                return [
                    'menu-icon',
                    this.isCollapsed ? 'rotate-icon' : ''
                ];
            },
            menuitemClasses () {
                return [
                    'menu-item',
                    this.isCollapsed ? 'collapsed-menu' : ''
                ]
            },
            activeRoute(){
            return this.$store.state.activeRoute
           }
        },
        methods: {
            // collapsedSider () {
            //     this.$refs.side1.toggleCollapse();
            // }
        }
    }
</script>