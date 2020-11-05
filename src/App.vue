<template>
  <div id="app">
    <nav-app></nav-app>
    <!--navbar end-->
   <router-view></router-view>
  </div>
</template>

<script>
 import navbar from './components/nav.vue'

export default {
  name: 'App',
  components: {
    'nav-app' : navbar,
  }
}
</script>

<style scoped>
#app {
  margin: 0 auto;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  align-items: center;
  color: #fff;
  background: #2c3e50;
}
template{
  margin: 10 auto;
  background: #2c3e50;
  background-size: cover;
  height: 100%;
}
</style>
