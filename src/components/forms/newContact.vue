
<template>
    <div>
        <div>
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
            
        </div>
        
    </div>     
</template>
<script>
export default {
    name : 'newContact',
    methods : {

    }
}
</script>
<style scoped>
.ui{
    margin : 10px;
    color: #ffff
}
</style>