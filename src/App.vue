<template>
  <Main></Main>
  <Projects></Projects>
  <Skills></Skills>
  <Footer></Footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Main from './views/Main.vue'
import Projects from './views/Projects.vue'
import Skills from './views/Skills.vue'
import Footer from './views/Footer.vue'

export default defineComponent({
  name: 'App',
  components: {
    Main,
    Projects,
    Skills,
    Footer
  }
});
</script>

<style>

#app {
  font-family: "Lexend Deca", Arial, sans-serif;
}

#main {
  height: 100vh;
  margin: 3rem;
}

#projects {
  background-color: aquamarine;
  height: 60vh;
}

#skills {
  background-color: antiquewhite;
  height: 40vh;
}

footer {
  background-color: blue;
  height: 40vh; 
}

</style>
