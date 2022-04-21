<template>
    <div>
        <HeaderImage />
        <div class="container">

          <div class="row">
            <h2 class="my-h2">Popular Listings</h2>
            <Item v-for="product in allProducts"
            :key="product.id"
            :item="product" />
          </div>
        </div>
    
    </div>
</template>

<script>
import HeaderImage from '../components/HeaderImage.vue'
import Item from '../components/CardItem.vue'

export default {
    name: 'HomeView',
  components: {
    HeaderImage,
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
  }
</style>
