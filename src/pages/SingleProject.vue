<template>
<main>

  <div class="image" :class="color">
    <img :src="`${publicPath}img/projects/${project.img}`" :alt="project.name">
  </div>
  <div class="content">
    <div class="tags">
      <span class="tag" v-for="item in project.stack" :key="item">{{ item }}</span>
    </div>
    <h2>{{ project.name }}</h2>
    <p>{{ project.description }}</p>
    <div class="cta" v-if="project.url != ''">
      <a target="_blank" class="button-link" :href="project.url">Zum Produkt</a>
    </div>
  </div>

</main>
<Footer></Footer>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import Footer from '../views/Footer.vue'
import { getProjects } from '../store/index'
import { useRoute } from 'vue-router';

export default defineComponent({
  name: 'App',
  components: {
    Footer
  },
  props: {
    projectName: String
  },
  setup() {

        const route = useRoute()
        const project = getProjects.value.find(item => item.name == route.params.projectName) ?? getProjects.value[0];
        let color = ref('');

        function randomColor() {

            const delimiter = Math.floor(Math.random() * 2);

            if (delimiter == 0) {
                color.value = 'light';
            } else {
                color.value = 'mid';
            }

        }

        onMounted(() => {
            randomColor();
        })

        return {
            project,
            color,
            publicPath: process.env.BASE_URL
        }

  }
});
</script>

<style scoped>

main {
  top: 0;
  overflow-x: hidden;
  display: grid;
  grid-template-columns: 40% 1fr;
  padding-top: 12rem;
}

.image {
  display: flex;
  align-items: center;
  justify-content: center;
}

.image img {
  max-width: 90%;
  max-height: 90%;
}

.content {
  padding: 8rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.content h2 {
  font-size: 300%;
  margin-bottom: 2rem;
}

.content p {
  line-height: 1.5em;
  font-size: 110%;
}

.tags {
  margin-bottom: 2rem;
}

.tag {
  color: white;
  background-color: black;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  font-size: 70%;
  white-space: nowrap;
}

.tag:not(:last-child) {
  margin-right: 0.75rem;
}

.tag:before {
  content: '#';
  margin-right: 0.5rem;
}

.cta {
  margin-top: 5rem;
  text-align: center;
}

footer {
  background-color: var(--accent-dark);
}

</style>
