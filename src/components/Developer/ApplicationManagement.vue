<template>
    <div class="ApplicationManagement">
        <Row :gutter="16">
            <Col span="8">
                <Card style="width:300px">
                <p slot="title" style="height: 100%">
                    <img class="SmallImg" src="https://file.iviewui.com/dist/76ecb6e76d2c438065f90cd7f8fa7371.png">
                </p>
                <div slot="extra"  style="width: 150px">
                    <h3 class="Ellipsis">名称：声控开关声控开关</h3>
                    <p class="Ellipsis">智能能家居</p>
                    <p><Icon type="social-android" :size="22" class="colorBlue"></Icon> <Icon type="social-apple" :size="22" class="colorBlue"></Icon></p>
                </div>

                <Button type="text"  icon="ios-search" class="BigIcon"></Button>
                <Button type="text"  icon="compose" class="BigIcon FloatRight"></Button>
                
                <!-- <a href="#" slot="extra" @click.prevent="">
                    <ButtonGroup vertical>
                        <Button type="text" icon="eye"></Button>
                        <Button type="text" icon="compose"></Button>
                    </ButtonGroup>
                </a> -->
                </Card>
            </Col>
            <!-- <Col span="8">
                <Card style="width:80%">
                    <div style="text-align:left">
                        <img class="SmallImg" src="https://file.iviewui.com/dist/76ecb6e76d2c438065f90cd7f8fa7371.png">
                        <h3 class="Ellipsis">名称：声控开关</h3>
                        <p>类属：智能能家居</p>
                        <p>平台：<Icon type="social-android" :size="22" class="colorBlue"></Icon> <Icon type="social-apple" :size="22" class="colorBlue"></Icon></p>
                    </div>
                </Card>
            </Col>
            <Col span="8">
                <Card style="width:80%">
                    <div style="text-align:left">
                        <img class="SmallImg" src="https://file.iviewui.com/dist/76ecb6e76d2c438065f90cd7f8fa7371.png">
                        <h3 class="Ellipsis">名称：声控开关</h3>
                        <p>类属：智能能家居</p>
                        <p>平台：<Icon type="social-android" :size="22" class="colorBlue"></Icon> <Icon type="social-apple" :size="22" class="colorBlue"></Icon></p>
                    </div>
                </Card>
            </Col> -->
        </Row>
        
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
.ApplicationManagement{
    margin-top: 50px;
    .BigIcon{
        font-size: 24px;
    }

}
</style>
