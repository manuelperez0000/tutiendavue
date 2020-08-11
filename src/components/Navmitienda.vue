<template>
    <div class="container mt-5 pt-5">
        <div class="row">
            <ul class="nav nav-tabs">
                <li class="nav-item">
                    <router-link to="/mitienda" v-bind:class="[active1]" class="nav-link">Nombre</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/url" v-bind:class="[active2]" class="nav-link">Url </router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/banner" v-bind:class="[active3]" class="nav-link">Banner</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/productos" v-bind:class="[active4]" class="nav-link">Productos</router-link>
                </li>
            </ul>
        </div>
    </div>
</template>
<script> 
    export default { props:['active1','active2','active3','active4'] }
 </script>