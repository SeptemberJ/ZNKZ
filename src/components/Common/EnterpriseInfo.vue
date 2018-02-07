<template>
    <div class="EnterpriseInfo">
        <h2>企业信息</h2>
        <div class="BlockWrap marginTB_20">
        <Row type="flex" justify="center" class="code-row-bg">
            <Col :xs="8" :sm="8" :md="8" :lg="6">
                <div class="SmallBgBlock" :style="{background: 'url(static/img/cardSide.png)',backgroundRepeat:'no-repeat'}"></div>
            </Col>
            <Col :xs="16" :sm="16" :md="16" :lg="18">
                <Form label-position="left" ref="formInfo" :model="formInfo" :rules="ruleValidateInfo" :label-width="120">
                <FormItem label="企业ID">
                    {{formInfo.EId}}
                </FormItem>
                <FormItem label="企业名称" prop="EName">
                    <Input v-model="formInfo.EName" placeholder="请输入企业名称"></Input>
                </FormItem>
                <FormItem label="企业类别" prop="EKind">
                    <Select v-model="formInfo.EKind" placeholder="请选择企业类别">
                        <Option value="0">互联网</Option>
                        <Option value="1">工业</Option>
                        <Option value="2">农业</Option>
                        <Option value="3">医疗</Option>
                        <Option value="4">物联网</Option>
                        <Option value="5">家居</Option>
                    </Select>
                </FormItem>
                <FormItem label="联系人" prop="Contact">
                    <Input v-model="formInfo.Contact" placeholder="请输入联系人"></Input>
                </FormItem>
                <FormItem label="联系电话" prop="Phone">
                    <Input v-model="formInfo.Phone" placeholder="请输入联系电话"></Input>
                </FormItem>

                <Button @click="InfoSubmit('formInfo')" type="error">保存修改</Button>
            </Form>
            </Col>
        </Row>
            
        </div>
    </div>
</template>
<script>
import particles from 'particles.js'
  export default{
    data: function () {
      return {
        IfSeeKey:false,
        IfInfo:false,
        formInfo: {
            EId:'35395',
            EName: '',
            EKind: '',
            Contact: '',
            Phone: '',
        },
        ruleValidateInfo: {
            EName: [
                { required: true, message: '请输入企业名称！', trigger: 'blur' }
            ],
            EKind: [
                { required: true, message: '请选择企业类别！', trigger: 'change' }
            ],
            Contact: [
                { required: true, message: '请输入联系人！', trigger: 'blur' }
            ],
            Phone: [
                { required: true, message: '请输入联系电话！', trigger: 'blur' }
            ]
        },

      }
    },
    mounted() {
       //particlesJS.load('particlesEnterpriseInfo','/static/particlesDataE.js');
    },
    created() {
      
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
        InfoInfo(){
            this.IfInfo = true
            //this.$store.state.OperatorMenuCur = '修改个人信息'
        },
         BackInfo(){
            this.IfInfo = false
        },
        handleBeforeUpload(event){
            var _this = this
            var file = event
            //_this.formApplication.FileName = file.name
            var reader = new FileReader();   
            reader.readAsDataURL(file);   
            reader.onload = function(e){
              _this.formInfo.Avatar = this.result
            } 
        },
        InfoSubmit (name) {
            this.$refs[name].validate((valid) => {
                if (valid) {
                    console.log(this.formInfo)
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


.EnterpriseInfo{
    margin-top: 50px;
    form{
        width: calc(80% - 40px;);
        margin: 0 auto;
        padding: 20px;
        
    }
}


</style>
