<template>
    <div class="UserSituation">
        <ColorfulBlock :Info="UserSituation.overview"/>
    </div>
        
</template>
<script>
import axios from 'axios'
import ColorfulBlock from '../../components/Common/ColorfulBlock.vue'
  export default{
    data: function () {
      return {
        UserSituation:''
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
        ColorfulBlock
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
     

    }
  }
</script>
<style scoped>
.UserSituation{
    margin-top: 50px;
}
</style>
