<template>
<div>
    <Navegador></Navegador>
    <Navmitienda active1="active" active2="" active3="" active4=""></Navmitienda>
    <Config-tienda></Config-tienda>
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