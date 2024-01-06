import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    login: false,
    user: {
      id: '',
      email: '',
      name: '',
      password: '',
      city: '',
      address: '',
    },
  },
  getters: {},
  mutations: {
    UPDATE_LOGIN(state, payload) {
      state.login = payload
    },
  },
  actions: {},
  modules: {},
})
