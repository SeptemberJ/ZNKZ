<template>
    <div class="IndividualAccount">
        <div v-if="!IfModify">
        <h2>个人账号</h2>
            <div class="BlockWrap marginTB_20">
                <Row type="flex" justify="center" class="code-row-bg">
                    <Col :xs="12" :sm="12" :md="10" :lg="9">
                        <div class="SmallBgBlock" :style="{background: 'url(static/img/card.png)',backgroundRepeat:'no-repeat'}"></div>
                    </Col>
                    <Col :xs="12" :sm="12" :md="14" :lg="15">
                        <Form label-position="left" ref="formInfo" :model="formInfo" :rules="ruleValidateInfo" :label-width="120">
                            <FormItem label="头像"  prop="Avatar">
                                <img :style="{width:'150px',height:'150px'}" src="https://i.loli.net/2017/08/21/599a521472424.jpg" />
                            </FormItem>
                            <FormItem label="姓名"  prop="Name">
                                {{formInfo.Name}}
                            </FormItem>
                            <FormItem label="账号"  prop="Account">
                                {{formInfo.Account}}
                            </FormItem>
                            <FormItem label="密码"  prop="Psd">
                                ************
                            </FormItem>
                            <FormItem label="上次登录时间"  prop="LastTime">
                                {{formInfo.LastTime}}
                            </FormItem>
                            <FormItem label="ID"  prop="PsdAgain">
                                {{formInfo.ID}}
                            </FormItem>
                            <FormItem label="ACCESS KEY"  prop="Key">
                                <Button @click="SeeKey" type="warning" shape="circle" icon="ios-search">查看</Button>
                            </FormItem>
                            <Button @click="ModifyInfo" type="error">修改信息</Button>
                        </Form>
                    </Col>
                </Row>
                
            </div>

            <!-- 查看key -->
            <Modal v-model="IfSeeKey" width="360">
                <p slot="header" style="">
                    <Icon type="android-settings"></Icon>
                    <span>ACCESS KEY</span>
                </p>
                <div>
                    <h3>您当前的ACCESS KEY为：</h3>
                    <h3 class="colorBlue">Bqc03ClKuwFWR62DnwQpufvXUEjPdpxF</h3>
                    <p>(点击下方"重置"按钮可进行重置)</p>
                </div>
                <div slot="footer">
                    <Button type="error" size="large" @click="RestKey">重置</Button>
                </div>
            </Modal>
        </div>
        <div v-else class="ModifyInfo">
        <!-- 修改个人账号信息 -->
        <div>
            <h2>修改个人账号信息</h2>
            <div class="BlockWrap marginTB_20">
                <Row type="flex" justify="center" class="code-row-bg">
                    <Col span="24" :style="{height: '117px'}">
                        <div class="SmallBgBlock" :style="{background: 'url(static/img/cardTop.png)',backgroundRepeat:'repeat'}"></div>
                    </Col>
                    <Col span="24">
                        <Form label-position="left" ref="formModify" :model="formModify" :rules="ruleValidateModify" :label-width="120">
                            <FormItem label="账号">
                                {{formModify.Account}}
                            </FormItem>
                            <FormItem label="头像">
                                <img :style="{width:'150px',height:'150px'}" :src="formModify.Avatar" />
                            </FormItem>
                            <FormItem label="">
                                <Upload action="//jsonplaceholder.typicode.com/posts/"
                                :before-upload="handleBeforeUpload"
                                >
                                    <Button type="ghost" icon="ios-loop-strong">更换头像</Button>
                                </Upload>
                            </FormItem>
                            <FormItem label="姓名" prop="Name">
                                <Input v-model="formModify.Name" placeholder="请输入姓名"></Input>
                            </FormItem>
                            <FormItem label="密码" prop="Psd">
                                <Input type="password" v-model="formModify.Psd" placeholder="请输入密码"></Input>
                            </FormItem>
                            <FormItem label="确认密码" prop="PsdAgain">
                                <Input type="password" v-model="formModify.PsdAgain" placeholder="请再次输入密码"></Input>
                            </FormItem>

                            <Button @click="ModifySubmit('formModify')" type="error">保存修改</Button>
                            <Button class="marginL_20" @click="BackInfo" type="primary">返回</Button>
                        </Form>
                    </Col>
                </Row>
                
            </div>
        </div>

    </div>
    </div>
</template>
<script>

  export default{
    data: function () {
      return {
        IfSeeKey:false,
        IfModify:false,
        formInfo: {
            Avatar:'',
            Name: 'shbt',
            Account: '15722500690',
            Psd: '123',
            LastTime: '2018-02-06 12:32:31',
            ID: '987',
            Key: '',
        },
        ruleValidateInfo: {
        },
        formModify:{
            Avatar:'https://i.loli.net/2017/08/21/599a521472424.jpg',
            Name: 'shbt',
            Account: '15722500690',
            Psd: '',
            PsdAgain:'',
        },
        ruleValidateModify: {
            Name: [
                { required: true, message: '请输入姓名！', trigger: 'blur' }
            ],
            Psd: [
                { required: true, message: '请输入新密码！', trigger: 'blur' }
            ],
            PsdAgain: [
                { required: true, message: '请确认新密码！', trigger: 'blur' }
            ]
        },

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
    },
    methods: {
        SeeKey(){
            this.IfSeeKey = true
        },
        RestKey(){

        },
        ModifyInfo(){
            this.IfModify = true
            //this.$store.state.OperatorMenuCur = '修改个人信息'
        },
         BackInfo(){
            this.IfModify = false
        },
        handleBeforeUpload(event){
            var _this = this
            var file = event
            //_this.formApplication.FileName = file.name
            var reader = new FileReader();   
            reader.readAsDataURL(file);   
            reader.onload = function(e){
              _this.formModify.Avatar = this.result
            } 
        },
        ModifySubmit (name) {
            this.$refs[name].validate((valid) => {
                if (valid) {
                    console.log(this.formModify)
                    this.$Message.success('修改个人账号信息成功!');
                } else {
                    this.$Message.error('带*号为必填项!');
                }
            })
        },
     

    }
  }
</script>
<style lang="scss" scoped>
.IndividualAccount{
    margin-top: 50px;
    form{
        width: calc(60% - 20px;);
        margin: 0 auto;
        padding: 20px 10px;
    }
}


</style>
