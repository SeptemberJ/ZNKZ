<template>
    <div class="AgreementManagement">
        <!-- 当前产品 -->
        <Row type="flex" justify="space-between" class="code-row-bg marginTB_40">
            <Col span="4">
                <Button type="error" icon="android-add" @click="AddAgreement">创建新协议</Button>
            </Col>
            <Col span="20" class="TextRight">
                当前产品：
                <Select v-model="CurProduction" style="width:250px;text-align: left">
                   <!--  <Option v-for="item in ApplicationList" :value="item.apply_name" :key="item.id">{{ item.apply_name }}</Option> -->
                   <Option value="产品1">产品1</Option>
                </Select>
            </Col>
        </Row>
        <!-- 协议列表 -->
        <h2>协议列表</h2>
        <div  class="BlockWrap marginTB_20">
            <Table border :columns="AgreementColumns" :data="AgreementData"></Table>
            <Page class="marginT_20 marginB_150" :total="Total" show-total style="float: right;" :current="page_num" @on-change="changePage" @on-page-size-change="changePageSize" show-sizer></Page>
        </div>
        <!-- 创建新协议 -->
        <CreateAgreement  :EditInfo="EditInfo"/>

        <!-- 删除协议 -->
        <!-- <Modal v-model="ifDeleteModal" width="360">
            <p slot="header">
                <Icon type="information-circled"></Icon>
                <span>提示</span>
            </p>
            <div style="text-align:center">
                <p>确定删除该协议？</p>
            </div>
            <div slot="footer">
                <Button type="primary" size="large"  @click="">取消</Button>
                <Button type="error" size="large"  @click="">确定</Button>
            </div>
        </Modal> -->
    </div>
</template>
<script>
import Vue from 'vue'
import axios from 'axios'
import CryptoJS from "crypto-js"
import CreateAgreement from "./Create/CreateAgreement"
  export default{
    data: function () {
      return {
        ifDeleteModal:false,
        EditInfo:'',
        CurProduction:'',
        Total:10,
        page_num:1,  //页数
        number:10,   //每页条数
        AgreementColumns: [
            {
                type: 'index',
                width: 60,
                align: 'center'
            },
            {
                title: '协议名称',
                key: 'Agm_name'
            },
            {
                title: '双向/单向',
                key: 'Agm_T2I'
            },
            {
                title: '功能码',
                key: 'Agm_FunctionCode'
            },
            {
                title: '数据类型',
                key: 'Agm_dataType'
            },
            {
                title: '字节数',
                key: 'Agm_byte'
            },
            {
                title: '单位名称',
                key: 'Agm_UnitName'
            },
            {
                title: '描述',
                key: 'Agm_description'
            },
            {
                title: '操作',
                key: 'action',
                width: 200,
                align: 'center',
                render: (h, params) => {
                    return h('div', [
                        h('Button', {
                            props: {
                                type: 'primary',
                                size:'small',
                                icon:'compose'
                            },
                            style: {
                                marginRight: '20px',
                            },
                            on: {
                                click: () => {
                                    this.editAgreement(params.index)
                                }
                            }
                        }, '编辑'),
                        h('Button', {
                            props: {
                                type: 'error',
                                size:'small',
                                icon:'android-delete'
                            },
                            style: {
                            },
                            on: {
                                click: () => {
                                    this.$Modal.confirm({
                                    title: '提示',
                                    content: '<p>确定删除该协议？</p>',
                                    onOk: () => {
                                        this.removeAgreement(params.index)
                                    },
                                    onCancel: () => {
                                    }
                                });
                                }
                            }
                        }, '删除')
                    ]);
                }
            }
        ],
        AgreementData: [
            {
                Agm_name:'开发调试用硬件开发调试用硬件',
                Agm_T2I:'双向',
                Agm_FunctionCode:'1011',
                Agm_dataType:'16位短整型（有符号）',
                Agm_byte:'',
                Agm_UnitName:'柏田科技',
                Agm_description:''
            },
            {
                Agm_name:'开发硬件',
                Agm_T2I:'双向',
                Agm_FunctionCode:'1011',
                Agm_dataType:'16位短整型（有符号）',
                Agm_byte:'',
                Agm_UnitName:'柏田科技',
                Agm_description:''
            },
            
        ]
      }
    },
    mounted: function () {
      
    },
    created: function () {
      
    },
    computed: {
      
    },
    watch: {
      
    },
    components: {
        CreateAgreement
    },
    methods: {
        AddAgreement(){
            this.$store.state.M_CreateAgreement = true
        },
        removeAgreement(IDX){
            alert(IDX)
        },
        //分页
        changePage(event){
          this.page_num = event
          //this.GetProduction()
        },
        //切换每页条数
        changePageSize(event){
          this.number = event
          //this.GetProduction()
        },
     

    }
  }
</script>
<style lang="scss" scoped>
.AgreementManagement{
    margin-top: 50px;
    .BigIcon{
        font-size: 24px;
    }
}
</style>
