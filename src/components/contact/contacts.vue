<template>
<div class='contacts'>
  <!--search bar-->
        <div class="ui search">
          <div class="ui icon input">
            <input class="prompt" type="text" placeholder="search...">
            <i class="search icon"></i>
          </div>
          <div class="results"></div>
        </div>
        <!--search bar-->
    <div class="ui cards">
       <div class="card">
        <div class="content">
           <i class="user icon right floated"></i>
          <div class="header">
            Elliot Fu
          </div>
          <div class="meta">
            Friends of Veronika
          </div>
          <div class="description">
            Elliot requested permission to view your contact details
            <div><i class="mobile alternate icon"></i>0415236985</div>
        <div><i class="mail icon"></i> fu@gmail.com</div>
          </div>
        </div>
        <div class="extra content">
          <div class="ui two buttons">
            <div class="ui basic blue button">
              <i class="pencil icon"></i>0
              Update</div>
            <div class="ui basic red button">
              <i class="trash alternate icon"></i> Delete</div>
          </div>
        </div>
      </div>

      <div class="card">
    <div class="content">
     <i class="user icon right floated"></i>
      <div class="header">
        Elliot Fu
      </div>
      <div class="meta">
        Friends of Veronika
      </div>
      <div class="description">
        Elliot requested permission to view your contact details
        <div><i class="mobile alternate icon"></i> 0114445668</div>
        <div><i class="mail icon">fu@gmail.com</i></div>
      </div>
    </div>
    <div class="extra content">
      <div class="ui two buttons">
        <div class="ui basic blue button">Update</div>
        <div class="ui basic red button">Delete</div>
      </div>
    </div>
  </div> 
    <div> 
</div>
</div>
</div>
</template>
<script>
export default {
    name: 'contacts'
}
</script>
<style scoped>
.ui .search {
  margin : 10px;
}
.ui .cards{
margin : 10px;
}
#i{
  color: blue;
}
</style>