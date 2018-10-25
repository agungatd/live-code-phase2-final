import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loggedin:false,
    profile: []  
  },
  mutations: {
    setLogin(state,payload){            
      state.loggedin = payload
    },
    setUser(state,payload){      
      state.profile = payload
      console.log(state.user)
    }
  },
  actions: {
    isLogin({ commit }, payload){
      commit('setLogin',payload)
    },
    profile({ commit }, payload){
      console.log(payload)
      commit('setUser',payload)
    }
  }
})
