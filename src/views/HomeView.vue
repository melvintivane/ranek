<template>
  <section>
    <h1>👍Compre ou Venda</h1>
    <FindProducts />
    <ProductList />
  </section>
</template>

<script>
import FindProducts from '@/components/FindProducts.vue'
import ProductList from '@/components/ProductList.vue'

export default {
  name: 'HomeView',
  components: {
    FindProducts,
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
