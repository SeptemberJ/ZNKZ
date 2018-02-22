<template>
    <!-- 创建新应用 -->
    <Modal v-model="ifShowModal" width="600" :mask-closable="false">
        <p slot="header">
            <Icon type="information-circled"></Icon>
            <span>创建新协议</span>
        </p>
        <div style="">
            <!-- <Form ref="formCreate" :model="formCreate" :rules="ruleCreate"  label-position="left" :label-width="100">
                <FormItem label="应用分类" prop="A_kind">
                    <Select v-model="formCreate.A_kind" placeholder="请选择应用类别">
                        <Option value="智能家居">智能家居</Option>
                        <Option value="智慧社区">智慧社区</Option>
                        <Option value="智能硬件">智能硬件</Option>
                    </Select>
                </FormItem>
                <FormItem label="应用名称" prop="A_name">
                    <Input v-model="formCreate.A_name"></Input>
                </FormItem>
                <FormItem label="应用说明" prop="A_introduction">
                    <Input v-model="formCreate.A_introduction" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="请输入应用说明"></Input>
                </FormItem>
                <FormItem label="应用图标" prop="A_img">
                    <div class="demo-upload-list">
                        <template>
                            <img :src="formCreate.A_img?formCreate.A_img:'/static/img/icon/application.png'">
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
                    <Input v-model="formCreate.A_android" placeholder="请输入应用包名（50字以内）"></Input>
                </FormItem>
                <FormItem label="应用包名" prop="A_ios">
                    <Input v-model="formCreate.A_ios" placeholder="请输入Bundle Id（50字以内）"></Input>
                </FormItem>
            </Form> -->
        </div>
        <div slot="footer" style="text-align:center">
            <Button type="error" size="large" :loading="modal_loading" @click="handleCreate('formCreate')">确定创建</Button>
            <Button type="primary" size="large"  @click="Next()">下一步</Button>
        </div>
    </Modal>
        
</template>
<script>
import Vue from 'vue'
import axios from 'axios'
import CryptoJS from "crypto-js"
  export default{
    props:['EditInfo'],
    data: function () {
      return {
        modal_loading:false,
        formCreate:{
            A_kind:'',
            A_name:'',
            A_introduction:'',
            A_img:'',
            A_android:'',
            A_ios:'',
        },
        ruleCreate: {
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
      
    },
    created() {
      
    },
    computed: {
        ID(){
            let ID = CryptoJS.AES.decrypt(this.$store.state.userInfo.userID,this.$store.state.PlainText).toString(CryptoJS.enc.Utf8)
            return ID
        },
        ifShowModal: {
            get: function () {
              return this.$store.state.M_CreateAgreement
            },
            set: function (newValue) {
              this.$store.state.M_CreateAgreement = false
            }
        },
      
    },
    watch: {
      
    },
    components: {
    },
    methods: {
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
              _this.formCreate.A_img = this.result
            } 
        },
        handleCreate (name) {
            this.$refs[name].validate((valid) => {
                if (valid) {
                    let CreatInfo = {
                      userid:this.ID,
                      apply_type:this.formCreate.A_kind,
                      apply_name:this.formCreate.A_name,
                      apply_introduction:this.formCreate.A_introduction,
                      apply_icon:this.formCreate.A_img,
                      Android_name:this.formCreate.A_android,
                      ios_name:this.formCreate.A_ios
                    }
                    this.modal_loading = true
                    let DATA = {'users':CreatInfo}
                    axios.post(R_PRE_URL+'insertapply',DATA
                    ).then((res)=> {
                        switch(res.data.result){
                          case 1:
                          this.$Message.success('创建协议成功!')
                          this.$store.state.M_CreateAgreement = false
                          this.modal_loading = false
                          this.$emit('refreshApplication')
                          break
                          case 2:
                          this.$Message.error('协议名称重复!')
                          this.modal_loading = false
                          break
                          case 0:
                          this.$Message.error('创建协议失败!')
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
     

    }
  }
</script>
<style scoped>
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
