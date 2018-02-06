<template>
    <div class="IndividualAccount">
        <div v-if="!IfModify">
        <h2>个人账号</h2>
            <div class="BlockWrap marginTB_20">
                <Form label-position="left" ref="formInfo" :model="formInfo" :rules="ruleValidateInfo" :label-width="120">
                    <FormItem label="头像">
                        <img :style="{width:'150px',height:'150px'}" src="https://i.loli.net/2017/08/21/599a521472424.jpg" />
                    </FormItem>
                    <FormItem label="姓名">
                        <!-- <Input v-model="formInfo.Name" placeholder="Enter something..."></Input> -->
                        {{formInfo.Name}}
                    </FormItem>
                    <FormItem label="账号">
                        <!-- <Input v-model="formInfo.Account" placeholder="Enter something..."></Input> -->
                        {{formInfo.Account}}
                    </FormItem>
                    <FormItem label="密码">
                        <!-- <Input type="password" v-model="formInfo.Psd" placeholder="Enter something..."></Input> -->
                        ************
                    </FormItem>
                    <FormItem label="上次登录时间">
                        <!-- <Input v-model="formInfo.LastTime" placeholder="Enter something..."></Input> -->
                        {{formInfo.LastTime}}
                    </FormItem>
                    <FormItem label="ID">
                        <!-- <Input v-model="formInfo.ID" placeholder="Enter something..."></Input> -->
                        {{formInfo.ID}}
                    </FormItem>
                    <FormItem label="ACCESS KEY">
                        <Button @click="SeeKey" type="warning" shape="circle" icon="ios-search">查看</Button>
                    </FormItem>
                    <Button @click="ModifyInfo" type="error">修改</Button>
                </Form>
            </div>
            <!-- 查看key -->
            <Modal v-model="IfSeeKey" width="360">
                <p slot="header" style="color:#f60;">
                    <Icon type="android-settings"></Icon>
                    <span>ACCESS KEY</span>
                </p>
                <div>
                    <h3>当前：Bqc03ClKuwFWR62DnwQpufvXUEjPdpxF</h3>
                    <p>(点击下方"重置"按钮可进行重置")</p>
                </div>
                <div slot="footer">
                    <Button type="error" size="large" @click="RestKey">重置</Button>
                </div>
            </Modal>
        </div>
        <!-- 修改个人账号信息 -->
        <div v-if="IfModify">
            <h2>修改个人账号信息</h2>
            <div class="BlockWrap marginTB_20">
                <Form label-position="left" ref="formModify" :model="formModify" :rules="ruleValidateModify" :label-width="120">
                    <FormItem label="账号">
                        {{formModify.Account}}
                    </FormItem>
                    <FormItem label="头像">
                        <img :style="{width:'150px',height:'150px'}" src="https://i.loli.net/2017/08/21/599a521472424.jpg" />
                    </FormItem>
                    <FormItem label="姓名">
                        <Input v-model="formModify.Name" placeholder="请输入姓名"></Input>
                    </FormItem>
                    <FormItem label="密码">
                        <Input type="password" v-model="formModify.Psd" placeholder="请输入密码"></Input>
                    </FormItem>
                    <FormItem label="确认密码">
                        <Input type="password" v-model="formModify.PsdAgain" placeholder="请再次输入密码"></Input>
                    </FormItem>

                    <Button @click="" type="error">提交</Button>
                    <Button @click="BackInfo" type="primary">返回</Button>
                    
                    
                    
                </Form>
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
            Name: 'shbt',
            Account: '15722500690',
            Psd: '123',
            LastTime: '2018-02-06 12:32:31',
            ID: '987',
            Key: '',
        },
        ruleValidateInfo: {
            Name: [
                { required: true, message: 'The name cannot be empty', trigger: 'blur' }
            ]
        },
        formModify:{
            Name: 'shbt',
            Account: '15722500690',
            Psd: '',
            PsdAgain:'',
        },
        ruleValidateModify: {
            Name: [
                { required: true, message: 'The name cannot be empty', trigger: 'blur' }
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
        },
        BackInfo(){
            this.IfModify = false
        },
     

    }
  }
</script>
<style lang="scss" scoped>
.IndividualAccount{
    margin-top: 50px;
    form{
        width: 300px;
        margin: 0 auto;
    }
}


</style>
