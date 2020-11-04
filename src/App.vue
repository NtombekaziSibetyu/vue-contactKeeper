<template>
  <div id="app">
    <nav-app></nav-app>
    <!--navbar end-->
   
    <!--login and register forms
   -->
     <home-page></home-page>
    <sign-in></sign-in>
    <!--contact infor and contacts
    >-->
    <user-contacts></user-contacts>
    <!--app clossing tag-->
  </div>
</template>

<script>
 import navbar from './components/nav.vue'
import forms from './components/forms/forms.vue'
import userContacts from './components/contact/main.vue'
import landing from './components/landing.vue'
export default {
  name: 'App',
  components: {
    'nav-app' : navbar,
    'sign-in': forms,
    'user-contacts' : userContacts,
    'home-page': landing
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

</style>
