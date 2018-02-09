<template>
<div class="CircleChart">
    <h2>数据透视</h2>
    <div  class="BlockWrap marginTB_20 PaddingTB_50">
      <Row type="flex" justify="space-around" class="code-row-bg">
          <Col class="marginTB_10 TextCenter" :xs="{ span: 24,offset: 0}" :lg="{ span: 8}">
          	<iCircle
		        :size="200"
		        :trail-width="4"
		        :stroke-width="5"
		        :percent="15"
		        stroke-linecap="square"
		        stroke-color="#43a3fb">
		        <div class="demo-Circle-custom">
		            <h1>昨日活跃率</h1>
		            <p></p>
		            <span>
		                <i>15%</i>
		            </span>
		        </div>
		    </iCircle>
          </Col>
          <Col class="marginTB_10 TextCenter" :xs="{ span: 24,offset: 0}" :lg="{ span: 8}">
          	<iCircle
		        :size="200"
		        :trail-width="4"
		        :stroke-width="5"
		        :percent="55"
		        stroke-linecap="square"
		        stroke-color="#43a3fb">
		        <div class="demo-Circle-custom">
		            <h1>7日活跃率</h1>
		            <p></p>
		            <span>
		                <i>55%</i>
		            </span>
		        </div>
		    </iCircle>
          </Col>
          <Col class="marginTB_10 TextCenter" :xs="{ span: 24,offset: 0}" :lg="{ span: 8}">
          	<iCircle
		        :size="200"
		        :trail-width="4"
		        :stroke-width="5"
		        :percent="75"
		        stroke-linecap="square"
		        stroke-color="#43a3fb">
		        <div class="demo-Circle-custom">
		            <h1>30日活跃率</h1>
		            <p></p>
		            <span>
		                <i>75%</i>
		            </span>
		        </div>
		    </iCircle>
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

      }
    },
    mounted() {
      
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

    }
}
</script>
<style lang="scss">
.CircleChart{
  width: 100%;
  display: block;
  float: left;
  clear: both;
}
    .demo-Circle-custom{
        & h1{
            color: #3f414d;
            font-size: 24px;
            font-weight: normal;
        }
        & p{
            color: #657180;
            font-size: 18px;
            margin: 10px 0 15px;
        }
        & span{
            display: block;
            padding-top: 15px;
            color: #657180;
            font-size: 14px;
            &:before{
                content: '';
                display: block;
                width: 50px;
                height: 1px;
                margin: 0 auto;
                background: #e0e3e6;
                position: relative;
                top: -15px;
            };
        }
        & span i{
            font-style: normal;
            color: #3f414d;
        }
    }
</style>