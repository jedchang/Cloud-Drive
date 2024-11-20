import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLoading: false,
    currentNavbar: ''
  },
  // 更改 state 方式
  mutations: {
    // loading 狀態
    updateLoading(state, payload) {
      state.isLoading = payload;
    },
    setCurrentNavbar(state, payload) {
      state.currentNavbar = payload;
    }
  },
  // 透過 dispatch 執行 action，提交 mutations，並處理非同步操作。
  actions: {}
});
