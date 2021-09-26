export default {
  namespaced: true,
  // 存储的值
  state: {
    message: []
  },
  // 获取值的最新状态
  getters: {
    getMessage: state => state.message
  },
  // 改变值
  mutations: {
    setmessage (state, value) {
      console.log(state, value);
      state.message = value
    }
  },
  actions: {}
}