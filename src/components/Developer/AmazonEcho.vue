<template>
    <div class="AmazonEcho">
        <h2>互联设备</h2>
        <Card :bordered="true" class="marginTB_20">
            <div>
                <Row>
                    <Col span="8"><img src="http://manage.dtston.com/static/img/bg_amazon_echo_r.png"></Col>
                    <Col span="16">
                        <h1>Amazon Echo简介</h1>
                        <p>Amazon Echo——人工智能音箱</p>
                        <p>Echo语音与设备智能交互，实现您专属的应用化场景。</p>
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
.AmazonEcho{
    margin-top: 50px;
}
</style>
