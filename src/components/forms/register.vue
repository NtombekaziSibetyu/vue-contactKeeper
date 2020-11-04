<template>
  <div class='logi-form'>
    <div class="ui inverted segment">
    <div class="ui inverted form">
    <h1>Sign Up</h1>
    <div class="field">
      <div class="required field">
        <label>Name</label>
        <div class="ui left icon input">
            <input v-model="name" type="text" placeholder="Username">
            <i class="user icon"></i>
        </div>
      </div>
    
      <div class="required field">
        <label>Phone</label>
        <div class="ui left icon input">
         <input v-model="phone" placeholder="+27123456789" type="text">
         <i class="phone icon"></i>
        </div>
      </div>
      <div class="required field">
        <label>Email</label>
        <div class="ui left icon input">
        <input  v-model="email" placeholder="name@example.com" type="email">
        <i class="envelope icon"></i>
        </div>
      </div>
      <div class="required field">
        <label>Password</label>
        <div class="ui left icon input">
            <input type="password">
            <i class="lock icon"></i>
        </div>
      </div>
    </div>
  
    <div class="ui basic  grey button">Register</div>
  </div>
</div>
  </div>
</template>

<script>
export default {
    name : 'register'
}
</script>
<style scoped>
.login-form{
  margin:10px;
  padding: 10px;
}
</style>