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
      <sui-button circular animated color="teal" @click.native="toggle">
        <sui-button-content visible>
          <sui-icon name="add user" />
         </sui-button-content>
        <sui-button-content hidden>
          create
        </sui-button-content>
      </sui-button>
      <sui-modal v-model="open">
        <sui-modal-header>Create new contact</sui-modal-header>
        <sui-modal-content>
           <form class="ui form">
               
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
                
            </form>
        </sui-modal-content>
        <sui-modal-actions>
          <sui-button class="ui positive  button" type="button" v-on:click="addContact"  @click.native="toggle">Save</sui-button>
        </sui-modal-actions>
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