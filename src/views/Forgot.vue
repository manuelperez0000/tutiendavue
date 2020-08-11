<template>
    <div class="body">
        <Navegador></Navegador>
        <div class="cover-back">
            <div class="container pt-4">
                <div class="row">
                <div class="col-sm-5 p-3 rounded bg-semitransparent mx-3 m-4">
                    <form @submit.prevent="recuperarClave()" class=" text-white">
                    <h1 class="h3 mb-3 font-weight-normal">Recuperacion de clave</h1>
                    <p class="text-white"> Ingresa tu correo y se te enviara un link de recuperacion </p>
                    <input v-model="email" type="email" id="email" name="email" class="form-control mb-3" placeholder="Correo" required autofocus>
                    <button class="btn btn-lg btn-primary btn-block mb-4" type="submit">Enviar</button>
                    </form> 
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
            email:""
        }
    },
    components:{
        Navegador
    },
    methods:{
        recuperarClave(){
            axios.post("/api/forgot",{email:this.email})
            .then(res =>{
                this.$toasted.success(res.data.mensaje,{duration:5000,position:'top-center',fullWidth:true})
            })
            .catch(err => {
                this.$toasted.error(res.data.mensaje,{duration:5000,position:'top-center',fullWidth:true})
            })
        }
    }
}
</script>

<style scoped>
  .body{
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.774) 30%,rgba(0, 0, 0, 0.781) 90%), url('./../../public/img/back.jpg');
    background-position: center;
    background-attachment: fixed;
    background-size: cover;
    background-color: rgba(0, 0, 0, 0.486);
    height: 100%;
    width: 100%;
    position: absolute;
  }
</style>