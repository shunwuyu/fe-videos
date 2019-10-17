const state = {
  on_or_up: 'on',
  show_login_dialog: false,
  sing_on: false, //登录状态 false 未登录
  user_info: { //用户信息
    id: 1,
    avatar_url: 'https://avatars2.githubusercontent.com/u/10172415?s=40&v=4',
    username: '美团严端银'
  }
};

const actions = {
  change_show_state(context, onOrUp) {
    context.commit('change_show_state', onOrUp)
  }
}
const mutations = {
  change_show_state (state, onOrUp) {
    state.show_login_dialog = !state.show_login_dialog
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}