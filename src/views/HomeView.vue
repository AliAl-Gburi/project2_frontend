<template>
    <div>
        
        <div class="container">

          <div class="row">
            <h2 class="my-h2">Popular Listings In Your Area</h2>
            <Item v-for="product in allProducts"
            :key="product.id"
            :item="product" />
          </div>
        </div>
    
    </div>
</template>

<script>
import Item from '../components/CardItem.vue'

export default {
    name: 'HomeView',
  components: {
    Item
  },
  computed: {
    allProducts() {
      return this.$store.state.allProducts;
    }
  }
}
</script>

<style scoped>
  .my-h2 {
    margin: 30px;
    text-align: left;
    color: #f1c40f;
    text-shadow: 3px 3px #780174;
  }
  .row {
    width: 100%;
  }
  .container {
    width: 95%;
    
    max-width: 1400px;
  }
</style>
