<template>
<div class="mini-card">
    <img src="https://upload.wikimedia.org/wikipedia/commons/9/9e/Affinity_designer_icon_2019.png" alt="Icon">
    <p>Item</p>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({

});
</script>

<style scoped>

.mini-card {
    aspect-ratio: 1 / 1;
    max-width: 5rem;
    height: auto;
    padding: 1rem;
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
}

.mini-card img {
    max-width: 60%;
}

</style>