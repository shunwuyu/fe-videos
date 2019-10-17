import Vue from 'vue'
import Vuex from 'vuex';
import cart from './modules/cart';
import products from './modules/products';
Vue.use(Vuex);

export default new Vuex.Store({
  // 四大家族?  
  // tmall 
  // 数据中心 模块 
  // 卖货 products
  // cart 购物车   物品的状态  
  modules: { // 
    // users,
    // news,
    cart,
    products
  }
})