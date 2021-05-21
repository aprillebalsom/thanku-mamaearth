<template>
    <div class="home">
        
        <HomepageHeader msg="giving back to mama earth by buying less but better" />

        <div class="homepage-main">
            
            <section class="homepage-intro wrapper">
                <p>A collective of <em class="highlight highlight-r">sustainable retailers</em> focused on giving back to the planet.
                    <span class="emphasis">thank u,</span>
                    mama
                    <span class="red">e</span>
                    <span class="orange">a</span>
                    <span class="yellow">r</span>
                    <span class="green">t</span>
                    <span class="blue">h</span> was created to inspire environmental change through eco-conscious shopping & buying less, <span class="emphasis">but better</span>. Big or small, <em class="highlight highlight-y">every little bit counts</em> so thank u for doing your part. xx
                </p>
            </section>

            <section class="homepage-company wrapper">
                <div class="header">
                    <font-awesome-icon class="red" :icon="['fas', 'rainbow']" />
                    <h2>Meet Some of Our Faves</h2>
                </div>

                <ul class="homepage-company-posts">
                    <li class="company-post">
                        <!-- TODO fill in info -->
                        <div class="company-post-img">
                            <img src="~@/assets/cadence.jpg" alt="">
                        </div>
                        <div class="company-post-text">
                            <h3>Cadence</h3>
                            
                            <h4 class="info-bubble">transparent</h4>
                            
                            <ul class="company-flex">
                                <li><img src="~@/assets/reuse-pillar-icon.png" alt=""></li>
                                <li><img src="~@/assets/recycled-mat-pillar-icon.png" alt=""></li>
                                <li><img src="~@/assets/recycled-pack-pillar-icon.png" alt=""></li>
                            </ul>
                            <p>the next generation of refillable travel containers for your personal care and toiletries. patent-pending, leakproof, and highly durable capsules made from recycled plastic. even better, they are magnetic so they stick together creating a cute lil honeycomb.</p>
                            <a class="square-btn click-o" target="_blank" rel="noopener" href="https://keepyourcadence.com/">shop</a>
                        </div>
                    </li>

                    <li class="company-post">
                        <!-- TODO fill in info -->
                        <div class="company-post-img">
                            <img src="~@/assets/arq.jpg" alt="">
                        </div>

                        <div class="company-post-text">
                            <h3>arq</h3>
                            <ul class="company-flex">
                                <li><img src="~@/assets/organic-pillar-icon.png" alt=""></li>
                                <li><img src="~@/assets/plastic-free-pillar-icon.png" alt=""></li>
                                <li><img src="~@/assets/recycled-pack-pillar-icon.png" alt=""></li>
                            </ul>
                            <p>Known as the brand of simple undies and bra tops made for every body. in fact, they are so simple that arq only carries a few styles and launches limited colorways every so often. Their products are made in the USA in a family-owned factory using GOTS certified fabrics that always come in the coolest colors and prints. </p>
                            <a class="square-btn click-y" target="_blank" rel="noopener" href="https://shoparq.com/">shop</a>
                        </div>
                    </li>

                    <li class="company-post">
                        <!-- TODO fill in info -->
                        <div class="company-post-img">
                            <img src="~@/assets/green-boheme.jpg" alt="">
                        </div>

                        <div class="company-post-text">
                            <h3>Green Bohème</h3>
                            <ul class="company-flex">
                                <li><img src="~@/assets/plastic-free-pillar-icon.png" alt=""></li>
                                <li><img src="~@/assets/recycled-pack-pillar-icon.png" alt=""></li>
                                <li><img src="~@/assets/zero-waste-pillar-icon.png" alt=""></li>
                            </ul>
                            <p>Green bohème honours the practice of slow living with wares that have been thoughtfully created by artisans from around the world. They hope to inspire with collections that celebrate sustainability and quality in the art of homemaking.</p>
                            <a class="square-btn click-r" target="_blank" rel="noopener" href="https://greenboheme.ca/">shop</a>
                        </div>
                    </li>
                    
                </ul>
            </section>

            <section class="homepage-help">
                <div class="header wrapper">
                    <font-awesome-icon class="green" :icon="['fas', 'recycle']" />
                    <h2>Other Ways to Help</h2>
                </div>

                <div class="help-flex wrapper">

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

            <section class="join-club wrapper">
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

            <section class="homepage-share wrapper">
                <div class="header">
                    <font-awesome-icon class="blue" :icon="['fas', 'seedling']" />
                    <h2>Spread The Word</h2>
                </div>

                <div class="share-flex">
                    <div class="share-stories">
                        <h3 class="emphasis">Five Ways to Shop With The Earth in Mind:</h3>
                        <ul>
                            <li><p>When u can, <em class="highlight highlight-r">shop local and support small businesses</em>. This stimulates your local economy & ensures a small carbon footprint. ps. don't forget those <em class="highlight highlight-g">reusable totes!</em></p></li>
                            <li><p>Think <em class="highlight highlight-b">quality not quantity</em> and invest in timeless pieces made of organic or recycled fibers.</p></li>
                            <li><p><em class="highlight highlight-y">Know your personal style</em> and avoid purchasing trendy items that will go out of style quickly and likely end up in a landfill.</p></li>
                            <li><p><em class="highlight highlight-g">Shop pre-loved & vintage pieces</em> as it extends the life of a product and saves it from ending up in the garbage.</p></li>
                            <li><p>Don't shop at all. Instead, check out <em class="highlight highlight-o">trading groups</em> or the <em class="highlight highlight-b">freebie section</em> of reseller sites, this will not only save mama earth but also money! </p></li>
                        </ul>

                        <p class="emphasis note">*info above is available as instagram story slides for u to download & share to help spread the word.</p>

                        <button class="square-btn click-r" download>download + share</button>
                    </div>

                    <div class="share-wallpapers">
                        <h3 class="emphasis">Digital Downloads: Phone Wallpapers</h3>

                        <div class="wallpaper-flex">
                            <img src="~@/assets/lil-bits-mama-earth-mockup.png" alt="An iPhone with the lil bits of mama earth digital wallpaper.">
                            <img src="~@/assets/everyday-like-earth-day-mockup.png" alt="An iPhone with the treat every day like earth day digital wallpaper.">
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

    .info-bubble {
        background-image: url('~@/assets/info-bubble.png');
        background-repeat: no-repeat;

        font-size: 1.4rem;
        text-align: center;

        background-size: 100% 70%;
        background-position: 50%;
        padding: 20px 20px 25px;

        display: inline-block;

        position: absolute;
    }

    .homepage-intro {
        background-image: url('~@/assets/topography.svg');

        font-size: clamp(2rem, 2.2vw, 2.4rem);

        padding: 30px;
        width: 90%;
        margin: 40px auto 0;
        
    }

    .header {
        text-align: center;
        padding-bottom: 30px;
    }

    .homepage-company-posts {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: 1fr;
    }

    .company-post {
        margin: 0 15px;
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

    .company-flex {
        display: flex;
        justify-content: flex-start;

        li {
            margin-right: 20px;
            width: 15%;

            img {
                border-radius: 50%;
                
            }
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

    .homepage-share h3 {
        padding-bottom: 30px;
    }

    .share-flex,
    .wallpaper-flex {
        display: flex;
    }

    .share-flex { 
        justify-content: center;
        align-items: flex-start;
    }

    .note {
        font-size: 1.4rem;

        padding-top: 10px;
    }

    .share-wallpapers,
    .share-stories {
        width: 50%;
    }

    .share-wallpapers {
        padding-left: 30px;
    }

    .share-stories {
        padding-right: 30px;
    }

    .share-stories li {
        list-style: circle;
        padding: 10px;

        &:nth-of-type(1) {
            padding-top: 0;
        }
    }

    .share-wallpapers {
        border-left: .5px solid $black;
    }

    .wallpaper-flex {
        justify-content: space-between;
    }

    .wallpaper-flex img:nth-of-type(1) {
        margin-right: 10px;
    }

    .wallpaper-flex img:nth-of-type(2) {
        margin-left: 10px;
    }

    .homepage-share .square-btn {
        min-width: 240px;
        margin: 30px 0;
    }

</style>
