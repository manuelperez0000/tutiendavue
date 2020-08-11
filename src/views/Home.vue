<template>
  <div class="body">
    <Navegador></Navegador>
    <div class="cuerpo text-center pb-5 mb-5">
        <div class="container">
            <div class="row">
                   <div class="col-12"><br>
                    <h1 class="text-white">Vende tus productos en linea</h1>
                    <h4 class="text-white">Te ofrecemos una herramienta increiblemente simple y facil de utilizar desde cualquier dispositivo para generar ventas a traves de internet</h4>
                    <router-link to="/login" class="btn btn-sm btn-success m-1">Ingresa</router-link>
                    <router-link to="/register" class="btn btn-sm btn-primary m-1">Registrate</router-link>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

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
   .cuerpo{
        width: 100%;
        position: absolute;
        bottom: 0px;
    }
    h4{
        font-weight: 100;
    }
</style>
 
<script>
import Navegador from '@/components/Navegador.vue'
export default {
 
  components: {
    Navegador
  }
}
</script>
