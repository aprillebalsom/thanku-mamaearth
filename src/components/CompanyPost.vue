<template>
    <div class="company-post">

        <div class="company-post-img">
            <img :src="require('@/assets/' + imgSrcOne + '')" />
        </div>

        <div class="company-post-text">
            <h3>{{ name }}</h3>
    
            <ul class="company-flex">
                <li class="pillar"> 
                    <transition name="slide-fade">
                        <div class="info-bubble" v-if="hovered1" >
                            <p>{{ pillarAltOne }}</p>
                        </div>
                    </transition>

                    <div class="pillar-icon" @mouseover="hovered1 = true" @mouseleave="hovered1 = false"> 
                       <img :src="require('@/assets/' + pillarSrcOne + '')" :alt="`${pillarAltOne}`"/>
                    </div>
                </li> 
                <li class="pillar"> 
                    <div class="info-bubble" v-if="hovered2" >
                        <p>{{ pillarAltTwo }}</p>
                    </div>

                    <div class="pillar-icon" @mouseover="hovered2 = true" @mouseleave="hovered2 = false"> 
                        <img :src="require('@/assets/' + pillarSrcTwo + '')" :alt="`${pillarAltOne}`"/>
                    </div>
                </li> 
                <li class="pillar"> 
                    <div class="info-bubble" v-if="hovered3" >
                        <p>{{ pillarAltThree }}</p>
                    </div>

                    <div class="pillar-icon" @mouseover="hovered3 = true" @mouseleave="hovered3 = false"> 
                        <img :src="require('@/assets/' + pillarSrcThree + '')" :alt="`${pillarAltOne}`"/>
                    </div>
                </li> 
            </ul> 

            <p>{{ info }}</p>
            <a class="square-btn click-y" target="_blank" rel="noopener" :href="`${link}`">shop</a>
        </div>

    </div>
</template>

<script>
    export default {
        name: "CompanyPost",
        props: {
            imgSrcOne: String,
            imgAltOne: String,
            name: String,
            info: String,
            pillarSrcOne: String,
            pillarAltOne: String,
            pillarSrcTwo: String,
            pillarAltTwo: String,
            pillarSrcThree: String,
            pillarAltThree: String,
            link: String,
        },
        data() {
            return {
                hovered1: false,
                hovered2: false,
                hovered3: false,
            } 
        },
     };
    
</script>


<style lang="scss">
    @import '@/styles/config.scss';
    @import '@/styles/general.scss';

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
            padding-bottom: 10px;
        }
    }

    .slide-fade-enter-active {
        transition: all .3s ease;
    }
    
</style>