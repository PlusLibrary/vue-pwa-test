<template>
    <div id="app">
        <table>
            <tr style="height: 48px; width: 100%;">
                <td>
                    <Navigation @selectChanged="changeImage"/>
                </td>
            </tr>
            <tr ref="remain">
                <td style="text-align: center">
                    <div class="imgBox">
                        <img v-if="imageUrl != null" v-bind:src="imageUrl" :style="{ height: remainHeight - 16 + 'px' }"/>
                    </div>
                </td>
            </tr>
        </table>
        <Heart/>
    </div>
</template>

<script>
import "@/css/common.css";
import Navigation from "@/component/Navigation";
import Heart from "@/component/Heart";

export default {
    name: "App",
    components: {
        Navigation, Heart
    },
    data() {
        return {
            imageUrl: null,
            remainHeight: 0
        }
    },
    created() {
        window.addEventListener("resize", () => {
            this.remainHeight = window.innerHeight - 64
        });
    },
    mounted() {
        this.remainHeight = window.innerHeight - 64
    },
    methods: {
        changeImage(v) {
            this.imageUrl = require("@/resource/" + v + ".png")
        },
    }
}
    
</script>

<style>
    .imgBox {
        flex-grow: 1;
        text-align: center;
    }
    
    #img {
        position: relative;
        overflow: hidden;
    }

    .imgBox {
        width: 100%;
        height: 100%;
        max-width: 100%;
        max-height: 100%;
        position: relative;
        overflow: hidden;
    }

    table {
        table-layout: fixed;
        border-collapse: collapse;
        height: 100%;
        width: 100%;
    }

    td, tr {
        width: 100% !important;
        position: relative;
        overflow: hidden;
    }
</style>
