<template>
    <div class="navigation">
        <div class="item" @click="pick(0)">
            <div>
                ピンクセーター
            </div>
        </div>
        <div class="item" @click="pick(1)">
            <div>
                オーバーオール
            </div>
        </div>
        <div class="item" @click="pick(2)">
            <div>
                緑スカート
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Navigation",
        methods: {
            pick(v) {
                this.$emit("selectChanged", v);
            }
        }
    }
</script>

<style scoped>
    .navigation {
        width: 100%;
        height: 64px;
        background-color: #EEE;
        display: table;
    }

    .navigation .item {
        width: 33% !important;
        height: 100%;
        display: table-cell;
        vertical-align: middle;
        text-align: center;
        background-position: center;
        transition: 500ms;
        font-size: calc(7px + 1.75vmin);
        overflow: hidden;
        white-space: nowrap;
    }

    .navigation .item div {
        line-height: 36px;
    }

    .navigation .item:not(:last-child) div {
        border-right: solid 1px #DDD;
    }

    .navigation .item:active {
        background-color: #DDD;
        transition: 0s;
    }
</style>
