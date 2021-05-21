<template>
    <div class="company-post">

        <div class="company-post-img">
            <img :src="require('@/assets/' + imgSrcOne + '')" />
        </div>

        <div class="company-post-text">
            <h3>{{ name }}</h3>

            <ul class="company-flex">
                <li> 
                    <img :src="require('@/assets/' + pillarSrcOne + '')" :alt="`${pillarAltOne}`"/>
                </li> 
                <li> 
                    <img :src="require('@/assets/' + pillarSrcTwo + '')" :alt="`${pillarAltOne}`"/>
                </li> 
                <li> 
                    <img :src="require('@/assets/' + pillarSrcThree + '')" :alt="`${pillarAltOne}`"/>
                </li> 
            </ul> 

            <p> {{ info }}</p>
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
            pillarSrcThree: String,
            link: String,
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
        }
    }

</style>