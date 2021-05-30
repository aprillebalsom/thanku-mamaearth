<template>
    <div class="alert-bar">
        <marquee-text :duration="120" :reverse="true">
           <span class="spacer"></span> zero waste | sustainable | ethical | eco-friendly | renewable | circular | regenerative | reusable | green | recyclable | plastic free | carbon neutral | vegan | organic | transparent | closed-loop | small-batch | slow fashion | compostable | natural | cruelty-free | handmade | 
        </marquee-text>
    </div>
</template>

<script>

    import MarqueeText from 'vue-marquee-text-component'
 
    export default {
        name: "AlertBar",
        components: {
            MarqueeText
        },
        props: { 
            reverse: true,
        }
    };
</script>


<style lang="scss">
    // TODO do i need to import these here?
    @import '@/styles/config.scss';
    @import '@/styles/general.scss';

    .alert-bar {
        background-color: $green;

        text-align: center;
        font-size: 1.4rem;

        padding: 10px;

        display: flex;
        justify-content: center;
    }

    .marquee-text-wrap {
        width: 85%;
    }

    .spacer {
        display: inline-block; 
        width: .1em;
    }

    @media (max-width: 768px) {
        .alert-bar {
            padding: 10px 30px;
        }
    }
</style>
