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
        <div class="ui circular blue animated button right floated" tabindex="0" @click.native="toggle">
          <div class="hidden content"  v-on:click="create">Create</div>
          <div class="visible content">
            <i class="plus icon"></i>
          </div>
          
      </div>
      <sui-button @click.native="toggle">Show Modal</sui-button>
      <sui-modal v-model="open">
        <form class="ui form">
               <h1>Create new contact</h1>
                <div class="required field">
                    <label>Full Name</label>
                    <input type="text" name="first-name" placeholder="First Name">
                </div>
                <div class="required field">
                    <label>Email</label>
                    <input type="email" name="first-name" placeholder="you@example.com">
                </div>
                <div class="required field">
                    <label>Phone</label>
                    <input type="text" name="first-name" placeholder="+27123456789">
                </div>
        
                    <div class="field">
                            <label>Type</label>
                            <input type="text" name="professional" placeholder="personal /professional">
    
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
    return { open: false };
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