<template>
  <div id="app">
    <div id="nav" class="wrapper">
      <router-link to="/shop">shop</router-link> 
      <router-link to="/info">why sustainability?</router-link> 
      <!-- TODO update logo so colors are in proper order -->
      <router-link to="/"><img class="logo" src="./assets/logo.png" alt="thank u, mama earth logo"></router-link>  
      <router-link to="/fun">fun stuff</router-link>
      <router-link to="/about">about</router-link>
    </div>

    <router-view class="wrapper" />

    <footer>
      <section class="main-footer wrapper">
        <div class="footer-nav">

        </div>
        <div class="footer-socials">
          <h4>Stay In Touch</h4>
          <ul>
            
            <li><a target="_blank" rel="noopener" href="https://www.instagram.com/thankumamaearth/">
              <font-awesome-icon :icon="['fab', 'instagram']" />
            </a></li>

            <li><a target="_blank" rel="noopener" href="https://www.facebook.com/thankumamaearth">
              <font-awesome-icon :icon="['fab', 'facebook-f']" />
            </a></li>
            <li><a target="_blank" rel="noopener" href="https://www.pinterest.ca/thankumamaearth/_created/">
              <font-awesome-icon :icon="['fab', 'pinterest']" />
            </a></li>
            <li><a target="_blank" rel="noopener" href="https://www.etsy.com/ca/shop/sundayhomework">
              <font-awesome-icon :icon="['fab', 'etsy']" />
            </a></li>
          </ul>

        </div>
        
      </section>

      <section class="sub-footer wrapper">
        <p>Designed + developed by <a href="https://www.etsy.com/ca/shop/sundayhomework" target="_blank" rel="noopener">sunday homework</a> | &copy; 2021 <em>thank u,</em> mama earth</p>
      </section>

    </footer>
  </div>
</template>


<style lang="scss">
@import '@/styles/config.scss';
@import '@/styles/general.scss';


#nav {
  text-align: center;

  padding: 30px;
  
  display: flex;
  justify-content: center;

  a {
    margin: 0 15px;
    
    &.router-link-exact-active {
      color: $green;
    }
  }
}

footer {
  background-color: $green;
}
</style>
