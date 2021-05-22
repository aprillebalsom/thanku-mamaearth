<template>
    <div class="blog-post">
        <img :src="require('@/assets/' + imgSrcOne + '')" />
        <h3>{{ name }}</h3>
    </div>
</template>

<script>
    export default {
        name: "HomepageBlog",
        props: {
            imgSrcOne: String,
            imgAltOne: String,
            name: String,
        },
    };
</script>


<style scoped lang="scss">
    @import '@/styles/config.scss';
    @import '@/styles/general.scss';

</style>