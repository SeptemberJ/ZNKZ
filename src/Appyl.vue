<template>
  <div class="com-app">
    <div class="" :style="{}">
            <Header class="fixedHeader">
                <Menu mode="horizontal" theme="light" active-name="1">
                    <div class="layout-logo"></div>
                    <div class="layout-nav">
                        <MenuItem name="1">
                            <Icon type="ios-navigate"></Icon>
                            Item 1
                        </MenuItem>
                    </div>
                </Menu>
            </Header>
    </div>
    <div class="layout fixedLayout">
            <Sider class="fixedSider" :style="{position: 'fixed',  left: 0}">
            <Menu active-name="1-2" theme="light" width="auto" :open-names="['1']">
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
                    <MenuItem name="2-3">Option 1</MenuItem>
                    <MenuItem name="2-4">Option 2</MenuItem>
                    <MenuItem name="2-5">Option 3</MenuItem>
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
        </Sider>
        <Layout :style="{marginLeft: '200px'}">
            <!-- <Header :style="{background: '#fff', boxShadow: '0 2px 3px 2px rgba(0,0,0,.1)'}"></Header> -->
            <Content :style="{padding: '16px'}">
                <!-- <Breadcrumb :style="{margin: '16px 0'}">
                    <BreadcrumbItem>Home</BreadcrumbItem>
                    <BreadcrumbItem>Components</BreadcrumbItem>
                    <BreadcrumbItem>Layout</BreadcrumbItem>
                </Breadcrumb> -->
                <Card>
                    <div style="height: 600px">Content</div>
                </Card>
            </Content>
        </Layout>
    
    </div>

    <!-- <div class="layout">
      <transition>
        <router-view class="child-view"></router-view>
      </transition>
    </div> -->
  </div>
</template>
<script>

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
      
      

    },
    methods: {
     

    }
  }
</script>
<style scoped>
::-moz-scrollbar{
  display:none;
}
::-webkit-scrollbar{
  display:none;
}
::scrollbar{
  display:none;
}
.fixedHeader{
    position: fixed;
    width: 100%;
    top:0;
    z-index:999999;
    height: 60px;
    -webkit-box-shadow: 0 0 9px rgba(0,0,0,.25);
    -moz-box-shadow: 0 0 9px rgba(0,0,0,.25);
    box-shadow: 0 0 9px rgba(0,0,0,.25);
    /*box-shadow: 0 0 9px rgba(0,0,0,.25);*/
}
.fixedLayout{
  position: fixed;
  top:60px;
  width:100%;
  border: 0px !important;
  
}
.fixedSider{
  height: calc(100vh - 60px);
  overflow-y: scroll;
  border-right: 1px solid #d7dde4;
}
.layout{
      border: 1px solid #d7dde4;
      /*background: #f5f7f9;*/
      position: relative;
      border-radius: 4px;
      overflow: hidden;
  }
  .layout-logo{
      width: 100px;
      height: 30px;
      background: #5b6270;
      border-radius: 3px;
      float: left;
      position: relative;
      top: 15px;
      left: 20px;
  }
  .layout-nav{
      width: 420px;
      margin: 0 auto;
      margin-right: 20px;
  }
  .layout-footer-center{
      text-align: center;
  }
  .layout-header-bar{
      background: #fff;
      box-shadow: 0 1px 1px rgba(0,0,0,.1);
  }
  .shadow{
    -webkit-box-shadow: 0 0 9px red;
    -moz-box-shadow: 0 0 9px red;
    box-shadow: 0 0 9px red;
  }
    
</style>
