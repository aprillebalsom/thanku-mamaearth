<template>
    <div class="home">
        
        <HomepageHeader />

        <div class="homepage-main">
            
            <section class="homepage-intro wrapper">
                <p>A collective of <em class="highlight highlight-r">sustainable retailers</em> focused on giving back to the planet.
                    <span class="emphasis">thank u,</span>
                    mama
                    <span class="red">e</span>
                    <span class="orange">a</span>
                    <span class="yellow">r</span>
                    <span class="green">t</span>
                    <span class="blue">h</span> was created to inspire environmental change through eco-conscious shopping & buying less, <span class="emphasis">but better</span>. Big or small, <em class="highlight highlight-y">every little bit counts</em> so thank u for doing your part.
                </p>
            </section>

            <section class="homepage-company wrapper">
                <div class="header">
                    <font-awesome-icon class="red" :icon="['fas', 'rainbow']" />
                    <h2>Meet Some of Our Faves</h2>
                </div>

                <ul class="homepage-company-posts">

                        <li>
                        <CompanyPost 
                            imgSrcOne="arq.jpg"
                            imgAltOne="Bra and Undies hanging off of a chair."
                            name="arq"
                            pillarSrcOne="organic-pillar-icon.png"
                            pillarAltOne="Organic"
                            pillarSrcTwo="plastic-free-pillar-icon.png"
                            pillarAltTwo="Plastic Free"
                            pillarSrcThree="recycled-pack-pillar-icon.png"
                            pillarAltThree="Recycled Packaging"
                            info="Known as the brand of simple undies and bra tops made for every body. in fact, they are so simple that arq only carries a few styles and launches limited colorways every so often. Their products are made in the USA in a family-owned factory using GOTS certified fabrics that always come in the coolest colors and prints."
                            link="https://shoparq.com/"
                        />
                    </li>

                    <li>
                        <CompanyPost 
                            imgSrcOne="cadence.jpg"
                            imgAltOne="Recycled plastic refillable travel containers."
                            name="Cadence"
                            pillarSrcOne="reuse-pillar-icon.png"
                            pillarAltOne="Reusable"
                            pillarSrcTwo="recycled-mat-pillar-icon.png"
                            pillarAltTwo="Recycled Materials"
                            pillarSrcThree="recycled-pack-pillar-icon.png"
                            pillarAltThree="Recycled Packaging"
                            info="the next generation of refillable travel containers for your personal care and toiletries. patent-pending, leakproof, and highly durable capsules made from recycled plastic. even better, they are magnetic so they stick together creating a cute lil honeycomb."
                            link="https://keepyourcadence.com/"
                        />
                    </li> 

                    <li>
                        <CompanyPost 
                            imgSrcOne="green-boheme.jpg"
                            imgAltOne="Zero waste cleaning supples hung on a wall rack."
                            name="Green Bohème"
                            pillarSrcOne="zero-waste-pillar-icon.png"
                            pillarAltOne="Zero Waste"
                            pillarSrcTwo="plastic-free-pillar-icon.png"
                            pillarAltTwo="Plastic Free"
                            pillarSrcThree="recycled-pack-pillar-icon.png"
                            pillarAltThree="Recycled Packaging"
                            info="Green bohème honours the practice of slow living with wares that have been thoughtfully created by artisans from around the world. They hope to inspire with collections that celebrate sustainability and quality in the art of homemaking."
                            link="https://greenboheme.ca/"
                        />
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
                        <!-- TODO add in -->
                        <!-- <HomepageBlog />
                        <HomepageBlog /> -->
                        
                        <div class="blog-post">
                            <img src="" alt="">
                            <h3>Blog Post #1</h3>
                        </div>
                        <div class="blog-post">
                            <img src="https://via.placeholder.com/300x200/" alt="">
                            <h3>Blog Post #2</h3>
                        </div>
                    </div>

                    <div class="home-info">
                        <img src="~@/assets/this-for-that.png" alt="Small swaps to make that will help save mama earth.">
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
                    <!-- <router-link  class="square-btn click-b spread" to="/contact">join the club</router-link> -->
                    <a class="square-btn click-b spread" target="_blank" rel="noopener" href="https://forms.gle/HB84nvJu5SVYWfLs8">join the club</a>
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

                        <p class="emphasis note">*info above is available as instagram story slide for u to download & share to help spread the word.</p>

                        <a class="square-btn click-r" download href="~@/assets/5-ways-to-shop.png">download + share</a>
                    </div>

                    <div class="share-wallpapers">
                        <h3 class="emphasis">Digital Downloads: Phone Wallpapers</h3>

                        <div class="wallpaper-flex">
                            <img src="~@/assets/keep-growing-mockup.png" alt="An iPhone with the lil bits of mama earth digital wallpaper.">
                            <img src="~@/assets/everyday-like-earth-day-mockup.png" alt="An iPhone with the treat every day like earth day digital wallpaper.">
                        </div>
                        <a class="click-y square-btn" target="_blank" rel="noopener" href="https://www.etsy.com/ca/shop/sundayhomework">download + see more</a>
                        <!-- <router-link class="click-y square-btn" to="/fun">download + see more</router-link> -->
                    </div>

                </div>
            </section>

        </div>
        
    </div>
</template>

<script>
    import HomepageHeader from "@/components/HomepageHeader.vue";
    import CompanyPost from "@/components/CompanyPost.vue";
    import HomepageBlog from "@/components/HomepageBlog.vue";



    export default {
        name: "Home",
        components: {
            HomepageHeader,
            CompanyPost,
            HomepageBlog,
        },
    
    }

</script>

<style scoped lang="scss">

    @import '@/styles/config.scss';
    @import '@/styles/general.scss';

    .homepage-intro {

        font-size: clamp(2.2rem, 2.4vw, 2.6rem);

        border-bottom: .5px solid $black;

        padding: 100px 60px;
    }

    @media(max-width: 768px) {
        .homepage-intro {
            padding: 50px 25px;
        }
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

    @media (max-width: 768px) {
        .homepage-company-posts {
            grid-template-columns: 1fr;
            grid-template-rows: 1fr 1fr 1fr;
            gap: 40px 0;
        }

        .homepage-company { 
            padding-bottom: 0;
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

    @media (max-width: 768px) {
        .help-flex {
            flex-direction: column;
        }

        .home-blog, 
        .home-info {
            width: 100%;
            margin: 0;
        }

        .blog-post {
            padding-bottom: 50px;
        }
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

    @media (max-width: 768px) { 

        .join-club {
            flex-direction: column;
            align-items: flex-start;

            .square-btn {
                margin-top: 25px;
            }
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

    @media (max-width: 768px) {
        .share-flex {
            flex-direction: column;
        }

        .share-wallpapers,
        .share-stories {
            width: 100%;
            padding: 0;
        }

        .share-wallpapers {
            border-left: none;
            border-top: .5px solid $black;

            margin-top: 30px;
            padding-top: 60px;
        }
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
