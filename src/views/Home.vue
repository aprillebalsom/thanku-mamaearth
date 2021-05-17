<template>
    <div class="home">
        
        <HomepageHeader msg="giving back to mama earth by buying less but better" />

        <div class="homepage-main wrapper">
            
            <section class="homepage-intro container">
                <p>A collective of <em class="highlight highlight-r">sustainable retailers</em> focused on giving back to the planet.
                    <span class="emphasis">thank u,</span>
                    mama
                    <span class="red">e</span>
                    <span class="orange">a</span>
                    <span class="yellow">r</span>
                    <span class="green">t</span>
                    <span class="blue">h</span> was created to inspire environmental change through eco-conscious shopping & buying less, but <span class="emphasis">but better</span>. Big or small, <em class="highlight highlight-y">every little bit counts</em> so thank u for doing your part. xx
                </p>
            </section>

            <section class="homepage-company container">
                <div class="homepage-company-header">
                    <font-awesome-icon class="red" :icon="['fas', 'rainbow']" />
                    <h2>Meet Some of Our Faves</h2>
                </div>

                <ul class="homepage-company-posts">
                    <li class="company-post">
                        <!-- TODO fill in info -->
                        <div class="company-post-img">
                            <img src="https://via.placeholder.com/300x200/" alt="">
                        </div>
                        <div class="company-post-text">
                            <h3>company #1</h3>
                            <p>Ducimus eaque nihil qui vero neque, quis sint nulla cumque cum quisquam libero itaque.</p>
                            <a class="square-btn click-o" href="#">shop</a>
                        </div>
                    </li>

                    <li class="company-post">
                        <!-- TODO fill in info -->
                        <div class="company-post-img">
                            <img src="https://via.placeholder.com/300x200/" alt="">
                        </div>

                        <div class="company-post-text">
                            <h3>company #2</h3>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                            <a class="square-btn click-y" href="#">shop</a>
                        </div>
                    </li>

                    <li class="company-post">
                        <!-- TODO fill in info -->
                        <div class="company-post-img">
                            <img src="https://via.placeholder.com/300x200/" alt="">
                        </div>

                        <div class="company-post-text">
                            <h3>company #3</h3>
                            <p>Eaque nihil qui vero neque, quis sint nulla cumque cum quisquam libero itaque, laudantium quaerat magni delectus accusantium, dolor non culpa?</p>
                            <a class="square-btn click-r" href="#">shop</a>
                        </div>
                    </li>
                    
                </ul>
            </section>

            <section class="homepage-help container">
                <div class="homepage-help-header">
                    <font-awesome-icon class="green" :icon="['fas', 'recycle']" />
                    <h2>Other Ways to Help</h2>
                </div>

                <div class="help-flex">

                    <div class="home-blog">
                        <!-- TODO fill in info -->
                        <div class="blog-post">
                            <img src="https://via.placeholder.com/300x200/" alt="">
                            <h3>Blog Post #1</h3>
                        </div>
                        <div class="blog-post">
                            <img src="https://via.placeholder.com/300x200/" alt="">
                            <h3>Blog Post #2</h3>
                        </div>
                    </div>

                    <div class="home-info">
                        <img src="https://via.placeholder.com/200x320/" alt="">
                    </div>
                </div>
            </section>

            <section class="join-club container">
                <div class="join-club-text">
                    <h2>Wanna Join the Club?</h2>
                    <p>Submit your business to be featured on 
                        <span class="emphasis">thank u,</span>
                    mama
                        <span class="red">e</span>
                        <span class="orange">a</span>
                        <span class="yellow">r</span>
                        <span class="green">t</span>
                        <span class="blue">h</span>
                    </p>
                </div>
                <div class="join-club-btn">
                    <router-link  class="square-btn click-b spread" to="/contact">join the club</router-link>
                </div>
            </section>

            <section class="homepage-share container">
                <div class="homepage-share-header">
                    <font-awesome-icon class="blue" :icon="['fas', 'seedling']" />
                    <h2>Spread The Word</h2>
                </div>

                <div class="share-flex">
                    <div class="share-stories">
                        <h3 class="emphasis">Five Ways to Shop With The Earth in Mind:</h3>
                        <ul>
                            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, officia.</li>
                            <li>Lorem ipsum dolor sit amet, consectetur adipisicing.</li>
                            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam modi debitis perferendis!</li>
                            <li>Lorem ipsum dolor sit amet.</li>
                            <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga, dolores?</li>
                        </ul>

                        <button class="square-btn" download>download + share</button>
                    </div>

                    <div class="share-wallpapers">
                        <h3 class="emphasis">Digital Downloads: Phone Wallpapers</h3>

                        <div class="wallpaper-flex">
                            <img src="https://via.placeholder.com/200x320/" alt="">
                            <img src="https://via.placeholder.com/200x320/" alt="">
                        </div>

                        <router-link class="click-y square-btn" to="/fun">download + see more</router-link>
                    </div>

                </div>
            </section>

        </div>
        
    </div>
</template>

<script>
    import HomepageHeader from "@/components/HomepageHeader.vue";

    export default {
        name: "Home",
        components: {
            HomepageHeader,
        },
    };
</script>

<style scoped lang="scss">

    @import '@/styles/config.scss';
    @import '@/styles/general.scss';

    .homepage-intro {
        font-size: clamp(2rem, 2.2vw, 2.4rem);

        width: 80%;
        margin: 0 auto;
    }

    .homepage-company-header,
    .homepage-help-header,
    .homepage-share-header {
        text-align: center;
        padding-bottom: 20px;
    }

    .homepage-company-posts {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: 1fr;
    }

    .company-post {
        margin: 20px 15px;
    }

    .company-post-text {
        padding: 25px 0;

        h3 {
            padding-bottom: 15px;
        }

        a {
            margin-top: 10px;
        }
    }

    .help-flex {
        display: flex;
        justify-content: center;
    }

    .home-blog,
    .home-info { 
        width: 50%;
    }

    .home-blog {
        margin-right: 20px;
    }

    .home-info {
        margin-left: 20px;
    }

    .blog-post:nth-of-type(1) {
        padding-bottom: 30px;
    }

    .join-club {
        border-top: .5px solid $black;
        border-bottom: .5px solid $black;

        display: flex;
        justify-content: space-between;
        align-items: center;

        .square-btn {
            min-width: 230px;
        }
    }

</style>
