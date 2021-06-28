<template>
  <div class="earth-in-mind wrapper">
      <!-- TODO add in image -->
    <img src="" alt="">
    <section class="blog-text">
        <h1>Why Shop With the Earth in Mind</h1>

        <p>While it may be hard to think about how our actions impact mama earth, the fact of the matter is they do. Take every toothbrush you’ve ever used. Well, every single one of them is still on this earth somewhere, and will be for centuries to come.</p>

        <p>Now take this idea and think about all the other toothbrushes also living in a landfill somewhere. If you think about it too hard, you start envisioning the opening scenes of wall-e, where the mountains of trash are so high that earth is inhabitable and everyone has moved to living on the axiom. The thought can feel overwhelming, hopeless, and frankly makes you wonder where to even begin.</p>

        <p>But small steps really do make a difference and can be easily adopted into every lifestyle. The important thing to remember is that what mama earth really needs is a lot of people doing their part in small ways rather than a few people trying to do it perfectly.</p>

        <h2>Wondering why you should get involved and do your part?</h2>
        <h3>Here are a few reasons:</h3>

        <ul> 
            <li>
                <h4>It makes you feel good</h4>
                <p>We don’t know about you, but for us we feel good when we are able to make better choices for the planet and thus ourselves. Simply knowing that a purchase we made will minimally impact mama earth is rewarding. It doesn’t even have to be about the purchase itself. It could be that we opted for less packaging, or used a reusable tote to bring it home. The point is, we are trying, and for that, we feel good.</p>
            </li>
            <li>
                <h4>It's better for humans</h4>
                <p>What’s better for mama earth is also better for us. Supporting sustainable companies means that you are supporting fair wages and ethical work conditions for humans around the world. Sustainable companies also opt for more  natural fibers and ingredients which means we are putting less toxins on and in our bodies.</p>
            </li>
            <li>
                <h4>It saves money </h4>
                <p>While you may think that shopping sustainably means spending more money, that is actually not the case. Yes, ethically-made and sustainable products come with a higher price tag. But this is because they are more costly to create. Growing and harvesting organic fibers, ensuring ethical work practices are being upheld, and opting for more eco-friendly transport, are all aspects that sustainable brands must consider and work into their costs. Thus making the end product more expensive. With that being said, the final result is often a better quality product that is designed to last. Think of it as an investment, while the initial cost is higher, you actually end up spending less per use/wear. So in the long run, you actually get what you pay for which is nicer for your wallet and nicer for the planet.</p>
            </li>
            <li>
                <h4>It saves time</h4>
                <p>The overall impression is that being earth-friendly isn’t convenient and requires a lot of research.  Well, it does require some research but Thank u, mama earth was designed for this exact reason. We wanted to make earth-friendly shopping more accessible by doing the research for you. When you find new brands here you know that you are investing in the planet and doing your part to save mama earth.</p>
            </li>
            <li>
                <h4>It’s better for the planet</h4>
                <p>Of course the obvious reason for shopping with the earth in mind is well, for the earth. Mama earth has given us so much for many many years. From her natural resources, to food, to a place to live, and we’ve continuously just taken it without really considering the impact of it all. The truth is, that if we continue to over consume as we have been doing, we will eventually run out. Again, cue the opening scenes of wall-e.  It won’t happen to us currently living but it will to our children, or their children. </p>
            </li>
        </ul>

        <p>By being mindful of our shopping habits, we are able to ensure that there will be a planet for future humans to enjoy. Mama earth is resilient and she has shown us that time and time again. We see forests regrowing after wildfires, coral reefs thriving and restoring ecosystems after being destroyed. While the pandemic has been an incredibly tragic experience for us humans, it has also given mama earth time to heal. It’s not too late to start doing your part, and every little bit counts.</p>
    </section>

    <div class="controls">
        <ul>
            <li>
                <router-link class="click-r" to="/">
                    <font-awesome-icon class="click-r" :icon="['fas', 'arrow-left']" />
                </router-link>
            </li>
             <li>
                <router-link class="click-y" to="/">
                    <font-awesome-icon class="click-y" :icon="['fas', 'home']" />
                </router-link>
            </li>
            <li>
                <router-link class="click-b" to="/">
                    <font-awesome-icon class="click-b" :icon="['fas', 'arrow-right']" />
                </router-link>
            </li>
        </ul>
    </div>
  </div>
</template>


<script>
    import HomepageHeader from "@/components/HomepageHeader.vue";

    export default {
        name: "BlogOne",
        components: {
            HomepageHeader,
        },
    
    }

</script>

<style scoped lang="scss">

    @import '@/styles/config.scss';
    @import '@/styles/general.scss';

    h2 {
        padding: 15px 0;
    }

    p {
        padding: 10px 0;
    }

    li {
        padding: 15px 0;
    }

    .earth-in-mind {
        padding: 60px;
    }

    .controls ul {
        display: flex;
        justify-content: flex-end;

        li {
            padding: 10px;
        }
    }

</style>