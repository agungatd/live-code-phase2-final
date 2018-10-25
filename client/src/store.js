import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loggedin:false,
    likes: []  
  },
  mutations: {
    setLogin(state,payload){            
      state.loggedin = payload
    },
    setLikes(state,payload){      
      state.likes.push(payload)
    }
  },
  actions: {
    isLogin({ commit }, payload){
      commit('setLogin',payload)
    },
    getLikes({ commit }, payload){
      commit('setLikes', payload)
    }
  }
})
