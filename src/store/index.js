import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

let _api = axios.create({
  baseURL: '//bcw-sandbox.herokuapp.com/api',
  timeout: 10000
})

export default new Vuex.Store({
  state: {
    cars: [],
    houses: [],
    jobs: []
  },
  mutations: {},
  actions: {},
  modules: {}
})