<template>
    <div class="ApplicationManagement">
        <!-- 查询 -->
        <Row type="flex" justify="space-between" class="code-row-bg marginTB_40">
            <Col span="4">
                <Button type="error" icon="android-add" @click="AddApplication">新建应用</Button>
            </Col>
            <Col span="20" class="TextRight">
                <Input class="InlineBlock" v-model="A_keyword" placeholder="查找相关应用" style="width: 250px;"></Input>
                <Button type="primary" icon="ios-search">Search</Button>
            </Col>
        </Row>
        <!-- 应用列表 -->
        <h2>应用列表</h2>
        <div  class="marginTB_20">
            <Row :gutter="16" class="PaddingLR_10">
                <Col :xs="12" :sm="12" :md="12" :lg="8" class="marginB_20" v-for="(Application,Idx) in ApplicationList">
                    <Card>
                        <p slot="title" style="height: 100%">
                            <img class="SmallImg" :src="Application.apply_icon?Application.apply_icon:'https://file.iviewui.com/dist/76ecb6e76d2c438065f90cd7f8fa7371.png'">
                        </p>
                        <div slot="extra"  style="width: 150px">
                            <h3 class="Ellipsis">{{Application.apply_name}}</h3>
                            <p class="Ellipsis marginT_10">{{Application.apply_introduction}}</p>
                            <p class="marginT_10">
                                <Icon type="social-android" :size="22" :class="{'colorBlue':Application.android_name}"></Icon> 
                                <Icon type="social-apple" :size="22" :class="{'colorBlue':Application.ios_name}"></Icon>
                            </p>
                        </div>

                        <Button type="text"  icon="ios-search" class="BigIcon"></Button>
                        <Button type="text"  icon="compose" class="BigIcon FloatRight" @click="Detail_A(Idx)"></Button>
                    </Card>
                </Col>
            </Row>
        </div>
        <!-- 创建新应用 -->
        <CreateApplication :OriginType="0"/>
        <!-- 编辑应用信息 -->
        <!-- <EditApplicaiton :AppId="AppId" :EditInfo="EditInfo" v-if="ifShow"/> -->
        <!-- 创建新应用 -->
        <Modal v-model="ifEdit" width="600" :mask-closable="false" @on-visible-change="">
            <p slot="header">
                <Icon type="information-circled"></Icon>
                <span>创建新应用</span>
            </p>
            <div style="">
                <Form ref="formEdit" :model="formEdit" :rules="ruleEdit"  label-position="left" :label-width="100">
                    <FormItem label="应用分类" prop="A_kind">
                        <Select v-model="formEdit.A_kind" placeholder="请选择应用类别">
                            <Option value="智能家居">智能家居</Option>
                            <Option value="智慧社区">智慧社区</Option>
                            <Option value="智能硬件">智能硬件</Option>
                        </Select>
                    </FormItem>
                    <FormItem label="应用名称" prop="A_name">
                        <Input v-model="formEdit.A_name"></Input>
                    </FormItem>
                    <FormItem label="应用说明" prop="A_introduction">
                        <Input v-model="formEdit.A_introduction" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="请输入应用说明"></Input>
                    </FormItem>
                    <FormItem label="应用图标" prop="A_img">
                        <div class="demo-upload-list">
                            <template>
                                <img :src="formEdit.A_img?formEdit.A_img:'https://o5wwk8baw.qnssl.com/a42bdcc1178e62b4694c830f028db5c0/avatar'">
                            </template>
                        </div>
                        <Upload
                            :max-size="2048"
                            :on-format-error="handleFormatError"
                            :on-exceeded-size="handleMaxSize"
                            :before-upload="handleBeforeUpload"
                            multiple
                            type="drag"
                            action=""
                            style="display: inline-block;width:58px;">
                            <div style="width: 58px;height:58px;line-height: 58px;">
                                <Icon type="camera" size="20"></Icon>
                            </div>
                        </Upload>
                    </FormItem>
                    <FormItem label="应用包名" prop="A_android">
                        <Input v-model="formEdit.A_android" placeholder="请输入应用包名（50字以内）"></Input>
                    </FormItem>
                    <FormItem label="应用包名" prop="A_ios">
                        <Input v-model="formEdit.A_ios" placeholder="请输入Bundle Id（50字以内）"></Input>
                    </FormItem>
                </Form>
            </div>
            <div slot="footer" style="text-align:center">
                <Button type="error" size="large" :loading="modal_loading" @click="handleEdit('formEdit')">保存</Button>
                <Button type="primary" size="large"  @click="Del()">删除</Button>
            </div>
        </Modal>
    </div>
        
