<template>
  <div id="app">
    {{count}}
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
 computed: {
   count () {
    //  console.log(this.$store);
     return this.$store.state.count;
   }
 },
 created() {
  //  this.$store.state = {
  //    count: 2
  //  }
  console.log('打印出this.$store.getters.getStatePlusOne的结果',
  this.$store.getters.getStatePlusOne);
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
