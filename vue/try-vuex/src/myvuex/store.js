// 实例是否是  this.state
export class Store {
  constructor(options, Vue) {
    // console.log(options);
    // 让this.$store 
    // 找到.state
    this.options = options
    this.getters = {}
    // 扩展vue
    // new Vue({
    //   store
    // })
    Vue.mixin({
      beforeCreate: vuexInit
    })
    forEachValue(options.getters, (getterFn, getterName) => {
      // console.log(getterFn, getterName);
      registerGetter(this, getterName, getterFn);
    })
  }
  // this.$store.state.count 
  // 在获取的同时还可以做其他的事情
  get state() {
    console.log('get 获取属性');
    return this.options.state;
  }
  set state(val) {
    throw new Error('不可以直接修改属性，请通过mutations');
  }
}
// this.$store
function vuexInit() {
  // console.log('实例化之前');this
  // this -> vue 
  const options = this.$options;
  console.log(this, this.$options);
  if (options.store) { //已有
    // this指向vue
    this.$store = typeof options.store === 'function'?options.store():options.store
  } else if (options.parent && options.parent.$store) {
    this.$store = options.parent.$store
  }
}

function forEachValue(obj, fn) {
  // console.log(obj, fn);
 Object.keys(obj).forEach(key => fn(obj[key], key));
  // {
  //   key: function(){},
  //   key: function(){}
  // }
  // obj  所有的方法遍历一下， fn(name, func())
}

function registerGetter(store, getterName, getterFn) {
  // this.$store.getters.getterName
  Object.defineProperty(store.getters, getterName, {
    get : () => {
      console.log(getterFn, '------');
      return getterFn(store.state)
    }
  })
}

