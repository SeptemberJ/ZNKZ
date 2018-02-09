<template>
<!-- <div id="main" style="width: 600px;height: 400px;"></div> -->
	<div class="LineChart">
        <h2>{{Info.Htit}}</h2>
        <div  class="BlockWrap marginTB_20 PaddingTB_50">
          <Row type="flex" justify="space-around" class="code-row-bg">
              <Col class="marginTB_10 TextCenter" :xs="{ span: 24,offset: 0}" :lg="{ span: 24}">
                <Row type="flex" justify="center" class="code-row-bg">
                  <Col span="12">
                    <ButtonGroup shape="circle">
                      <Button :type="BtCur == BtIdx?'primary':'ghost'" @click.prevent="BtTab(Bt.value,BtIdx)" v-for="(Bt,BtIdx) in Info.Sdata">
                          {{Bt.BtName}}
                      </Button>
                    </ButtonGroup>
                  </Col>
                  <Col span="4">
                    <Select v-model="Day">
                        <Option value="0">前7天</Option>
                        <Option value="1">前15天</Option>
                        <Option value="2">前30天</Option>
                    </Select>
                  </Col>
                </Row>
                  
                  
              </Col>
              <Col class="marginTB_10 TextCenter" :xs="{ span: 24,offset: 0}" :lg="{ span: 24}">
                  <div :id="Info.Htit" style="width: 100%;height: 500px;padding: 0 20px;"></div>
              </Col>
              
          </Row>
        </div>
	</div>
</template>
<script>


import Schart from 'vue-schart'
import axios from 'axios'
import echarts from 'echarts'

  export default{
    props:['Info'],
    data: function () {
      return {
        Day:0,
        BtCur:0,
        charts: '',
        data:''

      }
    },
    mounted() {
      this.getChartData('LineChart1')
      
      
    },
    created() {
      
    },
    computed: {
      
    },
    watch: {
      
    },
    components: {
      Schart
      

    },
    methods: {
      BtTab(VALUE,IDX){
        console.log(IDX+'---'+VALUE)
        this.BtCur = IDX
        switch(IDX){
          case 0:
          this.getChartData('LineChart1')
          break
          case 1:
          this.getChartData('LineChart2')
          break
          default:
          this.getChartData('Schat')
        }
      },
      getChartData(KIND){
        var base = new Date().getTime()//+new Date(2016, 9, 8);
        var oneDay = 24 * 3600 * 1000
        var data = []

        axios.get('static/json/'+ KIND +'.json'
          ).then((res)=> {
            let onlyData = res.data.info
            for (var i = 1; i < 7; i++) {
                var now = new Date(base -= oneDay)
                var dayStr = [now.getFullYear(), now.getMonth() + 1, now.getDate()].join('-')
                data.push([dayStr, onlyData[i]])
            }
            this.data = data
            this.drawPie(this.Info.Htit)
        }).catch((error)=> {
          console.log(error)
        })
      },
      drawPie(id){
               this.charts = echarts.init(document.getElementById(id))
               this.charts.setOption({
                animation: false,
                title: {
                    left: 'center',
                    text: '',
                    subtext: '',
                },
                legend: {
                    top: 'bottom',
                    data:['意向']
                },
                tooltip: {
                    triggerOn: 'click',
                    position: function (pt) {
                        return [pt[0], 130];
                    }
                },
                toolbox: {
                    left: 'center',
                    itemSize: 25,
                    top: 15,
                    feature: {
                        dataZoom: {
                            yAxisIndex: 'none'
                        },
                        restore: {}
                    }
                },
                xAxis: {
                    type: 'time',
                    //boundaryGap: [0, 100],
                    axisPointer: {
                        //value: '',
                        snap: true,
                        lineStyle: {
                            color: '#004E52',
                            opacity: 0.5,
                            width: 2
                        },
                        label: {
                            show: false,
                            formatter: function (params) {
                                return echarts.format.formatTime('yyyy-MM-dd', params.value);
                            },
                            backgroundColor: '#004E52'
                        },
                        handle: {
                            show: true,
                            color: '#004E52',
                            top:30
                        }
                    },
                    splitLine: {
                        show: false
                    }
                },
                yAxis: {
                    type: 'value',
                    axisTick: {
                        inside: true
                    },
                    splitLine: {
                        show: true
                    },
                    axisLabel: {
                        inside: true,
                        formatter: '{value}\n'
                    },
                    z: 10
                },
                grid: {
                    top: 110,
                    left: 20,
                    right: 20,
                    height: 300
                },
                dataZoom: [{
                    type: 'inside',
                    throttle: 50
                }],
                series: [
                    {
                        name:'用户人数',
                        type:'line',
                        smooth: true,
                        symbol: 'circle',
                        symbolSize: 5,
                        sampling: 'average',
                        itemStyle: {
                            normal: {
                                color: '#8ec6ad'
                            }
                        },
                        stack: 'a',
                        areaStyle: {
                            normal: {
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 0,
                                    color: '#8ec6ad'
                                }, {
                                    offset: 1,
                                    color: '#ffe'
                                }])
                            }
                        },
                        data: this.data
                    }

                ]
               })
            }
    }
  }
</script>
<style lang="scss">
.LineChart{
  width: 100%;
  display: block;
  float: left;
  clear: both;
}
</style>