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

            <section class="homepage-blog">
                <div class="homepage-blog-header">
                    <font-awesome-icon class="red" :icon="['fas', 'rainbow']" />
                    <h2>Meet Some of Our Faves</h2>
                </div>

                <ul class="homepage-blog-posts">
                    <li class="blog-post">
                        <!-- TODO fill in info -->
                        <div class="blog-post-img">
                            <img src="https://via.placeholder.com/300x200/" alt="">
                        </div>
                        <div class="blog-post-text">
                            <h3>company #1</h3>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus eaque nihil qui vero neque, quis sint nulla cumque cum quisquam libero itaque, laudantium quaerat magni delectus accusantium, dolor non culpa?</p>
                            <a class="square-btn" href="#">shop</a>
                        </div>
                    </li>

                    <li class="blog-post">
                        <!-- TODO fill in info -->
                        <div class="blog-post-img">
                            <img src="https://via.placeholder.com/300x200/" alt="">
                        </div>

                        <div class="blog-post-text">
                            <h3>company #2</h3>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus eaque nihil qui vero neque, quis sint nulla cumque cum quisquam libero itaque, laudantium quaerat magni delectus accusantium, dolor non culpa?</p>
                            <a class="square-btn" href="#">shop</a>
                        </div>
                    </li>

                    <li class="blog-post">
                        <!-- TODO fill in info -->
                        <div class="blog-post-img">
                            <img src="https://via.placeholder.com/300x200/" alt="">
                        </div>

                        <div class="blog-post-text">
                            <h3>company #3</h3>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus eaque nihil qui vero neque, quis sint nulla cumque cum quisquam libero itaque, laudantium quaerat magni delectus accusantium, dolor non culpa?</p>
                            <a class="square-btn" href="#">shop</a>
                        </div>
                    </li>
                    
                </ul>

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
        font-size: 2.4rem;

        width: 80%;
        margin: 0 auto;
        padding: 40px 0;
    }

    .homepage-blog-header {
        text-align: center;
        padding-bottom: 20px;
    }

    .homepage-blog-posts {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
    }

    .blog-post {
        margin: 20px 15px;
    }

    .blog-post-text {
        padding: 25px 0;

        h3 {
            padding-bottom: 15px;
        }

        a {
            margin-top: 10px;
        }
    }

</style>
