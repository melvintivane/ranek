<template>
  <form action="">
    <input
      name="search"
      id="search"
      type="text"
      v-model="search"
      placeholder="Search..."
    />
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

<style scoped>
form {
  max-width: 600px;
  margin: 30px auto 60px auto;
  position: relative;
}

#search {
  width: 100%;
  padding: 20px;
  border: none;
  outline-color: #87f;
}

#magnify {
  width: 62px;
  height: 62px;
  background: url(../assets/search.svg) no-repeat center center;
  text-indent: -150px;
  border: none;
  cursor: pointer;
  position: absolute;
  top: 0;
  right: 0;
  box-shadow: none;
}
</style>
