<template>
     <div>
       <div class="card">
          <div class="image">
            <img src="">
          </div>
          <div class="content">
            <div class="header">Matt Giampietro</div>
            <div class="meta">
              <a>Role</a>
            </div>
            <div class="description">
              Matthew is an interior designer living in New York.
            </div>
          </div>
          <div class="extra content">
            <span class="right floated">
              Joined in 2013
            </span>
            <span>
              <i class="user icon"></i>
              75 Friends
            </span>
          </div>
        </div>
      <sui-button circular color="teal" @click.native="toggle">
        create
      </sui-button>
      <sui-modal v-model="open">
        <form class="ui form">
               <h1>Create new contact</h1>
                <div class="required field">
                    <label>Full Name</label>
                    <input v-model="contact.name" type="text" name="name" placeholder="Name">
                </div>
                <div class="required field">
                    <label>Email</label>
                    <input v-model="contact.email"  type="email" name="first-name" placeholder="you@example.com">
                </div>
                <div class="required field">
                    <label>Phone</label>
                    <input v-model="contact.phone" type="text" name="first-name" placeholder="+27123456789">
                </div>
        
                    <div class="field">
                            <label>Type</label>
                            <input v-model="contact.type" type="text" name="professional" placeholder="personal /professional">
                    </div>
                <button class="ui positive  button" type="button" v-on:click="addContact">Save</button>
            </form>
            
      </sui-modal>
</div>
</template>

<script>
export default {
  name: 'user',
  data() {
    return { 
      open: false ,
      contact : {
      name : "",email:"", phone:"", type:""
    }
    };
  },
  methods: {
    toggle() {
      this.open = !this.open;
    },
     addContact() {
            let URL = "https://contacts-keeper-app2.herokuapp.com/api/contacts";
            let _data = this.contact;
            let token = window.localStorage.getItem('token')
            fetch(URL, {
                method:"POST",   
                body:  JSON.stringify(_data),
                mode: 'cors',
                
                headers: {
                  "Content-type": "application/json",
                  "x-auth-token": token
                }
            })
            .then(response => response.json())
                .then(json => {
                  console.log('json->', json);
                }
                )
                .catch(err => console.log('err->',err))
        },
  },
};
</script>
<style scoped>

</style>