<template>
    <div class="Home">
        <ColorfulBlock :Info="HomeData.overview"/>
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
import axios from 'axios'
import ColorfulBlock from '../../components/Common/ColorfulBlock.vue'
import Schat from '../../components/Common/Schat.vue'
import SchatPie from '../../components/Common/SchatPie.vue'
  export default{
    data: function () {
      return {
        HomeData:'',
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
    created() {
        this.GetUserSituationData()
      
    },
    computed: {
      
    },
    watch: {
      
    },
    components: {
        ColorfulBlock,
        Schat,
        SchatPie
    },
    methods: {
        GetUserSituationData(KIND){
            axios.get('static/json/Home.json'
              ).then((res)=> {
                this.HomeData = res.data.Info
            }).catch((error)=> {
              console.log(error)
            })
        },
     

    }
  }
</script>
<style lang="scss" scoped>
.Home{
    margin-top: 50px;
}
</style>
