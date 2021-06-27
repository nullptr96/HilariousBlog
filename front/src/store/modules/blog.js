import request from '@/http/request';
let state = {
  token: window.sessionStorage.getItem("token"),
  userInfo: null,
  blogInfo: null
},
getters = {

},
mutations = {
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
actions = {
  getBlogInfo({ commit }) {
    request.getBlogInfo().then(res => {
      if (res.code === 0) {
        commit('setBlogInfo', res.data);
        console.log("This is Debug" + state.blogInfo)
      } else {
        console.log("This is Debug error")
      }
    }).catch(err => {
      console.log(err);
    })
  }
}
export default {state, getters, mutations, actions}
