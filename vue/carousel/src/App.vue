<template>
  <div id="app">
    <EcSlide 
      :time="1000"
      :autoplay="true"
      :list="list"
      :type="'slide'"
      :option="true"
      :swidth="800"
      :slidetype="'ease'"
      :direction="'left'"
    />
  </div>
</template>

<script>
import EcSlide from './components/EcSlide'

export default {
  name: 'App',
  data () {
    return {
      // 父子组件传递
      list: [
        {
          href: 'https://36kr.com/p/5245067',
          src: 'https://pic.36krcnd.com/201909/12030204/a6myzaob5uyszomn!heading'
        },
        {
          href: 'https://36kr.com/p/5245731',
          src: 'https://pic.36krcnd.com/201909/12000217/fggsu2ypi9t4011a!heading'
        },
        {
          href: 'https://36kr.com/p/5245740',
          src: 'https://pic.36krcnd.com/201909/11234002/cdcyqxr4mh1lrexo!heading'
        },
      ]
    }
  },
  components: {
    EcSlide
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
