<template>
<div>
    <Navegador></Navegador>
    <Navmitienda active1="" active2="" active3="" active4="active"></Navmitienda>
     <div class="container">
        <div class="row bg-white rounded shadow">
            <div class="col-sm-10 col-md-8 p-4">
                <p>Id: {{ uid }}</p>
                <form @submit.prevent="guardarTienda()">
                    <h4 class="mt-4">Productos</h4>
                    
                   
                </form>
            </div>
        </div>
    </div>

</div>
</template>
<style>
    body{
        background: rgba(225, 225, 225, 0.7);
    }
</style>
<script>
import Navegador from '@/components/Navegador.vue'
import ConfigTienda from '@/components/Config-tienda.vue'
import Navmitienda from '@/components/Navmitienda.vue'
export default {
    components:{
        Navegador,
        Navmitienda,
        ConfigTienda
    },
    created(){
        axios.get("/api/auth")
        .then(res =>{
            let estado = res.data.estado
            let email = res.data.email
            let uid = res .data.uid
            if(estado != true){
                //window.location.href = "/"
            }
            console.log(estado)
        }).catch(err => console.log(err))
    }
}
</script>