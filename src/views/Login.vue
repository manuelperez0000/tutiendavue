<template>
    <div class="body">
        <Navegador></Navegador>
        <div class="cover-back">
            <div class="container pt-4">
                <div class="row">
                <div class="col-sm-5 p-3 rounded bg-semitransparent mx-3 m-4">
                    <form @submit.prevent="ingresar()" class="text-white">
                    <h1 class="h3 mb-3 font-weight-normal">Ingresa</h1>
                    <input v-model="email" type="email" id="email" name="email" class="form-control mb-3" placeholder="Correo" required autofocus>
                    <input v-model="password" type="password" id="password" name="password" class="form-control mb-3" placeholder="Contraseña" required>
                    <button class="btn btn-lg btn-primary btn-block mb-4" type="submit">
                        <i v-if="spin == true" class="text-white fas fa-spin fa-spinner"></i>
                        Ingresa
                    </button>
                    </form> 
                    <router-link class="text-white" to="/forgot">Olvide mi contraseña :(</router-link>
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
            spin:false,
            email:"",
            password:""
        }
    },
    methods:{
        ingresar(){
            this.spin=true
            axios.post('/api/login',{
                email:this.email,
                password:this.password
            })
            .then(res => {
                this.spin=false
                window.location.href = "/mitienda"
            })
            .catch(err =>{
                this.$toasted.error('Ocurrio un problema intente nuevamente',{duration:2000,position:'top-center',fullWidth:true})
            })
            
        }
    },

    components:{
        Navegador
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