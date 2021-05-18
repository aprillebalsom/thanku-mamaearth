<template>
    <div class="homepage-header">

        <section class="home-header">
            
            <div class="home-header-text wrapper">
                <h1>{{ msg }}</h1>
                <router-link class="square-btn click-r" to="/shop">shop</router-link>
            </div>

        </section>

        <section class="categories wrapper">
            <!-- TODO add in images here -->
            <ul>
                <li>
                    <router-link class="overlay" to="/shop">clothing</router-link>
                    <img src="~@/assets/clothes-cat-icon.png" alt="">
                </li>
                <li>
                    <router-link to="/shop">
                        <img src="~@/assets/food-cat-icon.png" alt="">
                    </router-link>
                </li>
                <li>
                    <router-link to="/shop">
                        <img src="~@/assets/beauty-cat-icon.png" alt="">
                    </router-link>
                </li>
                <li>
                    <router-link to="/shop">
                        <img src="~@/assets/home-cat-icon.png" alt="">
                    </router-link>
                </li>
                <li>
                    <router-link to="/shop">
                        <img src="~@/assets/shoes-cat-icon.png" alt="">
                    </router-link>
                </li>
                <li>
                    <router-link to="/shop">
                        <img src="~@/assets/byoc-cat-icon.png" alt="">
                    </router-link>
                </li>
                <li><router-link to="/shop"><img src="~@/assets/clothes-cat-icon.png" alt=""></router-link></li>
                <li><router-link to="/shop"><img src="~@/assets/clothes-cat-icon.png" alt=""></router-link></li>
            </ul>

        </section>
        
    </div>
</template>

<script>
    export default {
        name: "HomepageHeader",
        props: {
            msg: String,
        }
    };
</script>

<style scoped lang="scss">

    @import '@/styles/config.scss';
    @import '@/styles/general.scss';

    .home-header {
        text-align: right;
        
        background-image: url('~@/assets/homepage.png');
        background-size: cover;
        background-position: left bottom;
        background-repeat: no-repeat;

        padding-bottom: 150px;
        height: 68.5vh;

        display: flex;
        justify-content: flex-start;
        align-items: center;
    }

    .square-btn {
        margin-top: 20px;
    }

    .categories {
        border-bottom: .5px solid $black;
        padding: 20px 0;
    
        ul {
            display: flex;
            justify-content: space-evenly;
            align-items: center;

            li {
                margin: 0 10px;
                position: relative;
            }


            li img {
                background-color: #fffcf7;
                width: 80%;
                border-radius: 50%;
            }
        }
    }

    .overlay {
        background-color: $white;
        opacity: 0;

        text-align: center;

        // border-radius: 50%;
        width: 80%;

        display: flex;
        justify-content: center;
        align-items: center;
   
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;

        transition: .5s all;

        &:hover,
        &:focus {
            opacity: .85;
        }
    }
</style>
