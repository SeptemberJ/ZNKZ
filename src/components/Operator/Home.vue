<template>
    <div class="Home">
        <!-- 概览 -->
        <ColorfulBlock :Info="OverView"/>
        <!-- 设备趋势-->
        <LineChart :Info="equipmentTrend"/>
        <!-- 用户趋势 -->
        <LineChart :Info="userTrend"/>
        <!--  三大数据图 -->
        <PieChart :Info="activationData"/>
        <PieChart :Info="onlineData"/>
        <PieChart :Info="modelData"/>
        <!-- map分布图 -->
        <!-- <MapChart/> -->

        

    </div>
        
</template>
<script>
import Vue from 'vue'
import axios from 'axios'
import CryptoJS from "crypto-js"
import ColorfulBlock from '../../components/Common/ColorfulBlock.vue'
import LineChart from '../../components/Common/LineChart.vue'
import PieChart from '../../components/Common/PieChart.vue'
import MapChart from '../../components/Common/MapChart.vue'
import SchatPie from '../../components/Common/SchatPie.vue'
  export default{
    data: function () {
      return {
        OverView:'',
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
            'colorList':['#ff7f50','#87cefa'],
            'kind':'activationData',
            'url':'PieChart1'
        },
        onlineData:{
            'Htit':'在线数据',
            'colorList':['#ff69b4','#333'],
            'kind':'onlineData',
            'url':'PieChart2'
        },
        modelData:{
            'Htit':'机型数据',
            'colorList':['#6495ed','#ff69b4','#ba55d3', '#cd5c5c', '#ffa500'],
            'kind':'modelData',
            'url':'PieChart3'
        },

      }
    },
    mounted: function () {
      
    },
    created() {
        this.GetOverViewData()
      
    },
    computed: {
        ID(){
            let ID = CryptoJS.AES.decrypt(this.$store.state.userInfo.userID,this.$store.state.PlainText).toString(CryptoJS.enc.Utf8)
            return ID
        }
      
    },
    watch: {
      
    },
    components: {
        ColorfulBlock,
        LineChart,
        PieChart,
        MapChart,
        SchatPie
    },
    methods: {
        GetOverViewData(KIND){
            axios.get(R_PRE_URL + 'selectnumber?userid='+this.ID
              ).then((res)=> {
                this.OverView = res.data.info.overview
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
