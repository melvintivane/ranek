<template>
  <section>{{ user }}</section>
</template>

<script>
export default {
  name: 'userView',
  computed: {
    user() {
      return this.$store.state.user.name
    },
  },
}
</script>

<style scoped></style>
