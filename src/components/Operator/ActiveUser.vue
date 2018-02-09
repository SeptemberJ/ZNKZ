<template>
    <div class="ActiveUser">
        <!-- 概览 -->
        <ColorfulBlock :Info="ActiveUser.overview"/>
        <!--  数据趋势-->
        <LineChart :Info="dataTrend"/>
        <!-- 数据透视 -->
        <CircleChart/>
    </div>
</template>
<script>
import axios from 'axios'
import ColorfulBlock from '../../components/Common/ColorfulBlock.vue'
import LineChart from '../../components/Common/LineChart.vue'
import CircleChart from '../../components/Common/CircleChart.vue'
  export default{
    data: function () {
      return {
        ActiveUser:'',
        dataTrend:{
            'Htit':'数据趋势',
            'Sdata':[
                {'BtName':'活跃用户','value':'活跃用户'}
            ]
        },
      }
    },
    mounted() {
      
    },
    created() {
        this.GetActiveUserData()
      
    },
    computed: {
      
    },
    watch: {
      
    },
    components: {
        ColorfulBlock,
        LineChart,
        CircleChart
    },
    methods: {
        GetActiveUserData(KIND){
            axios.get('static/json/ActiveUser.json'
              ).then((res)=> {
                this.ActiveUser = res.data.Info
            }).catch((error)=> {
              console.log(error)
            })
        },
     

    }
  }
</script>
<style lang="scss" scoped>
.ActiveUser{
    margin-top: 50px;
    .userData{
        width: 100%;
          display: block;
          float: left;
          clear: both;
    }
}
</style>
