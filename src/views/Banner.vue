<template>
<div>
    <Navegador></Navegador>
    <Navmitienda active1="" active2="" active3="active" active4=""></Navmitienda>
     <div class="container">
        <div class="row bg-white rounded shadow">
            <div class="col-sm-10 col-md-8 p-4">
                <p>Id: {{ uid }}</p>
                <form @submit.prevent="guardarTienda()">
                    <h4 class="mt-4">Banner</h4>
                    <p>Sube un banner para tu portada</p>
                    <div class="custom-file">
                        <input onchange="agregar_banner()" type="file" class="custom-file-input" id="banner" lang="es">
                        <label class="custom-file-label" for="customFileLang">Seleccionar Archivo</label>
                    </div>
                    <div class="input-group my-3">
                        <div class="input-group-prepend" >
                        <span class="input-group-text" id="num_porcent">0%</span>
                        </div>
                        <progress class="form-control" id="uploader" value="0" max="100">0%</progress>
                    </div>
                    <div id="img_banner"></div>
                    <div class="col-sm-12 col-md-4 mt-5">
                        <button type="submit" class="btn btn-success btn-lg form-control">Guardar Cambios</button>
                    </div>
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