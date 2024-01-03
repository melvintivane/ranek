<template>
  <section class="container">
    <div v-for="product in products" :key="product.id">
      <img
        v-if="product.photos"
        :src="product.photos[0].src"
        :alt="product.photos[0].title"
      />
      <p>{{ product.price }}</p>
      <h1>{{ product.name }}</h1>
      <p>{{ product.description }}</p>
    </div>
  </section>
</template>

<script>
import { api } from '@/services/services.js'

export default {
  name: 'ProductList',
  data() {
    return {
      products: null,
    }
  },
  methods: {
    getProducts() {
      api.get('/product').then((response) => (this.products = response.data))
    },
  },
  created() {
    this.getProducts()
  },
}
</script>

<style scoped></style>
