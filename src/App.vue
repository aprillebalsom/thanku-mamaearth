<template>
    <div id="app">
        <AlertBar />
        
        <div id="nav" class="wrapper">
        <!-- <router-link class="click-r" to="/shop">shop</router-link>  -->
        <!-- <router-link class="click-o" to="/info">why sustainable?</router-link>  -->
        <!-- TODO update logo so colors are in proper order -->
        <router-link to="/"><img class="logo" src="./assets/logo.png" alt="thank u, mama earth logo"></router-link>  
        <!-- <router-link class="click-y" to="/fun">fun stuff</router-link> -->
        <!-- <router-link class="click-g" to="/about">about</router-link> -->
        <!-- <router-link class="click-b" to="/contact">join the club</router-link> -->
        </div>

        <router-view />

        <footer>
            <section class="main-footer wrapper">
                <!-- <div class="footer-nav">
                    <ul> 
                        <li>
                            <router-link class="click-r" to="/shop">shop</router-link> 
                        </li>
                        <li>
                            <router-link class="click-y" to="/info">why sustainability?</router-link> 
                        </li>
                         <li>
                            <router-link class="click-o" to="/fun">fun stuff</router-link>
                        </li>
                    </ul>

                    <ul>
                        <li>
                            <router-link class="click-g" to="/about">about</router-link>
                        </li>
                        <li>
                            <router-link class="click-b" to="/contact">join the club</router-link>  
                        </li>
                    </ul>
                </div> -->

                <div class="footer-socials">
                    <h4>Stay In Touch</h4>
                    <ul>
                        <li><a target="_blank" rel="noopener" title="instagram" href="https://www.instagram.com/thankumamaearth/">
                            <font-awesome-icon class="click-y" :icon="['fab', 'instagram']" />
                        </a></li>

                        <li><a target="_blank" rel="noopener" title="facebook" href="https://www.facebook.com/thankumamaearth">
                            <font-awesome-icon class="click-b" :icon="['fab', 'facebook-f']" />
                        </a></li>
                        <li><a target="_blank" rel="noopener" title="pinterest" href="https://www.pinterest.ca/thankumamaearth/_created/">
                            <font-awesome-icon class="click-r" :icon="['fab', 'pinterest']" />
                        </a></li>
                        <li><a target="_blank" rel="noopener" title="etsy" href="https://www.etsy.com/ca/shop/sundayhomework">
                            <font-awesome-icon class="click-o" :icon="['fab', 'etsy']" />
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
        name: "App",
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

        padding-top: 25px;
    
        display: flex;
        justify-content: center;

        a {
            margin: 0 15px;
        }
    }

    .main-footer {
        border-top: .5px solid $black;
        font-size: 1.4rem;
        line-height: 2.2rem;

        padding: 50px 0;
        margin-top: 40px;

        display: flex;
        justify-content: space-between;
        align-items: flex-start;

        position: relative;
        z-index: 10;

        &::before {    
            content: "";
            background-image:  url('~@/assets/earth-footer.png');
            background-size: contain;
            background-repeat: no-repeat;
            background-position: center;
            position: absolute;
            top: 20px;
            right: 0px;
            bottom: -1px;
            left: 0px;
            opacity: 0.5;
        }
    }

    .footer-nav,
    .footer-socials ul {
        display: flex;
    }

    .footer-nav ul {
        margin-right: 25px;
    }

    .footer-socials li {
        margin: 10px 15px 10px 0;

        svg {
            transition: .5s all;
        }
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
