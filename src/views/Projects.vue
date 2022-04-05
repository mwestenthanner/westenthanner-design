<template>
<div id="projects">
    <h2>Projekte</h2>
    <Card></Card>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Card from '../components/Card.vue'

export default defineComponent({
    components: {
        Card
    }
});
</script>

<style scoped>

#projects {
    margin: 3rem;
}

h2 {
    margin-bottom: 3rem;
}

</style>