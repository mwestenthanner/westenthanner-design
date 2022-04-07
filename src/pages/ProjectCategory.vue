<template>
<main>
    <div class="content">

        <h2>
            <svg class="text-line">
                <text fill="none" x="0" y="90">{{ category.name }}</text>
            </svg>
        </h2>
        <p v-for="paragraph in category.description" :key="paragraph">{{ paragraph }}</p>
        <div class="cta">
            <a target="_blank" class="button-link" href="mailto:info@westenthanner-design.com">Fragen? Schreib mir</a>
        </div>
        
    </div>
    <div class="projects">

        <h3>Projekte // </h3><span class="heading">{{ category.name }}</span>
        <div class="project-grid">
            <Card v-for="project in projects" :key="project.name" :project="project"></Card>
        </div>

    </div>
</main>
<Footer></Footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Card from '../components/Card.vue'
import Footer from '../views/Footer.vue'
import { getProjects, getCategories } from '../store/index'
import { useRoute } from 'vue-router';

export default defineComponent({
    components: {
        Card,
        Footer
    },
    setup() {

        const route = useRoute()

        const category = getCategories.value.find(cat => cat.name == route.params.categoryName) ?? getCategories.value[0];
        const projects = getProjects.value.filter(project => project.categories.includes(category.name));

        return {
            projects,
            category
        }
    }
});
</script>

<style scoped>

main {
  top: 0;
  display: grid;
  grid-template-columns: 40% 1fr;
  padding-top: 12rem;
  margin-bottom: 6rem;
  min-height: 75vh;
}

.text-line {
    width: 100%;
}

.text-line text {
    font-size: 48pt;
    stroke: black;
    stroke-dasharray: 600;
    stroke-dashoffset: 600;
    animation: dash 5s ease-in-out alternate infinite;
}

.content {
    margin: 0 6rem;
}

.content p {
    margin-bottom: 1rem;
}

h3 {
    font-family: 'Roboto Mono', monospace;
    margin: 3rem 0;
    display: inline-block;
}

.heading {
    font-family: 'Roboto Mono', monospace;
    margin-left: 1rem;
}

p {
    line-height: 1.5em;
}

.cta {
  margin-top: 5rem;
  text-align: center;
}

.project-grid {
    display: flex;
    gap: 1.5rem;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-content: space-around;
    flex-direction: row;
}

footer {
  background-color: var(--accent-dark);
}

@keyframes dash {
  to {
    stroke-dashoffset: 0;
  }
}

</style>
