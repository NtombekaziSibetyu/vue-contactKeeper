<template>
  <div class="contacts">
    <div class="ui inverted segment">
    <div class="ui inverted form" >
      <h1>Sign In</h1>
    <div class="field">
      <div class="required field">
        <label>Email</label>
        <div class="ui left icon input">
        <input placeholder="name@example.com" type="email" v-model="login.email">
        <i class="envelope icon"></i>
        </div>
      </div>
      <div class="required field">
        <label>Password</label>
        <div class="ui left icon input">
            <input type="password" v-model="login.password">
            <i class="lock icon"></i>
        </div>
      </div>
    </div>
    <div class="ui basic grey button" v-on:click="handleLogin">Login</div>
  </div>
  </div>
  <!--<user v-show='!showUser'></user>-->
  </div>
</template>

<script>
//import userContacts from '/home/dev/development/ContactKeeper2/contacts-keeper/src/components/contact/main.vue'
export default {
    name : 'login',
    data : ()=>{
      return {
        login : {
          email : "",
          password : ""
        },
        token : ""
      }
    },
    components : {
     
    },
    methods : {
      handleLogin() {
            let URL = "https://contacts-keeper-app2.herokuapp.com/api/auth";
            let _data = this.login;
            fetch(URL, {
                method:"POST",   
                body:  JSON.stringify(_data),
                mode: 'cors',
                headers: {
                    "Content-type": "application/json"
                }
            })
            .then(response => response.json())
                .then(json => {
                  console.log('json->', json);
                  window.localStorage.removeItem('token',json.token)
                  window.localStorage.setItem( 'token',json.token)
                  this.$router.push('/user')
                }
                )
                .catch(err => console.log('err->',err))
        },
      
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