<template>
<div class="com-app">
<div class="layout">
<SiderBar/>
        <!-- <Sider class="fixedSider" :style="{position: 'fixed', height: '100vh', left: 0, overflow: 'auto'}">
            <Menu active-name="1-2" theme="light" width="auto" :open-names="['1']" >
                <MenuItem name="-1">
                </MenuItem>
                <MenuItem name="-1">
                </MenuItem>
                <MenuItem name="1">
                    <Icon type="ios-paper"></Icon>
                    首页
                </MenuItem>
                <Submenu name="1">
                    <template slot="title">
                        <Icon type="ios-navigate"></Icon>
                        Item 1
                    </template>
                    <MenuItem name="1-1">Option 1</MenuItem>
                    <MenuItem name="1-2">Option 2</MenuItem>
                    <MenuItem name="1-3">Option 3</MenuItem>
                    <MenuItem name="1-4">Option 1</MenuItem>
                    <MenuItem name="1-5">Option 2</MenuItem>
                    <MenuItem name="1-6">Option 3</MenuItem>
                </Submenu>
                <Submenu name="2">
                    <template slot="title">
                        <Icon type="ios-keypad"></Icon>
                        Item 2
                    </template>
                    <MenuItem name="2-1">Option 1</MenuItem>
                    <MenuItem name="2-2">Option 2</MenuItem>
                    <MenuItem name="2-3">Option 3</MenuItem>
                    <MenuItem name="2-4">Option 1</MenuItem>
                    <MenuItem name="2-5">Option 2</MenuItem>
                    <MenuItem name="2-6">Option 3</MenuItem>
                </Submenu>
                <Submenu name="3">
                    <template slot="title">
                        <Icon type="ios-analytics"></Icon>
                        Item 3
                    </template>
                    <MenuItem name="3-1">Option 1</MenuItem>
                    <MenuItem name="3-2">Option 2</MenuItem>
                </Submenu>
            </Menu>
        </Sider> -->
        <Layout :style="{marginLeft: '200px'}">
           <Header class="fixedHeader shadow" :style="{position: 'fixed',top:0}">
                <Menu mode="horizontal" theme="light" active-name="1">
                    <div class="layout-logo">
                        <img style="width: 100%" src="/static/img/logo1.png">
                    </div>
                    <div class="layout-nav">
                    <Dropdown trigger="click" :style="{marginRight: '20px'}">
                        <a href="javascript:void(0)">
                            <Icon type="android-person" size="24"></Icon>
                            欢迎您，用户
                            <Icon type="arrow-down-b"></Icon>
                        </a>
                        <DropdownMenu slot="list">
                            <DropdownItem>个人账号</DropdownItem>
                            <DropdownItem>企业信息</DropdownItem>
                            <DropdownItem>退出</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                    </div>
                </Menu>
            </Header>
            <Content :style="{margin: '88px 20px 0',  minHeight: '800px'}">
                <Card>
                    <div :style="{height: '600px',background: '#fff'}">Content</div>
                </Card>
            </Content>
        </Layout>
    </div>
    <div class="ChangePlant" :style="{display: 'none'}">运营者平台</div>
</div>
</template>
<script>
import Vue from 'vue'
import axios from 'axios'
import SiderBar from '../../components/Developer/SiderBar.vue'

  export default{
    data: function () {
      return {
        // transitionName: 'slide-left',
      }
    },
    mounted: function () {
      
    },
    created: function () {
      this.$Message.config({
          top: 82,
          duration: 1.5
      });
      
    },
    computed: {
      activeRoute(){
        return this.$store.state.activeRoute
       }
      
    },
    watch: {
      
    },
    components: {
        SiderBar
      
      

    },
    methods: {
     

    }
  }
</script>
<style scoped>
::-webkit-scrollbar{
  display:none;
}
.fixedSider{
    /*border-right: 1px solid #eee;*/
    -webkit-box-shadow: 0 0 9px rgba(0,0,0,.25);
    -moz-box-shadow: 0 0 9px rgba(0,0,0,.25);
    box-shadow: 0 0 9px rgba(0,0,0,.25);
}
.fixedHeader{
    width: 100%;
     /*width: calc(100% + 200px);*/
     left: 0;
     z-index:999;
}
.shadow{
    -webkit-box-shadow: 0 0 9px rgba(0,0,0,.25);
    -moz-box-shadow: 0 0 9px rgba(0,0,0,.25);
    box-shadow: 0 0 9px rgba(0,0,0,.25);
}
.ChangePlant{
    position:fixed;
    top:50%;
    right:0;
    padding:20px;
    border-radius:50%;
    width:80px;
    height:80px;
    color:#fff;
    text-align: center;
    background-color: #FBDA61;
    background-image: -webkit-linear-gradient(bottom left, #FBDA61 0%, #FF5ACD 100%);
    background-image: -o-linear-gradient(bottom left, #FBDA61 0%, #FF5ACD 100%);
    background-image: linear-gradient(to top right, #FBDA61 0%, #FF5ACD 100%);


}
.layout{
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    /*overflow: hidden;*/
}
.layout-header-bar{
    background: #fff;
    box-shadow: 0 1px 1px rgba(0,0,0,.1);
}
.layout-logo{
  width: 100px;
  height: 30px;
  /*background: #5b6270;*/
  border-radius: 3px;
  float: left;
  position: relative;
  top: 15px;
  left: 20px;
}
.layout-nav{
    float: right;
}
    
</style>
