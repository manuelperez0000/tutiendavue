<template>
  <div>
    <h1 class="bg-red">Esta es la tienda {{ this.id }}</h1>
  </div>
</template>
<script>
export default {
  data(){
    return{
      id: this.$route.params.id
    }
  },
  mounted(){
    this.$toasted.success('hello billo',{duration:2000,position:'top-center',fullWidth:true})
  }
}
</script>
