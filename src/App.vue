<template>
  <div id="app">
    <div id="nav" class="wrapper">
      <router-link to="/shop">shop</router-link> 
      <!-- TODO update logo so colors are in proper order -->
      <router-link to="/"><img class="logo" src="./assets/logo.png" alt="thank u, mama earth logo"></router-link>  
      <router-link to="/fun">fun stuff</router-link>
      <router-link to="/about">about</router-link>
    </div>
    <router-view class="wrapper" />
  </div>
</template>


<style lang="scss">
@import '@/styles/config.scss';
@import '@/styles/general.scss';

#nav {
  padding: 30px;

  a {
    margin: 0 15px;
    
    &.router-link-exact-active {
      color: $green;
    }
  }
}
</style>
