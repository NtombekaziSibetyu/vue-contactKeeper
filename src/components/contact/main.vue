<template>
  <div class="hello">
    <div class="ui placeholder segment">
      <div class="ui two column very relaxed stackable grid">
        <div class="column">
          <user></user>
        </div>
        <div class="middle aligned column">
          <contacts></contacts>
        </div>
      </div>
    <div class="ui vertical hidden divider"></div>
  </div>
  </div>
</template>

<script>
import user from './user.vue'
import contacts from './contacts.vue'
export default {
  name: 'userContacts',
  components : {
    'user' : user,
    'contacts': contacts
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.ui {
  background: #2c3e50;
}
</style>
