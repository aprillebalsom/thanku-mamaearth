<template>
    <div class="home">
        
        <HomepageHeader msg="giving back to mama earth by buying less but better" />

        <div class="homepage-main wrapper">
            
            <div class="homepage-intro">
                <p>A collective of <em class="highlight highlight-r">sustainable retailers</em> focused on giving back to the planet.
                    <span class="emphasis">thank u,</span>
                    mama
                    <span class="red">e</span>
                    <span class="orange">a</span>
                    <span class="yellow">r</span>
                    <span class="green">t</span>
                    <span class="blue">h</span> was created to inspire environmental change through eco-conscious shopping & buying less, but <span class="emphasis">but better</span>. Big or small, <em class="highlight highlight-y">every little bit counts</em> so thank u for doing your part. xx
                </p>
            </div>

            <section class="homepage-company">
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

            <section class="homepage-help">
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
                        <img src="https://via.placeholder.com/300x500/" alt="">
                    </div>
                </div>
            </section>

            <section class="join-club">
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
                    <router-link  class="square-btn click-b" to="/contact">join the club</router-link>
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

    .homepage-intro {
        font-size: clamp(2rem, 2.2vw, 2.4rem);

        width: 80%;
        margin: 0 auto;
        padding: 40px 0;
    }

    .homepage-company-header,
    .homepage-help-header {
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

</style>
