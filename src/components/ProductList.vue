<template>
  <section class="container"></section>
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
