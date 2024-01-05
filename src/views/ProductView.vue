<template>
  <section>
    <transition mode="out-in">
      <div v-if="product" class="product">
        <ul v-if="product.photos" class="photos">
          <li v-for="(product, index) in product.photos" :key="index">
            <img :src="photo.src" :alt="photo.title" />
          </li>
        </ul>
        <div class="info">
          <h1>{{ product.name }}</h1>
          <p class="price">{{ product.price | priceNumber }}</p>
          <p class="description">{{ product.description }}</p>
          <button v-if="product.sold === 'false'" class="btn">Buy</button>
          <button v-else class="btn" disabled>Buy</button>
        </div>
      </div>
      <PageLoading v-else />
    </transition>
  </section>
</template>

<script>
import { api } from '@/services/services.js'

export default {
  name: 'ProductView',
  props: ['id'],
  components: {},
  data() {
    return {
      product: null,
    }
  },
  methods: {
    getProduct() {
      api.get(`/product/${this.id}`).then((response) => {
        this.product = response.data
      })
      return 0
    },
  },
  created() {
    this.getProduct()
  },
}
</script>

<style scoped>
.product {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  min-width: 900px;
  padding: 60px 30px;
  margin: 0 auto;
}

.price {
  color: #e80;
  font-weight: bold;
  font-size: 1.5rem;
  margin-bottom: 40px;
}

.description {
  font-size: 1.2rem;
}

.btn {
  margin-top: 60px;
  width: 200px;
}
</style>
