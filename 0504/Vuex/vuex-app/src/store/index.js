import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    message:'message in store'
  },
  getters: {
    messageLength(state) {
      return state.message.length
    },
    doubleLength(state, getters) {
      return getters.messageLength * 2
    }
  },
  mutations: {
    // CHANGE_MESSAGE(A, payload)
    CHANGE_MESSAGE(state, message) {
      // console.log(state)
      // console.log(message)
      state.message = message //이름은 변수, CHANGE_MESSAGE(message <-랑 통일만 시키면 됨)
    }
  },
  actions: {
    changeMessage(context, message){
      context.commit('CHANGE_MESSAGE', message)
      // console.log(context)
      // console.log(message)
    }
  },
  modules: {
  }
})
