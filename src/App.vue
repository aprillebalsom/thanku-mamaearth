<template>
  <div id="app">
    <div id="nav">
      <router-link to="/shop">shop</router-link> 
      <router-link to="/"><img src="./assets/logo.png" alt="logo"></router-link>  
      <router-link to="/about">about</router-link>
    </div>
    <router-view />
  </div>
</template>


<style lang="scss">
@import '@/styles/config.scss';
@import '@/styles/general.scss';

#app {
  font-family: 'Sorts Mill Goudy', serif;
  color: $black;
}

#nav {
  padding: 30px;

  a {
    color: #2c3e50;

    &.router-link-exact-active {
      color: $green;
    }
  }
}
</style>
