<template>
    <div class="EquipmentCondition">
        设备情况
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
    created() {
        //this.GetOverViewData()
      
    },
    computed: {
      
    },
    watch: {
      
    },
    components: {
    },
    methods: {
        GetOverViewData(KIND){
            axios.post(R_PRE_URL + 'selectnumber'
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
.EquipmentCondition{
    margin-top: 50px;
}
</style>
