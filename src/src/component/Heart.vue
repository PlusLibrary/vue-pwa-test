<template>
    <div class="heart">
        ♥
    </div>
    
</template>

<script>
    export default {
        name: "Heart",
        methods: {

        }
    }
</script>

<style scoped>
    .heart {
        line-height: 68px;
        font-size: 32px;
        color: #FFF;
        text-align: center;
        width: 64px;
        height: 64px;
        border-radius: 32px;
        position: fixed;
        right: 0px;
        bottom: 0px;
        margin: 16px;
        background-color: #F77;
        transition-duration: 200ms;
    }
    
    .heart:hover {
        background-color: #F55;
        cursor: pointer;
    }
</style>
