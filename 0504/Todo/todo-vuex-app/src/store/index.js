import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: [
      // {
      //   title: '할 일 ',
      //   isCompleted: false,
      // },
      // {
      //   title: '할 일 2',
      //   isCompleted: false,
      // },
      // {
      //   title: '할 일 3',
      //   isCompleted: false,
      // },
      // {
      //   title: '할 일 4',
      //   isCompleted: false,
      // },
    ]
  },
  getters: {
  },
  mutations: {
    CREATE_TODO(state, todoItem) {
      state.todos.push(todoItem)
      console.log(state.todos);
    }
  },
  actions: {
    createTodo (context, todoTitle) {
      const todoItem = {
        title: todoTitle,
        isCompleted: false,
      }
      console.log(todoItem);
      context.commit('CREATE_TODO', todoItem)
    }
  },
  modules: {
  }
})
