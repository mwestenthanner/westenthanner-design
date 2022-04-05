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
  overflow-x: hidden;
}

#screen {
  height: 100vh;
  position: relative;
}


footer {
  background-color: blue;
  height: 40vh; 
}

</style>
