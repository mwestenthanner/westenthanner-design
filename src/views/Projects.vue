<template>
<div id="projects">
    <div class="title">
        <h2>Projekte</h2>
        <h3>das mache ich so</h3>
        <svg viewBox="0 0 200 50">
            <path d="M20.216,26.142l159,0l-15.566,6.56l-0,-13.016l15.566,6.456" />
        </svg>
    </div>
    <div class="project-grid">
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
    </div>
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
    margin: 6rem;
}

.title {
    margin-bottom: 3rem;
    display: flex;
    align-items: center;
}

.title svg {
    fill: none;
    stroke: black;
    stroke-linecap: square;
    width: 15rem;
}

.title h2::after {
    padding: 2rem;
    content: '//'
}

.project-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20rem,1fr));
    grid-gap: 1rem;
}

@keyframes text-clip {
  from {
    clip-path: polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%);
  }
  to {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
  }
}

</style>