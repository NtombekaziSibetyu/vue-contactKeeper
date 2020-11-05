<template>
<div class='contacts' >
  <div class="inline fields">
        <sui-button class="right floated" color="green" v-on:click="logOut"> Sign-out</sui-button>
  </div>
    <div class="ui cards" >
       <div class="card" v-for="(person,index) in contacts" :key="index" person.id={update}>    
          <div class="content">
            <i class="user icon right floated"></i>
            <div class="header">
              {{ person.name }}
            </div>
            <div class="meta">
              {{ person.type }}
            </div>
            <div class="description">
              Elliot requested permission to view your person details
              <div><i class="mobile alternate icon"></i>{{ person.phone }}</div>
          <div><i class="mail icon"></i> {{ person.email }}</div>
            </div>
          </div>
          <div class="extra content">
            <div class="ui two buttons">
              <sui-button class="ui basic blue button" @click.native="toggle" v-on:click='update =  person._id'> 
                <i class="pencil icon"></i>
                Update</sui-button>
              <sui-button class="ui basic red button" v-on:click="deleteContact(person._id)" >
                <i class="trash alternate icon"></i> Delete</sui-button>
            </div>
          </div>
      </div>
  <div> 
</div>
  <sui-modal v-model="open">
        <form class="ui form" >
                <div class=" field">
                    <label>Full Name: {{contact.name}}</label>
                    <input v-model="contact.name" type="text" name="name" placeholder="Name">
                </div>
                <div class="field">
                    <label>Email</label>
                    <input v-model="contact.email"  type="email" name="first-name" placeholder="you@example.com">
                </div>
                <div class="field">
                    <label>Phone</label>
                    <input v-model="contact.phone" type="text" name="first-name" placeholder="+27123456789">
                </div>
                    <div class="field">
                            <label>Type</label>
                            <input v-model="contact.type" type="text" name="professional" placeholder="personal /professional">
                    </div>
                <button class="ui positive  button" type="button" v-on:click="updateContact(update)">Save</button>
            </form>
            
      </sui-modal>
</div>
</div>
</template>
<script>
export default {
    name: 'contacts',
    data : () => {
      return {
        open : false,
        contacts : [],
        update : '',
        contact: {name : "",
      phone : "",
      email : "",
      type : ""}
      }
    },
    methods : {
       toggle() {
      this.open = !this.open;
    },
      getContacts : function() {
      let URL = "https://contacts-keeper-app2.herokuapp.com/api/contacts";
            let token = window.localStorage.getItem('token')
            fetch(URL, {
                method:"GET",   
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json',
                    "x-auth-token": token
                }
            })
            .then(response => response.json())
                .then(json => {
                    this.contacts = json;
                    console.log( 'your contacts', JSON.stringify(json));
                })
                .catch(err => console.log('err->',err))
      },
      updateContact : function(_id) {
        let URL = `https://contacts-keeper-app2.herokuapp.com/api/contacts/${_id}`;
        let token = window.localStorage.getItem('token')
        let _data = this.contact
              fetch(URL, {
                method:"PUT",  
                body:  JSON.stringify(_data), 
                mode: 'cors',
                headers: {
                      'Content-Type': 'application/json',
                      "x-auth-token": token
                  }
              })
             .then(response => {response.json()} )
                 .then(json => {
                     console.log('json->', json );
                 })
                .catch(err => console.log('err->',err))
    },
    // 
    // 
      deleteContact : function(_id){
            let URL = `https://contacts-keeper-app2.herokuapp.com/api/contacts/${_id}`;
            let token = window.localStorage.getItem('token')
              let _data = this.contact
              fetch(URL, {
                  method:"DELETE",  
                    body:  JSON.stringify(_data), 
                  mode: 'cors',
                  headers: {
                      'Content-Type': 'application/json',
                      "x-auth-token": token
                  }
              })
              .then(response => response.json())
                  .then(json => {
                      console.log('json->', json );
                      this.getContacts()
                  })
                  .catch(err => console.log('err->',err))
      },
    logOut : function(){
        window.localStorage.removeItem('token')
        this.$router.push('/')
    },
    },
    created : function(){
     
    },
    mounted : function(){
      this.getContacts()
    }
}
</script>
<style scoped >
.ui .search {
  margin : 10px;
}
.ui .cards {
margin : 10px;
}
#i{
  color: blue;
}
</style>