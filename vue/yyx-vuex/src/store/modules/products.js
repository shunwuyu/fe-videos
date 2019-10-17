import shop from '../../api/shop'

const state = {
  all:[
   
  ]
}

const getters = {}

const actions = {
  // vuex 给actions的， commit mutations => state
  getAllProducts({ commit }) {
    // api
    shop.getProducts((products) => {
      console.log('前端到api，callback 回来了', products);
      commit('setProducts', products)
    })
    // mutations 
  }
}
//可以改state 
const mutations = {
  setProducts(state, products) {
    state.all = products
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}