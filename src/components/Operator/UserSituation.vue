<template>
    <div class="UserSituation">
        <!-- 概览 -->
        <ColorfulBlock :Info="UserSituation.overview"/>
        <!--  数据趋势-->
        <LineChart :Info="dataTrend"/>
        <!-- 用户数据 -->
        <div class="userData">
            <div>
                <Row>
                    <Col span="4"><h2>用户数据</h2></Col>
                    <Col span="20" class="TextRight">
                        注册时间：
                        <DatePicker type="date" placeholder="Select date" style="width: 200px;display: inline-block"></DatePicker>
                        <Button class="marginL_10" type="primary" @click="Export">导出</Button>
                    </Col>
                </Row>
            </div>
            
            <div  class="BlockWrap marginTB_20">
                <Table :data="tableData1" :columns="tableColumns1" stripe ref="table"></Table>
                <div style="margin: 10px;overflow: hidden">
                    <div style="float: right;">
                        <Page :total="3" :current="1" :page-size="2" @on-change="changePage"></Page>
                    </div>
                </div>
            </div>
        </div>
        
        
    </div>
</template>
<script>
import axios from 'axios'
import ColorfulBlock from '../../components/Common/ColorfulBlock.vue'
import LineChart from '../../components/Common/LineChart.vue'
  export default{
    data: function () {
      return {
        UserSituation:'',
        dataTrend:{
            'Htit':'数据趋势',
            'Sdata':[
                {'BtName':'用户总数','value':'用户总数'},
                {'BtName':'新增用户','value':'新增用户'}
            ]
        },
        tableData1: [
            {name:'张三',phone:'18234567890',origin:'扫码',signDate:'2017-09-09',onlineTime:'24h'},
            {name:'张三',phone:'18234567890',origin:'扫码',signDate:'2017-09-09',onlineTime:'24h'},
            {name:'张三',phone:'18234567890',origin:'扫码',signDate:'2017-09-09',onlineTime:'24h'}
        ],
                tableColumns1: [
                    {
                        title: '用户',
                        key: 'name'
                    },
                    {
                        title: '手机号',
                        key: 'phone'
                    },
                    {
                        title: '来源',
                        key: 'origin'
                    },
                    {
                        title: '注册时间',
                        key: 'signDate'
                    },
                    {
                        title: '最近在线时间',
                        key: 'onlineTime'
                    }
                ]
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
        LineChart
    },
    methods: {
        GetUserSituationData(KIND){
            axios.get('static/json/UserSituation.json'
              ).then((res)=> {
                this.UserSituation = res.data.Info
            }).catch((error)=> {
              console.log(error)
            })
        },
        Export(){
            this.$refs.table.exportCsv({
                filename: 'The original data'
            });
        },
        formatDate (date) {
            const y = date.getFullYear();
            let m = date.getMonth() + 1;
            m = m < 10 ? '0' + m : m;
            let d = date.getDate();
            d = d < 10 ? ('0' + d) : d;
            return y + '-' + m + '-' + d;
        },
        changePage () {
            this.tableData1 = this.mockTableData1();
        }
     

    }
  }
</script>
<style lang="scss" scoped>
.UserSituation{
    margin-top: 50px;
    .userData{
        width: 100%;
          display: block;
          float: left;
          clear: both;
    }
}
</style>
