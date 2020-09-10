import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Toasted from 'vue-toasted'
Vue.use(Toasted)

Vue.config.productionTip = false

var firebaseConfig = {
  apiKey: "AIzaSyDRSDPUDAaQZqLAtsJtRnex5uhKBqWb5vw",
  authDomain: "usuarios-b6168.firebaseapp.com",
  databaseURL: "https://usuarios-b6168.firebaseio.com",
  projectId: "usuarios-b6168",
  storageBucket: "usuarios-b6168.appspot.com",
  messagingSenderId: "1077345151387",
  appId: "1:1077345151387:web:5c9c23d441d8924ba8993e"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  render: h => h(App)

}).$mount('#app')
