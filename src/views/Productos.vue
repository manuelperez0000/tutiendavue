<template>
<div>
    <Navegador></Navegador>
    <Navmitienda active1="" active2="" active3="" active4="active"></Navmitienda>
     <div class="container">
        <div class="row bg-white rounded shadow">
            <div class="col-md-8  p-4">
                <p>Agregar nueva categoria: <b>{{ categoria }}</b></p>
                <form @submit.prevent="agregarCat()">
                    <input v-model="categoria" class="moderno" type="text">
                    <button class="mx-3 btn btn-primary" type="submit"> Guardar </button>
                </form>
                <div class="bg-light p-4 rounded w-100" >
                    <div v-for="categoria in categorias" class="btn btn-dark mr-2 mb-2" >
                        {{ categoria.cat }}
                        <button @click="deleteCat(categoria.id)" class="text-white bg-danger p-1 ml-3 rounded">X</button>
                    </div>
                </div>
            </div> 
            <div class="col-md-8">
                <h3>Agregar un producto</h3>
                <div class="input-group my-3">
                    <input type="text"  v-model="producto" class="moderno form-control" placeholder="Nombre del producto">
                </div>
                <div class="input-group my-3">
                    <input type="number" v-model="precio" class="moderno form-control" placeholder="Precio">
                </div>
                <div class="input-group my-3">
                    <textarea v-model="descripcion" id="descripcion" class="moderno form-control" placeholder="Descripcion">
                    </textarea>
                </div>
                <span>Categoria del producto </span><br>
                <div class="input-group my-3">
                    <select v-model="categoriaSel" class="form-control moderno">
                        <option v-for="cat in categorias"> 
                            {{ cat.cat }}
                        </option>
                    </select>
                </div>
                <span>Imagenes del producto </span><br>
                
                <div class="row">
                    <div class="col-6 col-sm-3 ">
                         <label v-bind:style="{'background-image':bgimg0}" for="img1" class="rounded imgSel" >
                            <img class="imgtumb" v-bind:src="img0">
                            <button @click="deleteSel(0)" :style="{'display':display[0]}" class="deleteIng btn btn-sm"> X </button>
                        </label>
                        <div class="barra">
                            <div class="b1" v-bind:style="{'width':progress[0]+'%'}"></div>
                        </div>
                        <input v-on:change="subirFoto($event,0)" type="file" id="img1" class="imgfile">
                    </div>
                    
                    <div class="col-6 col-sm-3">
                         <label  v-bind:style="{'background-image':bgimg1}" for="img2" class="text-center rounded imgSel w-100" >
                            <img class="imgtumb img-fluid" v-bind:src="img1">
                            <button @click="deleteSel(1)" :style="{'display':display[1]}" class="deleteIng btn btn-sm"> X </button>
                        </label>
                        <input v-on:change="subirFoto($event,1)" type="file" id="img2" class="imgfile">
                        <div class="barra">
                            <div class="b1" v-bind:style="{'width':progress[1]+'%'}"></div>
                        </div>
                    </div>

                    <div class="col-sm-3">
                         <label v-bind:style="{'background-image':bgimg2}" for="img3" class="text-center rounded imgSel w-100" >
                            <img class="imgtumb img-fluid" v-bind:src="img2">
                            <button @click="deleteSel(2)" :style="{'display':display[2]}" class="deleteIng btn btn-sm"> X </button>
                        </label>
                        <input v-on:change="subirFoto($event,2)" type="file" id="img3" class="imgfile">
                        <div class="barra">
                            <div class="b1" v-bind:style="{'width':progress[2]+'%'}"></div>
                        </div>
                    </div>

                    <div class="col-sm-3">
                         <label v-bind:style="{'background-image':bgimg3}" for="img4" class="text-center rounded imgSel w-100" >
                            <img class="imgtumb img-fluid" v-bind:src="img3">
                            <button @click="deleteSel(3)" :style="{'display':display[3]}" class="deleteIng btn btn-sm"> X </button>
                        </label>
                        <input v-on:change="subirFoto($event,3)" type="file" id="img4" class="imgfile">
                        <div class="barra">
                            <div class="b1" v-bind:style="{'width':progress[3]+'%'}"></div>
                        </div>
                    </div>
                   
                </div>
                <div class="input-group mt-3 mb-5">
                    <input @click="agregarProducto()" class="btn btn-success btn-block" type="submit" value="Guardar">
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
    .imgSel{ 
        width:100%;
        text-align: center;
        height: 100px;
        border:2px dotted #ccc;
        cursor: pointer;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        position:relative;
        z-index: 0;
    }
    .imgtumb{
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0; 
        margin: auto;
        max-height: 100px;
        max-width: 100%;
        z-index: -1;
    }
    .deleteIng{
        float: right;
        z-index:10;
        color:#fff;
        background-color: rgba(250, 94, 74, 0.589);
    }
    .imgfile {
    opacity: 0;
    position: absolute;
    z-index: -1;
    }
    .barra{
        background:rgb(168, 168, 168);
        height: 5px;
        width: 100%;
    }
    .b1{
        height: 5px;
        background: rgb(57, 253, 39);
    }
