<template>
    <nav class="navbar fixed-top navbar-expand-lg navbar-dark mb-5 bg-negro">
      <div class="container">
        <router-link to="/" class="navbar-brand" href="/"><h4 class="text-white">tutiendaenlinea.shop</h4></router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto">
            <li v-if="estado == true" ><p class="text-white mt-2 mx-1">{{ email }}</p> </li>
            <li v-if="estado == true" ><router-link to="/mitienda" class="text-white my-1 btn mx-1 btn-primary btn-sm"><i class="fa fas-envelope"></i> Mi Tienda </router-link> </li>
            <li v-if="estado == true" ><router-link class="text-white my-1 btn mx-1 btn-success btn-sm" to="/logout">Salir</router-link> </li>
            <li v-if="estado != true"  class="nav-item">
              <router-link class="nav-link text-white" to="/login">Ingresa</router-link>
            </li>
            <li v-if="estado != true"  class="nav-item">
              <router-link class="nav-link text-white" to="/register">Registrate</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
</template>

<script>


export default {
    data(){
        return{
        estado:"",
        email:""
        }
    },
    created(){
        
        axios.get('/api/auth/')
        .then(res =>{
            let estado = res.data.estado
            let email = res.data.email
            
            this.estado = estado
            this.email = email
            if(estado == false){
              console.log("No autenticado")
            }else{
              console.log("Autenticado")
            }
        })
        
    }
}
</script>
<style scoped>
.bg-negro{
    background-color: rgba(10, 10, 10, 0.733);
}
</style>