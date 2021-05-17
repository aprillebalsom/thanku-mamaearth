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
                <li><img src="https://via.placeholder.com/100" alt=""></li>
                <li><img src="https://via.placeholder.com/100" alt=""></li>
                <li><img src="https://via.placeholder.com/100" alt=""></li>
                <li><img src="https://via.placeholder.com/100" alt=""></li>
                <li><img src="https://via.placeholder.com/100" alt=""></li>
                <li><img src="https://via.placeholder.com/100" alt=""></li>
                <li><img src="https://via.placeholder.com/100" alt=""></li>
                <li><img src="https://via.placeholder.com/100" alt=""></li>
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
        padding: 20px 0;
    
        ul {
            display: flex;
            justify-content: space-evenly;
            align-items: center;

            li img {
                // margin: 0 10px;
                border-radius: 50%;
                border: .5px solid $black;
            }
        }
    }
</style>
