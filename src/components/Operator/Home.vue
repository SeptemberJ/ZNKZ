<template>
    <div class="Home">
        <div>
            <h2>概览</h2>
            <div class="BlockWrap marginTB_20">
                <Row type="flex" justify="space-around" class="code-row-bg">
                    <Col class="marginTB_10" :xs="{ span: 10,offset: 1}" :lg="{ span: 4}">
                        <Card :bordered="true" shadow style="background-color: #1AD3A8">
                            <p slot="title" class="colorWhite">用户总数</p>
                            <h2 class="colorWhite">6</h2>
                        </Card>
                    </Col>
                    <Col class="marginTB_10" :xs="{ span: 10,offset: 1}" :lg="{ span: 4}">
                        <Card :bordered="true" shadow style="background-color: #32B9FC">
                            <p slot="title" class="colorWhite">设备总数</p>
                            <h2 class="colorWhite">- -</h2>
                        </Card>
                    </Col>
                   <Col class="marginTB_10" :xs="{ span: 10,offset: 1}" :lg="{ span: 4}">
                        <Card :bordered="true" shadow style="background-color: #81D125">
                            <p slot="title" class="colorWhite">设备激活数</p>
                            <h2 class="colorWhite">- -</h2>
                        </Card>
                    </Col>
                    <Col class="marginTB_10" :xs="{ span: 10,offset: 1}" :lg="{ span: 4}">
                        <Card :bordered="true" shadow style="background-color: #F18F48">
                            <p slot="title" class="colorWhite">设备在线数</p>
                            <h2 class="colorWhite">- -</h2>
                        </Card>
                    </Col>
                </Row>
            </div>
        </div>
        <Schat/>

    </div>
        
</template>
<script>
import Schat from '../../components/Common/Schat.vue'
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
        Schat
    },
    methods: {
     

    }
  }
</script>
<style scoped>

</style>
