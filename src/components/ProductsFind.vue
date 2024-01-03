<template>
  <form action="">
    <input name="search" id="search" type="text" v-model="search" />
    <input id="magnify" type="submit" @click.prevent="handleSearch" />
  </form>
</template>
<script>
export default {
  name: 'ProductsFind',
  data() {
    return {
      search: '',
    }
  },
  methods: {
    handleSearch() {
      this.$router
        .push({ query: { q: this.search } })
        .catch((error) => console.error(error))
    },
  },
}
</script>
<style scoped></style>
