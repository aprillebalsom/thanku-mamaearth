<template>
    <div class="legend">
        <div class="legend-img">
            <img src="" alt="">
        </div>

        <div class="legend-text">
            <h1>{{ pillar }}</h1>
            <p>{{ info }}</p>
        </div>

    </div>
</template>

<script>
    export default {
        name: "Legend",
    };
</script>


<style lang="scss">
    // TODO do i need to import these here?
    @import '@/styles/config.scss';
    @import '@/styles/general.scss';

    .legend {
        display: flex;
    }



  
</style>
