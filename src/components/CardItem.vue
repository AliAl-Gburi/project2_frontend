<template>
    <div class="card my-card" style="width: 18rem;">
  <img :src="getImage(item.imgsrc)" class="card-img-top my-card-img" alt="...">
  <div class="card-body my-card-body">
    <h5 class="card-title">{{item.title}}</h5>
    <p class="card-text">{{item.desc}}</p>
    <a href="#" class="btn btn-primary my-btn"><i class="fa-solid fa-tags"></i> {{item.button}}</a>
  </div>
</div>
</template>

<script>


export default {
    name: 'cardItem',
    props: ['item'],
    data() {
        return {
            size: ''
        }
    },
    methods:{
      getImage(image) {
        return require('../assets/'+image)
      }
    }
}
</script>

<style scoped>
 .my-card {
   margin-right: 50px;
   margin-top: 50px;
   margin-bottom: 50px;
   padding: 0;
   height: 300px;
   border-color:#780174  ;
 }
 .my-card-img {
   margin: 0;
 }
 .my-card-body {
   background-color:#f1c40f ;
   margin: 0;
 }
 .my-btn {
   background-color: #780174;
   border-color: #780174;
 }
</style>
