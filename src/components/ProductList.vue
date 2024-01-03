<template>
  <section class="container">
    <div v-if="products && products.length" class="products">
      <div class="product" v-for="product in products" :key="product.id">
        <router-link to="/">
          <img
            v-if="product.photos"
            :src="product.photos[0].src"
            :alt="product.photos[0].title"
          />
          <p class="price">{{ product.price }}</p>
          <h1 class="title">{{ product.name }}</h1>
          <p>{{ product.description }}</p>
        </router-link>
      </div>
    </div>
    <div v-else-if="products && products.length === 0" class="">
      <p class="no__results">Product not found, try other terms.</p>
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

<style scoped>
.container {
  max-width: 1024px;
  margin: 0 auto;
}

.products {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  margin: 30px;
}

.product {
  box-shadow: 0 4px 8px rgba(30, 60, 90, 0.1);
  padding: 10px;
  background: #fff;
  border-radius: 4px;
  transition: all 0.2s;
}

.product:hover {
  box-shadow: 0 6px 12px rgba(30, 60, 90, 00.2s);
  transform: scale(1.1);
  position: relative;
  z-index: 1;
}

.product img {
  border-radius: 4px;
  margin-bottom: 20px;
}

.title {
  margin-bottom: 10px;
}

.price {
  color: #e80;
  font-weight: bold;
}

.no__results {
  text-align: center;
}
</style>
