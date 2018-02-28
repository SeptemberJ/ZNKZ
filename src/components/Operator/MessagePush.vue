<template>
    <div class="MessagePush">
        <Row type="flex" justify="space-between" class="code-row-bg">
            <Col span="4"><h2>消息列表</h2></Col>
            <Col span="8" class="TextRight">
                <Button type="error" icon="android-add" @click="JGconfigure">极光配置</Button>
                <Button type="error" icon="android-add" @click="AddMessage">新增消息</Button>
            </Col>
        </Row>
        <!-- 消息列表 -->
        <div  class="BlockWrap marginTB_20">
            <Table border :loading="table_loading" :columns="MesssageColumns" :data="MesssageData"></Table>
            <Page v-if="Total>0" class="marginT_20 marginB_150" :total="Total" show-total style="float: right;" :current="page_num" @on-change="changePage" @on-page-size-change="changePageSize" show-sizer></Page>
        </div>
        <!-- 极光配置 -->
        <Modal v-model="ifShowModal_configure" width="600" :mask-closable="false">
            <p slot="header">
                <Icon type="information-circled"></Icon>
                <span>极光配置</span>
            </p>
            <div style="">
                <Form ref="formCreateConfigure" :model="formCreateConfigure" :rules="ruleCreateConfigure"  :label-width="120">
                    <FormItem prop="AppKey" label="APP Key">
                        <Input type="text" v-model="formCreateConfigure.AppKey" placeholder="请输入APP Key">
                      </Input>
                    </FormItem>
                    <FormItem prop="AppSecret" label="APP Secret">
                        <Input type="text" v-model="formCreateConfigure.AppSecret" placeholder="请输入APP Secret">
                      </Input>
                    </FormItem>
                    <FormItem prop="plat" label="目标平台（只对iOS有效）">
                        <RadioGroup v-model="formCreateConfigure.plat">
                            <Radio label="iOS开发环境"></Radio>
                            <Radio label="iOS生产环境"></Radio>
                        </RadioGroup>
                    </FormItem>
                </Form>
            </div>
            <div slot="footer" style="text-align:center">
                <Button type="error" size="large" :loading="modal_loading" @click="handleCreateConfigure('formCreateConfigure')">提交</Button>
            </div>
        </Modal>

        <!-- 新增消息 -->
        <CreateMessage></CreateMessage>
    </div>
        
</template>
<script>
import Vue from 'vue'
import axios from 'axios'
import CryptoJS from "crypto-js"
import CreateMessage from "./Create/CreateMessage"
  export default{
    data: function () {
      return {
        table_loading:true,
        ifShowModal_configure:false,
        modal_loading:false,
        Total:0,
        page_num:1,  //页数
        number:10,   //每页条数
        fileName:'',
        formCreateConfigure:{
            AppKey:'',
            AppSecret:'',
            plat:'iOS生产环境'
        },
        ruleCreateConfigure: {
            AppKey: [
                { required: true, message: '请输入APP Key', trigger: 'blur' }
            ],
            AppSecret: [
                { required: true, message: '请输入APP Secret', trigger: 'blur' }
            ],
            plat: [
                { required: true, message: '请选择目标平台', trigger: 'change' }
            ],
        },
        MesssageColumns: [
            {
                type: 'index',
                width: 60,
                align: 'center'
            },
            {
                title: '消息标题',
                key: 'fname'
            },
            {
                title: '推送内容',
                key: 'fversion'
            },
            {
                title: '推送方式',
                key: 'fversion'
            },
            {
                title: '推送时间',
                key: 'fcreateTime'
            },
            {
                title: '推送人群',
                key: 'fcreateTime'
            }
        ],
        MesssageData:[]
      }
    },
    mounted: function () {
      
    },
    created() {
        //this.GetFirmwareList()
      
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
        CreateMessage
    },
    methods: {
        //极光配置modal
        JGconfigure(){
            this.ifShowModal_configure = true
        },
        //消息modal
        AddMessage(){
            this.$store.state.M_CreateMessage = true
        },
        //创建固件
        handleCreateConfigure(name) {
            this.$refs[name].validate((valid) => {
                if (valid) {
                    let CreatInfo = {
                      user_id:this.ID,
                      product_id:this.$store.state.CurProduction,
                      fname:this.formCreateConfigure.name,
                      fversion:this.formCreateConfigure.version,
                      fcontent:this.formCreateConfigure.file,
                    }
                    this.modal_loading = true
                    let DATA = {'users':CreatInfo}
                    axios.post(R_PRE_URL+'addfirmware',DATA
                    ).then((res)=> {
                        switch(res.data.result){
                          case 1:
                          this.$Message.success('创建新固件成功!')
                          this.ifShowModal = false
                          this.modal_loading = false
                          break
                          case 0:
                          this.$Message.error('创建新固件失败!')
                          this.modal_loading = false
                          break
                          default:
                          this.$Message.error('系统繁忙!')
                          this.modal_loading = false
                        }
                    }).catch((error)=> {
                        console.log(error)
                        this.$Message.error('系统繁忙，创建新固件失败!')
                        this.modal_loading = false
                    })
                    
                } else {
                    this.$Message.error('带*号的为必填项!');
                }
            })
        },
        //分页
        changePage(event){
          this.page_num = event
          this.GetFirmwareList()
        },
        //切换每页条数
        changePageSize(event){
          this.number = event
          this.GetFirmwareList()
        },
        //获取固件列表
        GetFirmwareList(){
            let FirmwareInfo = {
                userid:this.ID,
                product_id:this.$store.state.CurProduction,
                page:this.page_num,
                number:this.number
            }
            let DATA = {'users':FirmwareInfo}
            axios.post(R_PRE_URL+'firmware',DATA
            ).then((res)=> {
                // switch(res.data.result){
                //   case 1:
                //   this.FirmwareData = res.data.apkdetail
                //   this.Total = res.data.sunmun
                //   this.table_loading = false
                //   break
                //   case 0:
                //   this.$Message.error('获取固件列表失败!')
                //   this.table_loading = false
                //   break
                //   default:
                //   this.$Message.error('系统繁忙!')
                //   this.table_loading = false
                // }
            }).catch((error)=> {
                console.log(error)
                this.$Message.error('系统繁忙，获取固件列表失败!')
                this.table_loading = false
            })
        }
     

    }
  }
</script>
<style lang="scss" scoped>
.MessagePush{
    margin-top: 50px;
}
</style>
