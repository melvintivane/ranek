<template>
  <section class="login">
    <h1>Login</h1>
    <form>
      <label for="email">Email</label>
      <input
        type="email"
        name="email"
        placeholder="Enter email..."
        id="email"
        v-model="login.email"
      />
      <label for="password">Password</label>
      <input
        type="password"
        name="password"
        placeholder="Enter password..."
        id="password"
        v-model="login.password"
      />
      <button class="btn" @click.prevent="handleLogin">Login</button>
    </form>
    <p class="forget__password">
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
    handleLogin() {
      this.$store.dispatch('getUser', this.login.email)
      this.$router.push({ name: 'user' })
    },
  },
}
</script>

<style scoped>
.login {
  max-width: 500px;
  margin: 0 auto;
  padding: 0 20px;
}

h1 {
  text-align: center;
  font-size: 2rem;
  color: #87f;
  margin-top: 40px;
}

form {
  display: grid;
}

#email,
#password {
  width: 100%;
  padding: 20px;
  border: 1px solid #87f;
  outline-color: #87f;
}

.btn {
  width: 100%;
  max-width: 300px;
  margin-left: auto;
  margin-right: auto;
}

.forget__password {
  text-align: center;
  margin: 20px auto 0 auto;
}

.forget__password:hover {
  color: #87f;
  text-decoration: underline;
}
</style>
