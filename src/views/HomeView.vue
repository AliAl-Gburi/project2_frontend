<template>
    <div>
        <HeaderImage />
        <div class="container">
          <div class="row">
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
