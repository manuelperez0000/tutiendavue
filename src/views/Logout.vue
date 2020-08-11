<template>
    <div class="body">
        <Navegador v-bind="estado"></Navegador>
        <div class="cover-back">
            <div class="container pt-4">
                <div class="row">
                    <div class="col-12 text-center texto">
                        <h1><i class="fas fa-hand-paper text-white"></i></h1>
                        
                        <h1 class="mb-3 font-weight-normal text-white">Regresa Pronto!</h1>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Navegador from '@/components/Navegador.vue'

export default {
    data(){
        return{
            estado:"false",
            email:null
        }
    },
    components:{
        Navegador
    },
    mounted(){
        axios.get('/api/logout')
        .then(res =>{
            console.log(res)
            if(res.data.estado == true){
                this.estado = false
                this.email = null
                this.$toasted.success('Saliste con exito!',{duration:2000,position:'top-center',fullWidth:true})
            }else{
                this.$toasted.error('Ocurrio un problema: No a podido ser deslogueado',{duration:4000,position:'top-center',fullWidth:true})
            }
        })
    }
}
</script>

<style scoped>
  .body{
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.39) 30%,rgba(0, 0, 0, 0.274) 90%), url('./../../public/img/exit.jpg');
    background-position: center;
    background-attachment: fixed;
    background-size: cover;
    background-color: rgba(0, 0, 0, 0.486);
    height: 100%;
    width: 100%;
    position: absolute;
  }
  .texto{
      margin-top: 15%;
  }
  .moderno{
      background: rgba(255, 255, 255, 0);
      color: rgb(255, 255, 255);
      border-top:0px;
      border-left:0px;
      border-right:0px;
      border-bottom:1px solid rgb(226, 241, 233);
  }
  .moderno:focus{
      border:0px;
  }
</style>

/* <input type="text" class="moderno" placeholder="moderno" value="RockAndRoll"> */
                        