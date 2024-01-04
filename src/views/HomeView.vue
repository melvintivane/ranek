<template>
  <section>
    <h1>Compre ou Venda</h1>
    <ProductsFind />
    <ProductList />
  </section>
</template>

<script>
import ProductsFind from '@/components/ProductsFind.vue'
import ProductList from '@/components/ProductList.vue'

export default {
  name: 'HomeView',
  components: {
    ProductsFind,
    ProductList,
  },
}
</script>

<style scoped>
h1 {
  color: #87f;
  margin-top: 40px;
  font-size: 2rem;
  text-align: center;
}
</style>
