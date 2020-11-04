<template>
    <div class="home">
        <div class="centered">
        <h1>Welcome to the Contact Keeper !</h1>
        </div>
        <img src="./logo.png" class="image right floated">
        <h3>Sign in to create, view and update your contacts </h3>
    </div>
</template>
<script>
export default {
    name : 'landing',
}
</script>
<style scoped>
.home{
  margin: 0 auto;
  align-content: center;
  justify-content: center;
  text-align: center;
}
.image{
    margin: 10px;
    width: 300px;
    height: 300px;
    border-radius: 10px;
    padding: 10px;
}
</style>