<template>
    <div class="GoogleHome">
       <h2>互联设备</h2>
       <Card :bordered="true" class="marginTB_20">
            <div>
                <Row>
                    <Col span="8"><img src="http://manage.dtston.com/static/img/bg_google_home_r.png"></Col>
                    <Col span="16">
                        <h1>Google Home简介</h1>
                        <p>Google Home——人工智能音箱 </p>
                        <p>Home语音控制您的音响、灯光、恒温器，助您搭建家庭的控制中心。</p>
                        <Button type="primary" class="marginT_20">接入流程</Button>
                    </Col>
                </Row>
            </div>
        </Card>
        <Card :bordered="true" class="marginTB_20">
            <div>
                <Row>
                    <Col span="8"><img src="http://manage.dtston.com/static/img/bg_google_home_r.png"></Col>
                    <Col span="16">
                        <h1>联系方式</h1>
                        <p>商务合作： 400-889-3788</p>
                        <p>总机号码： 0755-29162978</p>
                        <p>邮箱地址： support@dtston.com</p>
                    </Col>
                </Row>
            </div>
        </Card>
    </div>
        
</template>
<script>

  export default{
    data: function () {
      return {
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
     

    }
  }
</script>
<style lang="scss" scoped>
.GoogleHome{
    margin-top: 50px;
}
</style>
