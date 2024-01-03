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
export default {
  name: 'ProductList',
  data() {
    return {
      products: null,
    }
  },
  methods: {
    getProducts() {
      fetch('http://localhost:3000/product')
        .then((res) => res.json())
        .then((res) => (this.products = res))
    },
  },
  created() {
    this.getProducts()
  },
}
</script>

<style scoped></style>
