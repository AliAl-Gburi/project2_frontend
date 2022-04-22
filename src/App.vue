<template>
<div id="app">
  <div><NavBar />
  <HeaderImage /></div>
   <router-view/>
  
  
  <div><FooterComponent /></div>
</div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import HeaderImage from './components/HeaderImage.vue'
import FooterComponent from './components/FooterComponent.vue'







export default {
  name: 'App',
  components: {
    
    NavBar,
    FooterComponent,
    HeaderImage
   
  },
  mounted(){
    this.$store.dispatch("getProducts")
  },

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50
  
  
}
</style>
