<template>
  <div id="app">
    <h1>shopping cart Example</h1>
    <hr>
    <h2>Products</h2>
    <Products />
    <hr>
    <shoppingCart />
  </div>
</template>

<script>
import Products from './components/Products'
import shoppingCart from './components/shoppingCart'

export default {
  name: 'App',
  components: {
    Products,
    shoppingCart
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
