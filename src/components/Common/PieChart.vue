<template>
<div class="PieChart">
    <h2>{{Info.Htit}}</h2>
    <div  class="BlockWrap marginTB_20 PaddingTB_50">
      <Row type="flex" justify="space-around" class="code-row-bg">
          <Col class="marginTB_10 TextCenter" :xs="{ span: 24,offset: 0}" :lg="{ span: 24}">
              <div :id="Info.Htit" style="width: 100%;height: 500px;padding: 0 20px;"></div>
          </Col>
          
      </Row>
        
    </div>
  </div>
</template>
<script>
import axios from 'axios'
import echarts from 'echarts'

  export default{
    props:['Info'],
    data: function () {
      return {
        charts: '',

      }
    },
    mounted() {
      this.getChartData()
      
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
      getChartData(){
        axios.get('static/json/'+ this.Info.url +'.json'
          ).then((res)=> {
            let PieData = res.data.info
            this.drawPie(this.Info.Htit,PieData.column_name,PieData.column_data)
        }).catch((error)=> {
          console.log(error)
        })
      },
      drawPie(id,Name,Data){
               this.charts = echarts.init(document.getElementById(id))
               this.charts.setOption({
                color:this.Info.colorList,
                title : {
                    text: '',
                    subtext: '',
                    x:'center'
                },
                tooltip : {
                    trigger: 'item',
                    formatter: "{a} <br/>{b} : {c} ({d}%)"
                },
                legend: {
                    x : 'center',
                    y : 'bottom',
                    data:Name
                },
                toolbox: {
                    show : true,
                    feature : {
                        mark : {show: true},
                        dataView : {show: true, readOnly: false},
                        magicType : {
                            show: true,
                            type: ['pie', 'funnel']
                        },
                        restore : {show: true},
                        saveAsImage : {show: true}
                    }
                },
                calculable : true,
                series : [
                    {
                        name:id,
                        type:'pie',
                        radius : [30, 110],
                        //center : ['75%', '50%'],
                        roseType : 'area',
                        data:Data
                    }
                ]
               })
      }

    }
  }
  </script>
<style lang="scss">

</style>