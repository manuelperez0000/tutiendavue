<template>
<div>
    <Navegador></Navegador>
    <Navmitienda active1="" active2="" active3="active" active4=""></Navmitienda>
     <div class="container">
        <div class="row bg-white rounded shadow">
            <div class="col-sm-10 col-md-8 p-4">
                    <p>Agrega un banner para tu portada</p>
                    <div class="custom-file">
                        <input @change="cargarBanner($event)" type="file" class="custom-file-input" name="bannerI" id="bannerI" lang="es">
                        <label class="custom-file-label" for="customFileLang">{{ bannerUrl }}</label>
                    </div>
                    <div class="input-group my-3" v-bind:style="{'display':display}">
                        <div class="w-100 text-center"><p class="mb-0 mt-2 p-0">{{ progress }}%</p></div>
                        <div class="wrapper w-100">
                            <div class="progress-bar" v-bind:style="{'width':progress+'%'}"></div>
                        </div>
                    </div>
                    <div class="img_banner w-100">
                        <img class="w-100" v-bind:src="bannerimg" >
                    </div>
            </div>
        </div>
    </div>
</div>
</template>
<style>
    body{
        background: rgba(225, 225, 225, 0.7);
    }
    .img_banner{
        background-color: rgba(211, 211, 211, 0.788);
        
    }
    .wrapper{
        border:1px solid rgba(102, 102, 102, 0.712);
        border-radius: 10px;
    }
    .progress-bar{
        background: rgba(15, 211, 64, 0.904);
        height: 20px;
        border-radius: 10px;
        min-width: 5px;
    }
</style>
<script>
import Navegador from '@/components/Navegador.vue'
import ConfigTienda from '@/components/Config-tienda.vue'
import Navmitienda from '@/components/Navmitienda.vue'

export default {
    components:{
        Navegador,
        Navmitienda
    },
    data(){
        return{  
            error:"",
            uid:"",
            file:"",
            bannerUrl:"Seleccionar Archivo",
            progress:0,
            display:"none",
            bannerimg:''
        }
    },
    created(){
        axios.get('/api/auth').then(res =>{
            var estado = res.data.estado
            this.uid = res.data.uid 
            var uid = this.uid
            this.obtenerBanner(uid)
            if(estado != true){
                //window.location.href = "/"
            }
        })

        
    },
    methods:{
        obtenerBanner(uid){
            axios.get('/api/obtenerBanner/').then(res =>{
                this.bannerimg = res.data.banner
            })
        },
        cargarBanner(e){
            this.file = e.target.files
            var file =  this.file[0];
            this.display = "inline";
            var storage = firebase.storage();
            var extend = "ttel"+Math.floor(Math.random()*10000);
            var bannerName = file.name;
            var extendName = extend+bannerName
            var ref = storage.ref('banner/'+extendName)
            ref.put(file).on('state_changed',(snap)=>{
                var percent = Math.floor((snap.bytesTransferred / snap.totalBytes) * 100);
                this.progress = percent;
                if(percent > 99){
                    ref.getDownloadURL().then((url)=> {
                        this.guardado(url,extendName);
                        //console.log(extendName)
                        this.bannerimg = url;
                    });
                }
            })
        },
        guardado(bannerUrl,bannerName){
            var datos = {
                bannerUrl:bannerUrl,
                bannerName:bannerName
            }
            axios.post('/api/guardartienda/banner',datos).then((res)=>{
                this.bannerUrl = "Banner cargado con exito";
                this.$toasted.success("Exito: "+res.data.mensaje,{duration:5000,position:'top-center',fullWidth:true})
            }).catch(err =>  this.$toasted.error("Error: "+err.message,{duration:5000,position:'top-center',fullWidth:true}) )
        }
    }
}
</script>