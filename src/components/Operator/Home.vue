<template>
    <div class="Home">
        <div class="DataBlock">
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
        <!-- equipmentTrend -->
        <Schat :Info="equipmentTrend"/>
        <Schat :Info="userTrend"/>
        <SchatPie :Info="activationData"/>
        <SchatPie :Info="onlineData"/>
        <SchatPie :Info="modelData"/>
        <!-- <Row :gutter="16">
            <Col :xs="{ span: 24}" :lg="{ span: 8}">
                <SchatPie/>
            </Col>
            <Col :xs="{ span: 24}" :lg="{ span: 8}">
                <SchatPie/>
            </Col>
            <Col :xs="{ span: 24}" :lg="{ span: 8}">
                <SchatPie/>
            </Col>
        </Row> -->

    </div>
        
</template>
<script>
import Schat from '../../components/Common/Schat.vue'
import SchatPie from '../../components/Common/SchatPie.vue'
  export default{
    data: function () {
      return {
        equipmentTrend:{
            'Htit':'设备趋势',
            'Sdata':[
                {'BtName':'设备总数','value':'设备总数'},
                {'BtName':'设备激活数','value':'设备激活数'},
                {'BtName':'设备活跃数','value':'设备活跃数'}
            ]
        },
        userTrend:{
            'Htit':'用户趋势',
            'Sdata':[
                {'BtName':'累计用户','value':'累计用户'},
                {'BtName':'新增用户','value':'新增用户'},
                {'BtName':'活跃用户','value':'活跃用户'},
                {'BtName':'已绑定设备用户','value':'已绑定设备用户'}
            ]
        },
        activationData:{
            'Htit':'激活数据',
            'colorList':['#C2ED92','#81D125'],
            'kind':'activationData'
        },
        onlineData:{
            'Htit':'在线数据',
            'colorList':['#FAD2AF','#F18F48'],
            'kind':'onlineData'
        },
        modelData:{
            'Htit':'机型数据',
            'colorList':['#A7E2FF','#32B9FC'],
            'kind':'modelData'
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
        Schat,
        SchatPie
    },
    methods: {
     

    }
  }
</script>
<style lang="scss" scoped>
.DataBlock{
}
</style>
