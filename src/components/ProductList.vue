<template>
  <section class="container">
    <transition mode="out-in">
      <div v-if="products && products.length" class="products" key="products">
        <div class="product" v-for="product in products" :key="product.id">
          <router-link :to="{ name: 'product', params: { id: product.id } }">
            <img
              v-if="product.photos"
              :src="product.photos[0].src"
              :alt="product.photos[0].title"
            />
            <p class="price">{{ product.price | priceNumber }}</p>
            <h1 class="title">{{ product.name }}</h1>
            <p>{{ product.description }}</p>
          </router-link>
        </div>
        <ProductsPagination
          :productsTotal="productsTotal"
          :productsPerPage="productsPerPage"
        />
      </div>
      <div
        v-else-if="products && products.length === 0"
        class=""
        key="no__results"
      >
        <p class="no__results">Product not found, try other terms.</p>
      </div>
      <PageLoading v-else key="loading" />
    </transition>
  </section>
</template>

<script>
import ProductsPagination from '@/components/ProductsPagination.vue'
import { api } from '@/services/services.js'
import { serialize } from '@/helpers/helpers.js'

export default {
  name: 'ProductList',
  components: {
    ProductsPagination,
  },
  data() {
    return {
      products: null,
      productsPerPage: 9,
      productsTotal: 0,
    }
  },
  computed: {
    url() {
      let query = serialize(this.$route.query)
      return `/product?_limit=${this.productsPerPage}${query}`
    },
  },
  methods: {
    setPage() {
      //VER MAIS TARDE
      // console.log(typeof this.$route.query.q !== 'undefined')
      if (this.$route.query._page === undefined) {
        this.$router.push({ query: { _page: 1 } })
      }
    },
    getProducts() {
      this.products = null
      setTimeout(
        () =>
          api.get(this.url).then((response) => {
            this.productsTotal = Number(response.headers['x-total-count'])
            this.products = response.data
          }),
        2000
      )
    },
  },
  watch: {
    url() {
      console.log(this.$route.query)
      this.getProducts()
    },
  },
  created() {
    this.setPage(), this.getProducts()
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