</style>
<script>
import Navegador from '@/components/Navegador.vue'
import ConfigTienda from '@/components/Config-tienda.vue'
import Navmitienda from '@/components/Navmitienda.vue'
export default {
    data(){
        return {
            categoria:"",
            categoriaSel:"",
            categorias:"",
            img0:"",
            img1:"",
            img2:"",
            img3:"",
            precio:"",
            display:["none","none","none","none"],
            descripcion:"",
            producto:"",
            progress:[1,1,1,1],
            bgimg0:"url('https://firebasestorage.googleapis.com/v0/b/usuarios-b6168.appspot.com/o/utilidades%2Ffondoms.png?alt=media&token=74a3db71-5cf5-4a93-a389-4612000dfa23')",
            bgimg1:"url('https://firebasestorage.googleapis.com/v0/b/usuarios-b6168.appspot.com/o/utilidades%2Ffondoms.png?alt=media&token=74a3db71-5cf5-4a93-a389-4612000dfa23')",
            bgimg2:"url('https://firebasestorage.googleapis.com/v0/b/usuarios-b6168.appspot.com/o/utilidades%2Ffondoms.png?alt=media&token=74a3db71-5cf5-4a93-a389-4612000dfa23')",
            bgimg3:"url('https://firebasestorage.googleapis.com/v0/b/usuarios-b6168.appspot.com/o/utilidades%2Ffondoms.png?alt=media&token=74a3db71-5cf5-4a93-a389-4612000dfa23')"
        }
    },
    components:{
        Navegador,
        Navmitienda
    },
    methods:{
        deleteSel(n){
            var x = "none"
            var z = "url('https://firebasestorage.googleapis.com/v0/b/usuarios-b6168.appspot.com/o/utilidades%2Ffondoms.png?alt=media&token=74a3db71-5cf5-4a93-a389-4612000dfa23')"
            if(n==0){ this.img0 =""; this.display[n]=x; this.bgimg0=z }
            else if(n==1){ this.img1 =""; this.display[n]=x; this.bgimg1=z }
            else if(n==2){ this.img2 =""; this.display[n]=x; this.bgimg2=z }
            else if(n==3){ this.img3 =""; this.display[n]=x; this.bgimg3=z }
        },
        getCat(){
            axios.get("/api/get/categorias").then(res =>{
                this.categorias = res.data
            })
        },
        agregarProducto(){
            axios.post("/api/agregar/producto",{
                nombre:this.producto,
                precio:this.precio,
                categoria:this.categoriaSel,
                img0:this.img0,
                img1:this.img1,
                img2:this.img2,
                img3:this.img3,
                descripcion:this.descripcion
            }).then((res)=>{
                alert(res.data.mensaje)
                var x = "url('https://firebasestorage.googleapis.com/v0/b/usuarios-b6168.appspot.com/o/utilidades%2Ffondoms.png?alt=media&token=74a3db71-5cf5-4a93-a389-4612000dfa23')";
                this.$toasted.success(res.data.mensaaje,{duration:3000,position:'top-center',fullWidth:true})
                this.precio = ""
                this.img0=""
                this.img1=""
                this.img2=""
                this.img3=""
                this.display[0]="none"
                this.display[1]="none"
                this.display[2]="none"
                this.display[3]="none"
                this.descripcion=""
                this.producto=""
                this.categoria=""
                this.categorias=""
                this.categoriaSel=""
                this.progress=[1,1,1,1];
                this.bgimg0=x
                this.bgimg1=x
                this.bgimg2=x
                this.bgimg3=x
                this.getCat()

            })
            .catch(error => console.log(error))
        },
        deleteCat(id){
            console.log(id)
            axios.post("/api/delete/categorias",{"id":id}).then(res =>{
                console.log(res.data.mensaje)
                this.getCat()
            })
        },
        agregarCat(){
            var datos = {
                categoria:this.categoria
            }
            axios.post("/api/categorias/agregar",datos).then(res =>{
                console.log(res.data.mensaje)
                this.getCat();
                this.$toasted.success(res.data.mensaaje,{duration:3000,position:'top-center',fullWidth:true})
            })
            this.categoria = ""
        },
        subirFoto(e,n){
            var file = e.target.files[0]
            var storage = firebase.storage();
            var extend = "ttel-product"+Math.floor(Math.random()*10000);
            var productName = file.name;
            var extendName = extend+productName
            var ref = storage.ref('products/'+extendName)
            ref.put(file).on('state_changed',(snap)=>{
                var percent = Math.floor((snap.bytesTransferred / snap.totalBytes) * 100);
                this.progress[n] = percent;
                if(percent > 99){
                    ref.getDownloadURL().then((url)=> {
                        //console.log(extendName)
                        if(n==0){ 
                            this.img0 = url
                            this.display[0] = "table"
                            this.bgimg0 = "" 
                            }
                        else if(n==1){this.display[1] = "table"; this.img1 = url; this.bgimg1 = "" }
                        else if(n==2){this.display[2] = "table"; this.img2 = url; this.bgimg2 = "" }
                        else if(n==3){this.display[3] = "table"; this.img3 = url; this.bgimg3 = "" }
                    });
                }
            })
            console.log(e.target.files[0].name)
        },
        guardado(){
            console.log("guardado:--")
        }
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
            //console.log(estado)
        }).catch(err => console.log(err))

        this.getCat()
        
    }
}
</script>
<style>
.btn-cat{
    width: fit-content;
    display:flex;
}
</style>