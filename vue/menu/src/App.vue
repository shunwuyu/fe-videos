<template>
  <div id="app">
    <!-- 菜单  框架中必备的组件 -->
    <MenuList :data="menuList">
    </MenuList>
  </div>
</template>

<script>

import MenuList from './components/MenuList'
import menuData from './assets/menu.js'

export default {
  name: 'App',
  data() {
    return {
      menuList: menuData
    }
  },
  components: {
    MenuList
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
