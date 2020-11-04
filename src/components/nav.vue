<template>
    <div class="ui inverted segment">
        <div class="ui inverted secondary pointing menu">
             <i class="address book outline icon"></i>
             Contact Keeper 
            <a class="active item">
                <router-link to="/" exact >Home</router-link>
            </a>
            <a class="item">
                <router-link to="/sign-in" exact>Sign-in</router-link>
            </a>
            
        </div>
    </div>
</template>

<script>
export default {
    name: 'navbar'
}
</script>
<style scoped>


</style>