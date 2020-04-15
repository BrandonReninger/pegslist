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
    activeCar: {},
    cars: [],
    houses: [],
    jobs: []
  },
  mutations: {
    setActiveCar(state, car) {
      state.activeCar = car
    },
    setCars(state, cars) {
      state.cars = cars
    }
  },
  actions: {
    async getCars() {
      try {
        let res = await _api.get('cars')
        console.log(res.data.data)
        this.commit('setCars', res.data.data)
      } catch (error) {
        console.error(error)
      }
    }
  },
  modules: {}
})