</template>
<script>
import Vue from 'vue'
import axios from 'axios'
import CryptoJS from "crypto-js"
import CreateApplication from "./Create/CreateApplicaiton"
import EditApplicaiton from "./Edit/EditApplicaiton"
  export default{
    data: function () {
      return {
        modal_loading:false,
        A_keyword:'',
        ApplicationList:[],
        AppId:'',
        EditInfo:'123',
        formEdit:{
            A_kind:'',
            A_name:'',
            A_introduction:'',
            A_img:'',
            A_android:'',
            A_ios:'',
        },
        ruleEdit: {
            A_kind: [
                { required: true, message: '请选择应用类别', trigger: 'change' }
            ],
            A_name: [
                { required: true, message: '应用名称不能为空', trigger: 'blur' }
            ],
        }
      }
    },
    mounted() {
        //this.uploadList = this.$refs.upload.fileList;
      
    },
    created() {
        this.GetApplication()
      
    },
    computed: {
        ID(){
            let ID = CryptoJS.AES.decrypt(this.$store.state.userInfo.userID,this.$store.state.PlainText).toString(CryptoJS.enc.Utf8)
            return ID
        },
        ifEdit:{
            get: function () {
              return this.$store.state.M_EditApplication
            },
            set: function (newValue) {
              this.$store.state.M_EditApplication = newValue
            }
        }
        
      
    },
    watch: {
      
    },
    components: {
        CreateApplication,
        EditApplicaiton
    },
    methods: {
        AddApplication(){
            this.$store.state.M_CreateApplication = true
        },
        Detail_A(Idx){
            let Info = this.ApplicationList[Idx]
            this.formEdit.A_kind = Info.apply_type
            this.formEdit.A_name = Info.apply_name
            this.formEdit.A_introduction = Info.apply_introduction
            this.formEdit.A_img = Info.apply_icon
            this.formEdit.A_android = Info.android_name
            this.formEdit.A_ios = Info.ios_name
            this.ImgSource = Info.apply_icon
            this.$store.state.M_EditApplication = true
        },
        // GetApplicationInfo(){
        //     axios.get(R_PRE_URL+'selectapp?id='+this.AppId
        //     ).then((res)=> {
        //         switch(res.data.result){
        //           case 1:
        //           let Info = res.data.applylist[0]
        //           this.formEdit.A_kind = Info.apply_type
        //           this.formEdit.A_name = Info.apply_name
        //           this.formEdit.A_introduction = Info.apply_introduction
        //           this.formEdit.A_img = Info.apply_icon
        //           this.formEdit.A_android = Info.android_name
        //           this.formEdit.A_ios = Info.ios_name
        //           this.ImgSource = Info.apply_icon
        //           break
        //           case 0:
        //           this.$Message.error('获取应用信息失败!')
        //           break
        //           default:
        //           this.$Message.error('系统繁忙!')
        //           this.modal_loading = false
        //         }
        //     }).catch((error)=> {
        //         console.log(error)
        //     })
        // },
        handleFormatError (file) {
            this.$Notice.warning({
                title: '提示',
                desc: '上传的图片格式不正确！'
            });
        },
        handleMaxSize (file) {
            this.$Notice.warning({
                title: '提示',
                desc: '上传的图片大小不能超过2M！'
            });
        },
        handleBeforeUpload (event) {
            var _this = this
            var file = event
            //_this.formApplication.FileName = file.name
            var reader = new FileReader();   
            reader.readAsDataURL(file);   
            reader.onload = function(e){
              _this.formEdit.A_img = this.result
            } 
        },
        handleEdit (name) {
            this.$refs[name].validate((valid) => {
                if (valid) {
                    let CreatInfo = {
                      applyid:this.AppId,
                      apply_type:this.formEdit.A_kind,
                      apply_name:this.formEdit.A_name,
                      apply_introduction:this.formEdit.A_introduction,
                      apply_icon:this.formEdit.A_img == this.ImgSource?'':this.formEdit.A_img ,
                      Android_name:this.formEdit.A_android,
                      ios_name:this.formEdit.A_ios
                    }
                    //this.modal_loading = true
                    let DATA = {'users':CreatInfo}
                    axios.post(R_PRE_URL+'updateapply',DATA
                    ).then((res)=> {
                        switch(res.data.result){
                          case 1:
                          this.$Message.success('保存成功!')
                          this.$store.state.M_EditApplication = false
                          this.modal_loading = false
                          break
                          case 0:
                          this.$Message.error('保存失败!')
                          this.modal_loading = false
                          break
                          default:
                          this.$Message.error('系统繁忙!')
                          this.modal_loading = false
                        }
                    }).catch((error)=> {
                        console.log(error)
                    })
                    
                } else {
                    this.$Message.error('带*号的为必填项!');
                }
            })
        },
        //获取应用列表
        GetApplication(){
            axios.get(R_PRE_URL+'selectallapply?userid='+this.ID
            ).then((res)=> {
                switch(res.data.result){
                  case 1:
                  this.ApplicationList = res.data.applylist
                  break
                  case 0:
                  this.$Message.error('获取应用列表失败!')
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
.ApplicationManagement{
    margin-top: 50px;
    .BigIcon{
        font-size: 24px;
    }
}
.demo-upload-list{
    display: inline-block;
    width: 60px;
    height: 60px;
    text-align: center;
    line-height: 60px;
    border: 1px solid transparent;
    border-radius: 4px;
    overflow: hidden;
    background: #fff;
    position: relative;
    box-shadow: 0 1px 1px rgba(0,0,0,.2);
    margin-right: 4px;
}
.demo-upload-list img{
    width: 100%;
    height: 100%;
}
.demo-upload-list-cover{
    display: none;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0,0,0,.6);
}
.demo-upload-list:hover .demo-upload-list-cover{
    display: block;
}
.demo-upload-list-cover i{
    color: #fff;
    font-size: 20px;
    cursor: pointer;
    margin: 0 2px;
}
</style>
