import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

export default new Vuex.Store({

  state: {
    user: null,
    token: null,
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    setToken(state, token) {
      state.token = token;
    },
  },

  actions: {

  },
  getters: {
getToken(state,token){
  state.token=token;
}

    /*
    isLoggedIn(state) {
      return !!state.token;
    },*/
  }
});
