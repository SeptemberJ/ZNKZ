<template>
    <div id="particlesLogin">
      <div class="Login">
        <div class="LoginBox">
          <Row class="marginTB_20 TextCenter">
              <Col span="24"><h2 class="colorWhite">登录</h2></Col>
          </Row>
          <Form ref="formLogin" :model="formLogin" :rules="ruleLogin">
            <Row>
              <Col span="24">
                <FormItem prop="phone">
                  <Input class="transparentBg" type="text" v-model="formLogin.phone" placeholder="用户名">
                      <Icon type="ios-person-outline" slot="prepend" size="22"></Icon>
                  </Input>
                </FormItem>
                <FormItem prop="password">
                    <Input class="transparentBg" type="password" v-model="formLogin.password" placeholder="密码">
                        <Icon type="ios-locked-outline" slot="prepend" size="22"></Icon>
                    </Input>
                </FormItem>
                <FormItem>
                    <Button class="colorWhite" type="text" @click="ToModify">忘记密码</Button>
                    <Button class="colorWhite" type="text" @click="ToSign" style="float: right">去注册</Button>
                </FormItem>
                <FormItem>
                    <Button type="primary" @click="handleSubmit('formLogin')">登录</Button>
                </FormItem>
              </Col>
            </Row>
          </Form>
        </div>
        
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
import particles from 'particles.js'
import CryptoJS from "crypto-js"
import {setCookie,getCookie,getCryptoJsCookie,Encrypt,Decrypt} from '../../util/utils'

  export default{
    data: function () {
      return {
        ifSpin:false,
        formLogin: {
            phone: '',
            password: ''
        },
        ruleLogin: {
            phone: [
                { required: true, message: '请输入手机号', trigger: 'blur' }
            ],
            password: [
                { required: true, message: '请输入密码', trigger: 'blur' }
            ]
        }
      }
    },
    mounted(){
     particlesJS.load('particlesLogin','/static/particlesData.js');
    },
   created() {
     
   },
   computed: {
    
   },
    components: {
      
    },
    
    methods: {
      //注册
      ToSign(){
        this.$router.push({name:'注册'})
      },
      //修改密码
      ToModify(){
        this.$router.push({name:'修改密码'})
      },
      handleSubmit(name) {
          this.$refs[name].validate((valid) => {
              if (valid) {
                let cookieStr = this.formLogin.phone.toString() + this.formLogin.password.toString()
                let LoginInfo = {
                  fmobile:this.formLogin.phone,
                  fpassword:CryptoJS.MD5(this.formLogin.password).toString(),
                }
                this.$store.state.IfLoading = true
                let DATA = {'users':LoginInfo}
                axios.post(R_PRE_URL+'login',DATA
                  ).then((res)=> {
                    switch(res.data.result){
                      case 1:
                      let Encryption_name = CryptoJS.AES.encrypt(res.data.fname,this.$store.state.PlainText).toString()
                      let Encryption_id = CryptoJS.AES.encrypt(res.data.ID,this.$store.state.PlainText).toString()
                      localStorage.setItem("BT_name",Encryption_name)
                      localStorage.setItem("BT_id",Encryption_id)
                      this.$store.state.userInfo.username = Encryption_name
                      this.$store.state.userInfo.userID = Encryption_id
                      setCookie('btznkz',Encrypt(cookieStr),1)
                      this.$router.push({name:'运营者平台'})
                      break
                      case 0:
                      this.$Message.error('用户名或密码错误!')
                      break
                      default:
                      this.$Message.error('系统繁忙!')
                    }
                    this.$store.state.IfLoading = false
                  }).catch((error)=> {
                    console.log(error)
                  })

              } else {
                  this.$Message.error('请输入用户名或密码!');
              }
          })
      }
      
    }
  }

</script>
<style lang="scss" scoped>
#particlesLogin{
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #245787;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;
  .Login{
    .LoginBox{
      width: 80%;
      color: #fff;
      max-width: 500px;
      padding:20px 0;
      border-radius: 5px;
      background: transparent;
      position: fixed;
      top: 50%;
      left: 50%;
      webkit-box-shadow: 0 0 9px #39f;
      -moz-box-shadow: 0 0 9px #39f;
      box-shadow: 0 0 9px #39f;
      transform:translate(-50%,-50%);
      -ms-transform:translate(-50%,-50%);   /* IE 9 */
      -moz-transform:translate(-50%,-50%);  /* Firefox */
      -webkit-transform:translate(-50%,-50%); /* Safari 和 Chrome */
      -o-transform:translate(-50%,-50%); 
      form{
        width: 90%;
        margin: 0 auto;
      }


    }
  }
}

</style>
