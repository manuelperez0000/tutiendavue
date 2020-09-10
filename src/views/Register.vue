<template>
    <div class="body">
        <Navegador></Navegador>
        <div class="cover-back">
            <div class="container pt-4">
                <div class="row">
                    <h1 class="text--white"></h1>
                    <div class="col-sm-5 p-3 rounded bg-semitransparent mx-3 m-4">
                        <form @submit.prevent="registro"  action="/register" method="POST" class=" text-white">
                            <h1 class="h3 mb-3 font-weight-normal">Registrate</h1>
                            <input v-model="datos.nombre" type="text" id="nombre" name="nombre" class="form-control mb-3" placeholder="Nombre" required>
                            <input v-model="datos.telefono" type="text" id="telefono" name="telefono" class="form-control mb-3" placeholder="Telefono" required>
                            <input v-model="datos.email" type="email" id="email" name="email" class="form-control mb-3" placeholder="Correo" required autofocus>
                            <input v-model="datos.password" type="password" id="password" name="password" class="form-control mb-3" placeholder="Contraseña" required>
                            <button class="btn btn-lg btn-primary btn-block mb-4" type="submit">
                                <i v-if="spin == true" class="fas fa-spinner fa-spin text-white"></i>
                                Registrarme
                            </button>
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
            spin:false,
            datos:{
                nombre:"Manuel",
                telefono:"04141220527",
                email:"manuelperez.0000@gmail.com2",
                password:"123456"
            }
        }
    },
    methods:{
        registro(){
            this.spin = true
            //console.log(this.datos)
            axios.post('/api/register/',this.datos)
            .then(res =>{
                console.log(res)
                this.spin = false
                this.$toasted.success('Registrado con exito!',{duration:2000,position:'top-center',fullWidth:true})
                window.location.href = "/"
            })
            .catch(err => alert(err.message))
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