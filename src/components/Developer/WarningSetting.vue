<template>
    <div class="WarningSeeting">
        <!-- 当前产品 -->
        <Row type="flex" justify="space-between" class="code-row-bg marginTB_40">
            <Col span="4">
                <Button type="error" icon="android-add" @click="AddWarning">创建新告警规则</Button>
            </Col>
            <Col span="20" class="TextRight">
                当前产品：
                <Select v-model="CurProduction" @on-change="ChangeCurProduction"  style="width:250px;text-align: left">
                    <Option v-for="item in ProductionList" :value="item.id" :key="item.id">{{ item.product_name }}</Option>
                </Select>
            </Col>
        </Row>
        <!-- 告警列表 -->
        <h2>协议列表</h2>
        <!-- <div  class="BlockWrap marginTB_20">
            <Table border :loading="table_loading" :columns="AgreementColumns" :data="AgreementData"></Table>
            <Page v-if="Total>0" class="marginT_20 marginB_150" :total="Total" show-total style="float: right;" :current="page_num" @on-change="changePage" @on-page-size-change="changePageSize" show-sizer></Page>
        </div> -->
        <!-- 创建新告警 -->
        <!-- <CreateAgreement  :CurProduction="CurProduction"  :Productions="ProductionList" v-on:refreshApplication="Refresh"/> -->
        <!-- 编辑告警 -->
        <!-- <EditAgreement  :EditInfo='EditInfo' :CurProduction="CurProduction"  :Productions="ProductionList" v-on:refreshApplication="Refresh"/> -->
    </div>
</template>
<script>
import Vue from 'vue'
import axios from 'axios'
import CryptoJS from "crypto-js"
// import CreateAgreement from "./Create/CreateAgreement"
// import EditAgreement from "./Edit/EditAgreement"
  export default{
    data: function () {
      return {
        table_loading:true,
        ifDeleteModal:false,
        ProductionList:[],
        EditInfo:'',
        Total:10,
        page_num:1,  //页数
        number:10,   //每页条数
      }
    },
    mounted: function () {
      
    },
    created() {
        this.GetAllProduction()
      
    },
    computed: {
        ID(){
            let ID = CryptoJS.AES.decrypt(this.$store.state.userInfo.userID,this.$store.state.PlainText).toString(CryptoJS.enc.Utf8)
            return ID
        },
        CurProduction: {
            get: function () {
              return this.$store.state.CurProduction
            },
            set: function (newValue) {
              this.$store.state.CurProduction = newValue
            }
        },
      
    },
    watch: {
      
    },
    components: {
    },
    methods: {
        //切换当前应用
        ChangeCurProduction(){
            this.GetAllProduction()
        },
        AddWarning(){
            this.$store.state.M_CreateWarning = true
        },
        //获取所有产品列表
        GetAllProduction(){
            axios.get(R_PRE_URL+'selectallpro?userid='+this.ID
            ).then((res)=> {
                switch(res.data.result){
                  case 1:
                  let ListTemp = []
                  res.data.prolist.map(item=>{
                    item.map(item_E=>{
                        ListTemp.push(item_E)
                    })
                  })
                  this.CurProduction = this.$store.state.CurProduction == ''?ListTemp[0].id:this.$store.state.CurProduction
                  this.ProductionList = ListTemp
                  break
                  case 0:
                  this.$Message.error('获取产品列表失败!')
                  break
                  default:
                  this.$Message.error('系统繁忙!')
                  this.modal_loading = false
                }
            }).catch((error)=> {
                console.log(error)
            })
        },
     

    }
  }
</script>
<style lang="scss" scoped>
.WarningSeeting{
    margin-top: 50px;
    .BigIcon{
        font-size: 24px;
    }
}
</style>
