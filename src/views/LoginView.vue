<template>
  <section class="login">
    <h1>Login</h1>
    <form>
      <label for="email">Email</label>
      <input type="email" name="email" id="email" v-model="login.email" />
      <label for="password">password</label>
      <input
        type="password"
        name="password"
        id="password"
        v-model="login.password"
      />
      <button class="btn" @click.prevent="logon">Login</button>
    </form>
    <p class="lost">
      <a href="/" target="_blank">Forget password? Click here.</a>
    </p>
    <LoginCreate />
  </section>
</template>

<script>
import LoginCreate from '@/components/LoginCreate.vue'

export default {
  name: 'loginView',
  components: { LoginCreate },
  data() {
    return {
      login: {
        email: '',
        password: '',
      },
    }
  },
  methods: {
    logon() {},
  },
}
</script>

<style scoped></style>
