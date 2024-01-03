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
import { serialize } from '@/helpers/helpers.js'

export default {
  name: 'ProductList',
  data() {
    return {
      products: null,
    }
  },
  computed: {
    url() {
      let queryString = serialize(this.$route.query)
      return '/product?_limit=9' + queryString
    },
  },
  methods: {
    getProducts() {
      api.get(this.url).then((response) => (this.products = response.data))
    },
  },
  watch: {
    url() {
      this.getProducts()
    },
  },
  created() {
    this.getProducts()
  },
}
</script>

<style scoped></style>
