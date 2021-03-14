import { createStore } from 'vuex';
import UserModule from '@/modules/UserModule';

export default createStore({
  state: {
    message: 'Hello',
    name: 'Tom',
    todos: [
      {
        id: 1,
        text: 'content1',
        done: true,
      },
      {
        id: 2,
        text: 'content2',
        done: true,
      },
      {
        id: 3,
        text: 'content3',
        done: false,
      },
    ],
    count: 0,
  },
  getters: {
    doneTodos: (state) => {
      return state.todos.filter((todo) => todo.done === true);
    },
    doneTodoCounts: (state, getters) => {
      return getters.doneTodos.length;
    },
    getTodoById: (state) => (id) => {
      return state.todos.find((todo) => todo.id === id);
    },
  },
  mutations: {
    addCount: (state) => state.count++,
    addCustomCount: (state, n) => {
      return (state.count += n);
    },
    addPayloadCount: (state, payload) => {
      return (state.count += payload.amount);
    },
  },
  actions: {
    // async operation of state use actions(api...)
    increment({ commit }) {
      setTimeout(() => {
        commit('addCount');
      }, 1000);
    },
  },
  modules: { UserModule },
});
