<template>
<main>
  <Screen></Screen>
  <About></About>
  <Projects></Projects>
  <Skills></Skills>
  <Footer></Footer>
</main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Screen from './views/Screen.vue'
import About from './views/About.vue'
import Projects from './views/Projects.vue'
import Skills from './views/Skills.vue'
import Footer from './views/Footer.vue'

export default defineComponent({
  name: 'App',
  components: {
    Screen,
    About,
    Projects,
    Skills,
    Footer
  }
});
</script>

<style>

main {
  top: 0;
}

#screen {
  height: 100vh;
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
