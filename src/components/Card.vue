<template>
<div class="card" :class="color">

    <img src="https://cdn.pixabay.com/photo/2017/10/15/16/20/iphone-2854305_960_720.png" alt="Card image">
    
    <div class="overlay">
        <h3>Project XY</h3>
    </div>

</div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';

export default defineComponent({

    setup() {

        let color = ref('');

        function randomColor() {

            const delimiter = Math.floor(Math.random() * 3);

            if (delimiter == 0) {
                color.value = 'mid';
            } else if (delimiter == 1) {
                color.value = 'dark';
            } else color.value = 'light';

        }

        onMounted(() => {
            randomColor();
        })

        return {
            color
        }
    }

});
</script>

<style scoped>

.card {
    aspect-ratio: 1 / 1;
    max-width: 20rem;
    height: auto;
    padding: 1rem;
}

.card img {
    max-height: 80%;
    max-width: 80%;
    margin-left: 10%;
    margin-top: 10%;
}

.overlay {
    display: none;
}

</style>