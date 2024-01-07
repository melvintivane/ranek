<template>
  <div id="app">
    <TheHeader />
    <main>
      <transition mode="out-in">
        <router-view />
      </transition>
    </main>
    <TheFooter />
  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader.vue'
import TheFooter from '@/components/TheFooter.vue'
export default {
  components: {
    TheHeader,
    TheFooter,
  },
}
</script>

<style>
* {
  box-sizing: border-box;
}

body,
ul,
li,
h1,
h2,
p {
  padding: 0;
  margin: 0;
}

ul {
  list-style: none;
}

body {
  font-family: 'Roboto', sans-serif;
  color: #345;
  background: url('./assets/pattern.svg') repeat top;
}

a {
  color: #345;
  text-decoration: none;
}

img {
  max-width: 100%;
  display: block;
}

label {
  margin-bottom: 5px;
}

main {
  flex: 1;
}

.btn {
  display: block;
  padding: 10px 30px;
  background: #87f;
  border-radius: 4px;
  color: #fff;
  text-align: center;
  font-size: 1rem;
  box-shadow: 0 4px 8px rgba(30, 60, 90, 0.2);
  transition: all 0.2s;
  border: none;
  font-family: 'Roboto', sans-serif;
  cursor: pointer;
}

.btn:hover {
  background: #65d;
  transform: scale(1.1);
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

input,
textarea {
  width: 100%;
  padding: 20px;
  border: 1px solid #87f;
  outline-color: #87f;
  margin-bottom: 15px;
  border-radius: 4px;
  font-size: 1rem;
  transition: all 0.3s;
  font-family: 'Roboto', sans-serif;
}

input:hover,
input:focus,
textarea:hover,
textarea:focus {
  border-color: #87f;
}

.v-enter,
.v-leave-to {
  opacity: 0;
}

.v-enter {
  transform: translate3d(0, -20px, 0);
}

.v-leave-to {
  transform: translate3d(0, 20px, 0);
}

.v-enter-active,
.v-leave-active {
  transition: all 0.3s;
}
</style>
