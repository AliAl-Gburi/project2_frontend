<template>
    <div class="card my-card" style="width: 18rem;">
  <img :src="getImage(item.imgsrc)" class="card-img-top my-card-img" alt="...">
  <div class="card-body">
    <h5 class="card-title">{{item.title}}</h5>
    <p class="card-text">{{item.desc}}</p>
    <a href="#" class="btn btn-primary">Get</a>
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
 }
 .my-card-img {
   margin-top: 10px;
 }
</style>
