<template>
    <div class="ProductManagement">
        <!-- 当前产品 -->
        <Row type="flex" justify="space-between" class="code-row-bg marginTB_40">
            <Col span="4">
                <Button type="error" icon="android-add" @click="AddProduction">创建新产品</Button>
            </Col>
            <Col span="20" class="TextRight">
                当前应用：
                <Select v-model="CurApplication" style="width:250px;text-align: left">
                    <Option v-for="item in ApplicationList" :value="item.value" :key="item.value">{{ item.name }}</Option>
                </Select>
            </Col>
        </Row>
        <!-- 产品列表 -->
        <h2>产品列表</h2>
        <div  class="BlockWrap marginTB_20">
            <Table border :columns="ProductionColumns" :data="ProductionData"></Table>
            <Page class="marginT_20 marginB_150" :total="Total" show-total style="float: right;" :current="page_num" @on-change="changePage" @on-page-size-change="changePageSize" show-sizer></Page>
        </div>
        <!-- 创建新产品 -->
        <CreateProduction :OriginType="0"/>
    </div>
</template>
<script>
import Vue from 'vue'
import axios from 'axios'
import CryptoJS from "crypto-js"
import CreateProduction from "./Create/CreateProduction"
  export default{
    data: function () {
      return {
        CurApplication:'',
        Total:10,
        page_num:1,  //页数
        number:10,   //每页条数
        ApplicationList:[
            {name:'声控开关',value:'声控开关'},
            {name:'门禁系统',value:'门禁系统'},
        ],
        ProductionColumns: [
            {
                type: 'index',
                width: 60,
                align: 'center'
            },
            {
                title: '产品图片',
                width: 90,
                key: 'P_img',
                render: (h, params) => {
                    return h('div', [
                        h('img', {
                            attrs: {
                                src: 'https://i.loli.net/2017/08/21/599a521472424.jpg',//params.row.headimg,
                                style: 'width: 40px;height: 40px;border-radius: 2px;margin: 10px auto'
                            },
                        }),
                    ]);
                }
            },
            {
                title: '产品名称',
                key: 'P_name'
            },
            {
                title: '产品ID',
                key: 'P_id'
            },
            {
                title: '所属应用',
                key: 'P_belongApplicaiton'
            },
            {
                title: '设备类别',
                key: 'P_kind'
            },
            {
                title: 'WIFI模块',
                key: 'P_wifi'
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
                                    this.show(params.index)
                                }
                            }
                        }, '查看'),
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
                                    this.remove(params.index)
                                }
                            }
                        }, '删除')
                    ]);
                }
            }
        ],
        ProductionData: [
            {
                P_img: '',
                P_name:'开发调试用硬件开发调试用硬件',
                P_id:'22',
                P_belongApplicaiton:'33',
                P_kind:'44',
                P_wifi:'55'
            },
            
        ]
      }
    },
    mounted() {
      
    },
    created() {
      
    },
    computed: {
        ID(){
            let ID = CryptoJS.AES.decrypt(this.$store.state.userInfo.userID,this.$store.state.PlainText).toString(CryptoJS.enc.Utf8)
            return ID
        },
      
    },
    watch: {
      
    },
    components: {
        CreateProduction
    },
    methods: {
        //查询所有应用
        GetApplication(){
            axios.get(R_PRE_URL+'selectallapply?userid='+this.ID
            ).then((res)=> {

            }).catch((error)=> {
                console.log(error)
            })
        },
        AddProduction(){
            this.$store.state.M_CreateProduction = true
        },
        //分页
        changePage(event){
          this.page_num = event
          //this.getDataOrder()
        },
        //切换每页条数
        changePageSize(event){
          this.number = event
          //this.getDataOrder()
        },
     

    }
  }
</script>
<style lang="scss" scoped>
.ProductManagement{
    margin-top: 50px;
    .BigIcon{
        font-size: 24px;
    }
}

</style>
