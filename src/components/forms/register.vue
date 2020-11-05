<template>
  <div class='login-form' >
    <div class="ui inverted segment">
    <div class="ui inverted form">
    <h1>Sign Up</h1>
    <div class="field">
      <div class="required field">
        <label>Name</label>
        <div class="ui left icon input">
            <input v-model="register.name" type="text" placeholder="Username" >
            <i class="user icon"></i>
        </div>
      </div>
    
      <div class="required field">
        <label>Phone</label>
        <div class="ui left icon input">
         <input v-model="register.phone" placeholder="+27123456789" type="text">
         <i class="phone icon"></i>
        </div>
      </div>
      <div class="required field">
        <label>Email</label>
        <div class="ui left icon input">
        <input  v-model="register.email" placeholder="name@example.com" type="email">
        <i class="envelope icon"></i>
        </div>
      </div>
      <div class="required field">
        <label>Password</label>
        <div class="ui left icon input">
            <input v-model="register.password" type="password">
            <i class="lock icon"></i>
        </div>
      </div>
      <div class="required field">
        <label> Confirm Password</label>
        <div class="ui left icon input">
            <input v-model="register.password2" type="password">
            <i class="lock icon"></i>
        </div>
      </div>
    </div>
  
    <div class="ui basic  grey button" v-on:click="handleRegister">Register</div>
  </div>
</div>
  </div>
</template>

<script>
export default {
    name : 'registerUser',
    data: () => {
      return {
        register : {
      name : "",
      phone : "",
      email : "",
      password : "",
      password2:""
    }
      }
    
    },
    methods: {
      goToUser : function(){
        return this.$router.push('/user')
      },
      handleRegister() {
            let URL = "https://contacts-keeper-app2.herokuapp.com/api/users";
            let _data = this.register;
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
                    window.localStorage.setItem('token', json.token)
                    this.$router.push('/user')
                })
              .catch(err => console.log('err->',err))
        }


    }
}
</script>
<style scoped>
.login-form {
  margin:10px;
  padding: 10px;
}
</style>