<template>
<div class="com-app">
<div class="layout">
    <SiderBar v-on:SideMenu-click="listenFromSideMenu"  v-on:SideStatus="listenSideStatus"/>
        <Layout>
            <Content :style="{ minWidth: '678px',marginLeft:LeftDistance?'0px':'200px'}">
                <Header class="shadow" :style="{position: 'fixed',top:0,left:LeftDistance?'0px':'200px', width: '100%',background:'#fff',zIndex:999}">
                    <Icon v-if="LeftDistance" @click.native="collapsedSider" class="menu-icon" :style="{margin: '2px 20px 0'}" type="navicon-round" size="24"></Icon>
                    <Icon v-if="!LeftDistance" @click.native="collapsedSider" class="rotate-icon" :style="{margin: '2px 2px 0'}" type="chevron-left" size="24"></Icon>

                    <Button @click="GoDeveloper" type="text" :class="{active:activeRoute=='开发者平台'}">开发平台</Button>
                    |
                    <Button @click="GoOperator" type="text" :class="{active:activeRoute=='运营者平台'}">运营平台</Button>

                    

                    <div :style="{float: 'right',marginRight:LeftDistance?'0px':'200px'}">
                        <Button @click="Logout" type="text">shbt
                            <Icon type="power" size="14"></Icon>
                            退出
                        </Button>
                    </div>

                    <!-- <Dropdown trigger="click" :style="{marginRight: '20px'}">
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
                    </Dropdown> -->
                </Header>
                <Card :bordered="false" dis-hover>
                    <div>
                        <Home v-if="curMneu == '首页'"></Home>
                        <IndividualAccount v-if="curMneu == '个人账号'"></IndividualAccount>
                        <!-- <ModifyInfo v-if="curMneu == '修改个人信息'"></ModifyInfo> -->
                        <EnterpriseInfo v-if="curMneu == '企业信息'"></EnterpriseInfo>
                        <UserSituation v-if="curMneu == '用户情况'"></UserSituation>
                        <ActiveUser v-if="curMneu == '活跃用户'"></ActiveUser>
                        <EquipmentCondition v-if="curMneu == '设备情况'"></EquipmentCondition>
                        <EquipmentAuthorization v-if="curMneu == '设备授权'"></EquipmentAuthorization>
                        <Alert v-if="curMneu == '警告管理'"></Alert>
                        <ApkUpgrade v-if="curMneu == 'APK升级'"></ApkUpgrade>
                        <FirmwareUpdate v-if="curMneu == '固件升级'"></FirmwareUpdate>
                        <MessagePush v-if="curMneu == '消息推送'"></MessagePush>
                        <UserFeedback v-if="curMneu == '用户反馈'"></UserFeedback>
                        <MailTemplate v-if="curMneu == '邮件模板'"></MailTemplate>
                        <CommonProblem v-if="curMneu == '常见问题管理'"></CommonProblem>
                        
                    </div>
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
import SiderBar from '../../components/Operator/SiderBar.vue'
import Home from '../../components/Operator/Home.vue'
import IndividualAccount from '../../components/Common/IndividualAccount.vue'
// import ModifyInfo from '../../components/Common/ModifyInfo.vue'
import EnterpriseInfo from '../../components/Common/EnterpriseInfo.vue'
import Alert from '../../components/Operator/Alert.vue'
import UserSituation from '../../components/Operator/UserSituation.vue'
import ActiveUser from '../../components/Operator/ActiveUser.vue'
import EquipmentCondition from '../../components/Operator/EquipmentCondition.vue'
import EquipmentAuthorization from '../../components/Operator/EquipmentAuthorization.vue'
import ApkUpgrade from '../../components/Operator/ApkUpgrade.vue'
import FirmwareUpdate from '../../components/Operator/FirmwareUpdate.vue'
import MessagePush from '../../components/Operator/MessagePush.vue'
import UserFeedback from '../../components/Operator/UserFeedback.vue'
import MailTemplate from '../../components/Operator/MailTemplate.vue'
import CommonProblem from '../../components/Operator/CommonProblem.vue'
  export default{
    data: function () {
      return {
        isCollapsed: false,
        LeftDistance:false
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
        },
        curMneu: {
            get: function () {
              return this.$store.state.OperatorMenuCur
            },
            set: function (newValue) {
              this.$store.state.OperatorMenuCur = newValue
            }
        },
        // rotateIcon () {
        //     return [
        //         'menu-icon',
        //         this.isCollapsed ? 'rotate-icon' : ''
        //     ];
        // },


      
    },
    watch: {
    },
    components: {
        SiderBar,
        Home,
        IndividualAccount,
        //ModifyInfo,
        EnterpriseInfo,
        UserSituation,
        ActiveUser,
        EquipmentCondition,
        EquipmentAuthorization,
        Alert,
        ApkUpgrade,
        FirmwareUpdate,
        MessagePush,
        UserFeedback,
        MailTemplate,
        CommonProblem
    },
    methods: {
        listenFromSideMenu(MENU){
            this.curMneu = MENU
        },
        listenSideStatus(Status){
            this.LeftDistance = Status
        },
        collapsedSider () {
            this.LeftDistance = !this.LeftDistance
            this.$children[0].$refs.side1.toggleCollapse();
        },
        GoDeveloper(){
            this.$router.push({name:'开发者平台'})
        },
        GoOperator(){
            this.$router.push({name:'运营者平台'})
        },
        Logout(){
            this.$router.push({name:'登录'})
        }
        // ChangeDropdown(NAME){
        //     switch(NAME){
        //       case 'individualAccount':
        //       break
        //       case 'enterpriseInfo':
        //       break
        //       case 'logout':
        //       localStorage.clear();
        //       this.$router.push({name:'登录'})
        //       break
        //     }
        // }
     

    }
  }
</script>
<style scoped>
::-webkit-scrollbar{
  display:none;
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
    /*border: 1px solid #d7dde4;
    background: #f5f7f9;*/
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
