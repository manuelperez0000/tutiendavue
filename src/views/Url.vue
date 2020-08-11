<template>
<div>
    <Navegador></Navegador>
    <Navmitienda active1="" active2="active" active3="" active4=""></Navmitienda>
     <div class="container">
    <div class="row bg-white rounded shadow">
        <div class="col-sm-10 col-md-8 p-4">
            <p>Id: {{ uid }}</p>
            <form @submit.prevent="guardarTienda()">
                
            <label class="" for="nombre"><h4>Url personalizada</h4></label><br>
            <label for="">Url actual: <div class="url"> /{{ urlactual }} </div></label>
            <label>No se pueden usar caracteres especiales en tu url</label>
            
            <input required pattern="[A-Za-z0-9-]{1,40}" spellcheck="false" v-model="url" v-on:keyup="verificaurl()" class="form-control" v-bind:class="[moderno]" type="text" name="url" id="url" title="No se pueden usar caracteres especiales en tu url" placeholder="Ingrese el su url de preferencia" autocomplete="off">

            
            <label v-if="verif == true" class="text-success"> <i class="fas fa-check"> </i> Disponible</label>
            <label v-if="verif == false" class="text-danger"><i class="fas fa-exclamation-triangle"></i> No esta Disponible: {{ error }}</label>
            <div class="col-sm-12 col-md-4">
                <button type="submit" class="btn btn-success btn-lg form-control mt-3">Guardar Cambios</button>
            </div>
            </form>
        </div>
    </div>
</div>

</div>
</template>
<style>
    body{ background: #ddd }
</style>

<script>
import Navegador from '@/components/Navegador.vue'
import Navmitienda from '@/components/Navmitienda.vue'
export default {
     components:{
        Navegador,
        Navmitienda
    },
    data(){
        return{
            url:"",
            urlactual:"",
            verif:undefined,
            uid:"",
            error:"",
            moderno:"moderno"
        }
    },
    created(){
        axios.get('/api/auth')
        .then(res =>{

            var estado = res.data.estado
            var email = res.data.email
            var uid = res .data.uid 
            this.uid = uid
            this.url = this.urlactual
          
            if(estado != true){
                //window.location.href = "/"
            }

            axios.post('/api/mitienda',{uid:uid})
            .then(res =>{
                this.urlactual = res.data.urlunico

            }).catch(err => {
               this.$toasted.error(err,{duration:6000,position:'top-center',fullWidth:true})
               console.log(err)
            })
        }).catch(err => {
            this.$toasted.error(err,{duration:6000,position:'top-center',fullWidth:true})
            console.log(err)
        })
    },
    methods:{
        verificaurl(){
            //paso 1 reemplazar espacios por guiones
            var url = this.url
            var urlactual = this.urlactual
            var modificado = url.replace(" ","-")
            this.url = modificado
            //paso 2 comprobar si es el mismo utilizado
            if(url == urlactual){
                this.error = "Ya estas usando esta url en tu tienda"
                this.moderno = "moderno-danger"
                this.verif = false
            }else{
            //paso 3 verificar si alguien mas posee esta url
                axios.post("/api/urlunico",{url:url})
                .then(res => {
                    var i = res.data.i
                    if(i > 0){
                    this.verif = false
                    this.moderno = "moderno-danger"
                    this.error = "Otra tienda ocupa este url"
                    }else{
                    this.verif = true
                    this.moderno = "moderno"
                    }
                })
            }
        },
        guardarTienda(){
            if(this.verif == true){
                axios.post('/api/guardartienda/url',{
                    id:this.uid,
                    urlunico:this.url
                })
                .then(res => {
                    var msg = res.data.mensaje
                    var estado = res.data.estado
                    if(estado == true){
                        this.$toasted.success(msg,{duration:4000,position:'top-center',fullWidth:true})
                        this.urlactual = this.url
                   }
                })
                .catch(err => {
                    this.$toasted.error('Error: No a podido ser guardado!',{duration:4000,position:'top-center',fullWidth:true})
                })
            }else{
                this.error = "Debe corregir su url antes de guardar"
                this.$toasted.error("Debe corregir su url antes de guardar",{duration:4000,position:'top-center',fullWidth:true})
            }
        }
    }
}
</script>
<style>
    .moderno{
        background-color: rgba(0, 0, 0, 0);
        border-top:0px;
        border-bottom:2px solid rgb(63, 63, 63);
        border-left: 0px;
        border-right: 0px;
        border-radius: 0px;
        outline:none !important;
        outline-width: 0 !important;
        font-size: 22px;
        color: rgb(64, 0, 109);
    }
    .moderno-danger{
        background-color: rgba(0, 0, 0, 0);
        border-top:0px;
        border-bottom:2px solid rgb(221, 13, 13);
        border-left: 0px;
        border-right: 0px;
        border-radius: 0px;
        outline:none !important;
        outline-width: 0 !important;
        font-size: 22px;
        color: rgb(64, 0, 109);
    }
    .moderno:focus{
        border-bottom: 2px solid rgb(0, 255, 0);
        background-color: rgba(113, 255, 47, 0.2);
        outline:none !important;
        outline-width: 0 !important;
        box-shadow: none; 
    }
    .moderno-danger:focus{
        border-bottom: 2px solid rgb(204, 17, 17);
        background-color: rgba(255, 31, 31, 0.151);
        outline:none !important;
        outline-width: 0 !important;
        box-shadow: none;
    }
    .url{
        font-size: 24px;
        font-weight: 600;
        color: rgb(64, 0, 109);
        display: inline-block;
    }
</style>
