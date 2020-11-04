<template>
<div class="forms">

  <div class="ui segment">
      <div class="ui two column stackable center aligned grid" style>
        <div class="ui vertical divider">Or</div>
        <div class="middle aligned row">
            <div class="column">
            <sign-up></sign-up>
            </div>
            <div class="column">
            <login-app></login-app>
            </div>
        </div>
    </div>
  </div>
</div>
    
</template>
<script>
import login from './login.vue'
import register from './register.vue'
export default {
    name : 'forms',
    components  : {
        'login-app' : login,
        'sign-up' : register
    }
}
</script>
<style scoped>
.centered{
  margin:  0 auto;
  padding: 10px;
}
.forms{
  align-items : center;
  justify-content : center;
  background: #2c3e50;
}
.ui {
  background: #2c3e50;
  color: azure;
}
.ui .segment,
.ui .two .column s.tackable center .aligned .grid {
    background: #2c3e50;
}
</style>