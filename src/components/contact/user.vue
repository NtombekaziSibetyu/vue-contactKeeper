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
      <sui-button circular color="teal" @click.native="toggle"></sui-button>
      <sui-modal v-model="open">
        <form class="ui form">
               <h1>Create new contact</h1>
                <div class="required field">
                    <label>Full Name</label>
                    <input v-model="name" type="text" name="name" placeholder="Name">
                </div>
                <div class="required field">
                    <label>Email</label>
                    <input v-model="name"  type="email" name="first-name" placeholder="you@example.com">
                </div>
                <div class="required field">
                    <label>Phone</label>
                    <input v-model="name" type="text" name="first-name" placeholder="+27123456789">
                </div>
        
                    <div class="field">
                            <label>Type</label>
                            <input v-model="name" type="text" name="professional" placeholder="personal /professional">
                    </div>
                <button class="ui positive  button" type="submit">Save</button>
            </form>
            
      </sui-modal>
</div>
</template>

<script>
export default {
  name: 'user',
  data() {
    return { open: false ,
    };
  },
  methods: {
    toggle() {
      this.open = !this.open;
    },
    
  },
};
</script>
<style scoped>

</style>