import request from '@/http/request';
import {createStore} from 'vuex'

//TO-DO: enclosure vuex
const store = createStore({
  state: {
    token: window.sessionStorage.getItem("token"),
    userInfo: null,
    blogInfo: null
  },
  mutations: {
    setToken(state, token) {
      state.token = token;
      window.sessionStorage.setItem("token", token);
    },
    removeToken(state) {
      state.token = "";
      state.userInfo = null;
      window.sessionStorage.removeItem("token");
    },
    setUserInfo(state, userInfo) {
      state.userInfo = userInfo;
    },
    setBlogInfo(state, blogInfo) {
      state.blogInfo = blogInfo;
    },
  },
  actions: {
    getBlogInfo({ commit }) {
      request.getBlogInfo().then(res => {
        if (res.code === 0) {
          commit('setBlogInfo', res.data);
        } else {
          console.log("this is blog debug error");
        }
      }).catch(err => {
        console.log(err);
      })
    }
  }
});

export default store;