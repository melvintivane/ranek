<template>
  <form>
    <label for="name">Name</label>
    <input
      autocomplete="name"
      type="text"
      id="name"
      name="name"
      v-model="username"
    />
    <!-- <label for="email">Email</label>
    <input
      autocomplete="email"
      type="email"
      id="email"
      name="email"
      v-model="email"
    />
    <label for="password">Password</label>
    <input
      autocomplete="password"
      type="password"
      id="password"
      name="password"
      v-model="password"
    />
    <label for="address">Address</label>
    <input
      autocomplete="address"
      type="text"
      id="address"
      name="address"
      v-model="address"
    />
    <label for="state">State</label>
    <input
      autocomplete="state"
      type="text"
      id="state"
      name="state"
      v-model="state"
    />
    <label for="city">City</label>
    <input
      autocomplete="city"
      type="text"
      id="city"
      name="city"
      v-model="city"
    /> -->
    <div>
      <slot></slot>
    </div>
  </form>
</template>

<script>
export default {
  name: 'userForm',
  computed: {
    username: {
      get() {
        return this.$store.state.name
      },
      set(value) {
        this.$store.commit('UPDATE_USER', { name: value })
      },
    },
  },
}
</script>

<style scoped>
form {
  display: grid;
}
</style>
