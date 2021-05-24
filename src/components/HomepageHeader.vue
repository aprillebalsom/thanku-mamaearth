<template>
    <div class="homepage-header">

        <section class="home-header">
            
            <div class="home-header-text wrapper">
                <h1>
                    <div>Give back to mama earth by buying less,</div>
                    <div class="emphasis">but better.</div></h1>
                <!-- <router-link class="square-btn click-r spread" to="/shop">shop</router-link> -->
                <a class="square-btn click-r spread" href="https://thankumamaearth.pory.app/">shop</a>
            </div>

        </section>

        <section class="categories wrapper">
            <ul>
                <li>
                    <!-- <router-link class="overlay" to="/shop">Clothing</router-link> -->
                    <a class="overlay" href="https://thankumamaearth.pory.app/">clothing</a>
                    <img src="~@/assets/clothes-cat-icon.png" alt="Hand-drawn hanger.">
                </li>
                <li>
                    <!-- <router-link class="overlay" to="/shop">Home</router-link> -->
                    <a class="overlay" href="https://thankumamaearth.pory.app/">home</a>
                    <img src="~@/assets/home-cat-icon.png" alt="Hand-drawn house.">
                </li>
                <li>
                    <!-- <router-link class="overlay" to="/shop">Accessories</router-link> -->
                    <a class="overlay" href="https://thankumamaearth.pory.app/">accessories</a>
                    <img src="~@/assets/accessories-cat-icon.png" alt="Hand-drawn bucket hat.">
                </li>
                <li>
                    <!-- <router-link class="overlay" to="/shop">Beauty</router-link> -->
                    <a class="overlay" href="https://thankumamaearth.pory.app/">beauty</a>
                    <img src="~@/assets/beauty-cat-icon.png" alt="Hand-drawn serum bottle.">
                </li>
                <li>
                    <!-- <router-link class="overlay" to="/shop">Food</router-link> -->
                    <a class="overlay" href="https://thankumamaearth.pory.app/">food</a>
                    <img src="~@/assets/food-cat-icon.png" alt="Hand-drawn  mushrooms.">
                </li>
                <li>
                    <!-- <router-link class="overlay" to="/shop">Shoes</router-link> -->
                    <a class="overlay" href="https://thankumamaearth.pory.app/">shoes</a>
                    <img src="~@/assets/shoes-cat-icon.png" alt="Hand-drawn sneaker.">
                </li>
                <li>
                    <!-- <router-link class="overlay" to="/shop">Baby</router-link> -->
                    <a class="overlay" href="https://thankumamaearth.pory.app/">baby</a>
                    <img src="~@/assets/baby-cat-icon.png" alt="Hand-drawn baby onesie.">
                </li>
                <li>
                    <!-- <router-link class="overlay" to="/shop">BYOC</router-link> -->
                    <a class="overlay" href="https://thankumamaearth.pory.app/">byoc</a>
                    <img src="~@/assets/byoc-cat-icon.png" alt="Hand-drawn mason jar.">
                </li>
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

    h1 {
        font-weight: lighter;

        display: flex;
        flex-direction: column;
        justify-content: flex-start;
    
        div:nth-of-type(2) {
            padding-top: 10px;
            text-align: right;
        }
    }

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
        font-size: 1.3rem;

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
