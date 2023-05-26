import Vue from 'vue'
import Vuex from 'vuex'

import axios from 'axios'

const API_URL = 'http://127.0.0.1:8000'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		articles: [
			// {
			// 	id: 1,
			// 	title: '제목',
			// 	content: '내용',
			// },
			// {
			// 	id: 2,
			// 	title: '제목2',
			// 	content: '내용2',
			// },
		],
	},
	getters: {},
	mutations: {
    GET_ARTICLES(state, articles) {
      state.articles = articles
    }
  },
	actions: {
		getArticles(context) {
			// context.commit()  // state에서 불러오는 경우에는 커밋, 지금은 django에서 불러서 바로 쓰니까 안함
      axios({
        method: 'get',
        url: `${API_URL}/api/v1/articles/`,
      })
      .then((res) => {
        // console.log(res, context);
        context.commit('GET_ARTICLES', res.data)
      })
      .catch((error) => {
        console.log(error);
      })
		},
	},
	modules: {},
})
