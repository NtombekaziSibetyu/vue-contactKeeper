<template>
  <div class="contacts">
    <div class="ui inverted segment">
    <div class="ui inverted  form">
      <h1>Sign In</h1>
    <div class="field">
      <div class="required field">
        <label>Email</label>
        <div class="ui left icon input">
        <input placeholder="name@example.com" type="email">
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
    <div class="ui basic grey button" v-on:click="showUser">Login</div>
  </div>
  </div>
  <!--<user v-show='!showUser'></user>-->
  </div>
</template>

<script>
//import userContacts from '/home/dev/development/ContactKeeper2/contacts-keeper/src/components/contact/main.vue'
export default {
    name : 'login',
    components : {
     
    },
    methods : {
      
    }
}
</script>
<style scoped>
.ui .inverted .segment{
  margin :  0 10px;
  align-self: center;
  border: 1px solid #696969;
  padding : 15px;
}
.contacts {
  background : #000000;
  color     : #fff;
}
</style>