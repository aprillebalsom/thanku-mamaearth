<template>
    <div id="app">
        <AlertBar />
        
        <div id="nav" class="wrapper">
        <router-link class="click-r" to="/shop">shop</router-link> 
        <router-link class="click-o" to="/info">why sustainable?</router-link> 
        <!-- TODO update logo so colors are in proper order -->
        <router-link to="/"><img class="logo" src="./assets/logo.png" alt="thank u, mama earth logo"></router-link>  
        <router-link class="click-y" to="/fun">fun stuff</router-link>
        <router-link class="click-g" to="/about">about</router-link>
        <router-link class="click-b" to="/contact">join the club</router-link>
        </div>

        <router-view />

        <footer>
            <section class="main-footer wrapper">
                <div class="footer-nav">
                    <ul> 
                        <li>
                            <router-link to="/">home</router-link>  
                        </li>
                        <li>
                            <router-link to="/shop">shop</router-link> 
                        </li>
                        <li>
                            <router-link to="/info">why sustainability?</router-link> 
                        </li>
                    </ul>

                    <ul>
                        <li>
                            <router-link to="/fun">fun stuff</router-link>
                        </li>
                        <li>
                            <router-link to="/about">about</router-link>
                        </li>
                    </ul>
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

            <section class="sub-footer">
                <div class="wrapper">
                    <p>Designed + developed by <a href="https://www.etsy.com/ca/shop/sundayhomework" target="_blank" rel="noopener">sunday homework</a> | &copy; 2021 <em>thank u,</em> mama earth</p>
                </div>
            </section>

        </footer>

    </div>
</template>

<script>
    import AlertBar from "@/components/AlertBar.vue";

    export default {
        name: "Alert",
        components: {
            AlertBar,
        },
    };
</script>


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

    .main-footer {
        border-top: .5px solid $black;
        font-size: 1.4rem;
        line-height: 2.2rem;

        padding: 20px 0;
        margin-top: 40px;

        display: flex;
        justify-content: space-between;
        align-items: flex-start;
    }

    .footer-nav,
    .footer-socials ul {
        display: flex;
    }

    .footer-nav ul{
        margin-right: 25px;
    }

    .footer-socials li{
        margin: 10px 15px 10px 0;
    }

    .sub-footer {
        background-color: $green;

        text-align: center;

        padding: 10px 0;

        p,
        a {
            font-size: 1.4rem;
        }
    }
</style>
