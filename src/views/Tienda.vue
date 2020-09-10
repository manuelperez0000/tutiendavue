<template>
<div>
  <nav class="navbar shadow-sm navbar-ligth fixed-top bg-white">
    <div class="container">
      <div class="navbar-brand">{{ nombre }}</div>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
    </div>
</nav>
<section class="container banner">
  <img class="w-100" v-bind:src="banner" alt="">
</section>
<div class="container main">
  <div class="row">
    <div class="col-sm-3">
      <img :src="logo" alt="" class="w-100 rounded shadow">
    </div>
    <div class="col-sm-9">
      <h2 class="text-black bg-red">
        {{nombre}} 
        <button class="btn btn-sm btn-primary">
          <i class="fas fa-heart"></i>
        </button> 
      </h2>
      <p>{{descripcion}}</p>
      <div class="social">
        <h3>Nuestras redes sociales</h3>
        <a v-if="facebook != ''" target="_blank" class="mr-2" :href="facebook">
          <img class="ico" src="img/fb-ico-50.png" alt=""> 
          rockTucupita
        </a> 
        <a v-if="instagram != ''" target="_blank" class="mr-2" :href="instagram">
          <img class="ico" src="img/ig-ico.png" alt=""> 
          @rocktucupita
        </a>
        <a v-if="whatsapp != ''" target="_blank" class="mr-2 display-block" :href="whatsapp">
          <img class="ico" src="img/ws-100.png" alt=""> 
          +58-4141913827
        </a>
      </div>
    </div>
  </div>
</div>

<main role="main">
  <div class="album py-1 bg-light">
    <div class="container">
      <div class="row" v-for="cat in categorias">
        <div class="col-sm-12">
            <h1>{{ cat.nombre }}</h1>
        </div>
        <div v-if="producto.catprod == cat.nombre"  v-for="producto in productos" class="col-md-4">
          <div >
            <div class="card mb-4 shadow-sm p-2">
              <div v-bind:style="{'background-image':'url('+producto.foto+')'}" class="w-100 bg-danger foto rounded">
              </div>
              <div class="">
                <h4 class="">${{ producto.precio }}</h4>
                <p class="card-text descripcion text-gray">{{ producto.descripcion }}</p>
                <div class="d-flex justify-content-between align-items-center">
                  <div class="btn-group w-100">
                    <button type="button" class="btn btn-success">
                      <i class="fas fa-shopping-cart"></i> Agregar al Carrito
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>

</main>
<!-- 
    filtro de categorias<br>
    foto<br>
    nombre<br>
    descripcion<br>
    precio<br> -->

  </div>
</template>
<script>
export default {
  data(){
    return{
      id: this.$route.params.id,
      nombre:"",
      descripcion:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est, expedita quasi provident culpa, pariatur mollitia laboriosam, aspernatur accusantium quam nostrum quae? Voluptates accusantium consequatur ducimus veniam esse voluptate consequuntur. Esse.",
      logo:"img/bros.jpg",
      banner:"",
      categorias:["burguers","Perros calientes"],
      productos:"",
      facebook:"facebook.com/rock",
      instagram:"instagram.com/rock",
      whatsapp:"instagram.com/rock"
    }
  },
  methods:{
    getTienda(){
      axios.post('/api/get/tienda',{id:this.id}).then(res =>{
        console.log(res.data)
        this.nombre = res.data.nombre
        this.banner = res.data.banner
        this.getcategorias(res.data.idcategorias)
        this.getproductos(res.data.idcategorias)
        console.log(res.data.mensaje)
      }).catch(error => console.log(error))
    },
    getcategorias(id){
      axios.post('/api/get/catlist',{id:id}).then(res =>{
        this.categorias = res.data
        console.log(res.data)
      })
      console.log("la categoria ganadora es: "+id)
    },
    getproductos(id){
      axios.post('/api/get/prodlist',{id:id}).then(res =>{
        this.productos = res.data
        console.log(res.data)
      })
      console.log("la categoria ganadora es: "+id)
    }
  },

  created(){
    this.getTienda()
  }
}
</script>
<style>

.foto{
  height:200px;
  background-position:right;
  background-size:cover;
}
nav{
  border-bottom: 1px solid rgb(214, 214, 214);
  background: rgb(250, 250, 250);
  height: 55px;
}
.main{
  margin-top:30px;
  margin-bottom: 50px;
}
h1{
  font-size: 35px;
  color:rgb(90,90,90);
  font-weight: lighter;
}
h2{
  font-size: 30px;
  color:rgb(100,100,100);
  font-weight: lighter;
}
h3{
  font-size: 20px;
  color:rgb(90,90,90);
  font-weight: light;
}
.ico{
  height: 30px;
}
.banner{
  margin-top:54px;
}
p.descripcion{
  text-align: justify;
  font-size: 12px;
  color:rgb(90, 90, 90);
}
</style>
