import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    name: "Ronaldo",
    fruits: ["apple","orange","mango"],
    job: [
      {id:1,name:"messic",age:32},
      {id:1,name:"ronaldo",age:33},
      {id:1,name:"atoni",age:32}
    ]
  },
  getters: {
    jobTotal: state => state.job.length
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
