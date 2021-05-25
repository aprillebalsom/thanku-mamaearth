<template>
    <div class="alert-bar">
        <p>zero waste | sustainable | ethical | eco-friendly | closed loop</p>
    </div>
</template>

<script>
    export default {
        name: "AlertBar",
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
    }

    @media (max-width: 768px) {
        .alert-bar {
            padding: 10px 30px;
        }
    }
</style>
