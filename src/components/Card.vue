<template>
<div class="card">

    <img src="https://cdn.pixabay.com/photo/2017/10/15/16/20/iphone-2854305_960_720.png" alt="Card image">
    <h3>Card heading</h3>

</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({

});
</script>

<style scoped>

.card {
    aspect-ratio: 1 / 1;
    max-width: 20rem;
    padding: 1rem;
}

.card img {
    max-height: 20rem;
}

</style>