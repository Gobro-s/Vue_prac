import Vue from 'vue'
import Vuex from 'vuex'

import axios from 'axios'
import createPersistedState from 'vuex-persistedstate'

const API_URL = 'http://127.0.0.1:8000'

Vue.use(Vuex)

export default new Vuex.Store({
	plugins: [createPersistedState()],
	state: {
		articles: [],
		token: null,
	},
	getters: {
    // 로그인이 되어있는지 알려주는 함수 생성
    isLogin(state) {
      return state.token ? true : false
    }
  },
	mutations: {
		GET_ARTICLES(state, articles) {
			state.articles = articles
		},
		// SIGN_UP(state, token) {        //savetoken이 생기면서 필요가 없어짐
		// 	state.token = token
		// },
    SAVE_TOKEN(state, token) {
      state.token = token
    }
	},
	actions: {
		getArticles(context) {
			axios({
				method: 'get',
				url: `${API_URL}/api/v1/articles/`,
			})
				.then((res) => {
					// console.log(res, context)
					context.commit('GET_ARTICLES', res.data)
				})
				.catch((err) => {
					console.log(err)
				})
		},
		signUp(context, payload) {
			const username = payload.username
			const password1 = payload.password1
			const password2 = payload.password2

			axios({
				method: 'post',
				url: `${API_URL}/accounts/signup/`,
				data: {
					username,
					password1,
					password2,
				},
			})
				.then((res) => {
					console.log(res)
					// context.commit('SIGN_UP', res.data.key)  // 따로 할 필요 없이 통일
          context.commit('SAVE_TOKEN', res.data.key)

				})
				.catch((err) => {
					console.log(err)
				})
		},
		login(context, payload) {
			const username = payload.username
			const password = payload.password

			axios({
				method: 'post',
				url: `${API_URL}/accounts/login/`,
				data: {
					username,
					password,
				},
			})
				.then((res) => {
					context.commit('SAVE_TOKEN', res.data.key)
				})
				.catch((err) => console.log(err))
		},
	},
	modules: {},
})
