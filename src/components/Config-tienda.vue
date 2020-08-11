<template>
    <div>
        <div class="container">
            <div class="row bg-white rounded shadow">
                <div class="col-sm-10 col-md-8 p-4">
                    <p>Id: {{ uid }}</p>
                    <form @submit.prevent="guardarNombre()">
                        <label for="nombre"><h4>Nombre de tu tienda</h4></label>
                        <input spellcheck="false" v-model="nombre" class="moderno form-control" type="text" name="nombre" id="nombre" placeholder="Ingrese el nombre de su tienda" autocomplete="off">
                        <div class="col-sm-12 col-md-4 mt-5">
                            <button type="submit" class="btn btn-success btn-lg form-control">Guardar Cambios</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            url:"",
            urlactual:"",
            verif:undefined,
            nombre:"",
            banner:"",
            uid:"",
            respuesta:"",
            moderno:"moderno"
        }
    },
    created(){
        axios.get('/api/auth')
        .then(res =>{
            this.uid = res.data.uid
            var id = res.data.uid
            
            axios.post('/api/mitienda',{uid:id})
            .then(res =>{
                this.urlactual = res.data.urlunico
                this.nombre = res.data.nombre
                this.banner = res.data.banner

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
        guardarNombre(){
       
                axios.post('/api/guardartienda/nombre',{
                    id:this.uid,
                    nombre:this.nombre
                })
                .then(res => {
                    var msg = res.data.mensaje
                    var estado = res.data.estado
                    var nombre = res.data.nombre
                    if(estado == true){
                        this.$toasted.success(msg,{duration:4000,position:'top-center',fullWidth:true})
                        this.nombre = nombre
                   }
                })
                .catch(err => this.$toasted.error('No a podido ser guardado!',{duration:4000,position:'top-center',fullWidth:true}))
          
            
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
        background-color: rgba(255, 47, 47, 0.2);
        outline:none !important;
        outline-width: 0 !important;
        box-shadow: none;
    }
</style>
