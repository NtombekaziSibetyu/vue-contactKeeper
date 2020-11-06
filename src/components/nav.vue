<template>
    <div class="ui inverted segment">
        <sui-menu  pointing secondary class="ui inverted secondary pointing menu">
             <sui-icon size="big" name="address book outline">  Contact Keeper </sui-icon>
             <a is="sui-menu-item"> Contact Keeper</a>
             <router-link to="/" axact>
                <a
                is="sui-menu-item"
                :active="isActive(item1)"
                :content="item1"
                @click="select(item1)"
                /> 
             </router-link>
            <router-link to="/sign-in" axact>
                <a
                is="sui-menu-item"
                :active="isActive(item2)"
                :content="item2"
                @click="select(item2)"
                /> 
             </router-link>
        </sui-menu>
    </div>
</template>

<script>
export default {
    name: 'navbar',
     data() {
    return {
      active: 'Home',
      item1 : 'Home',
      item2 : 'Sign-in'
    };
  },
  methods: {
     isActive(name) {
      return this.active === name;
    },
    select(name) {
      this.active = name;
    },
  },
}
</script>
<style scoped>


</style>