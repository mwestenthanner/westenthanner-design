<template>
<main>
  <Footer></Footer>
</main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Footer from '../views/Footer.vue'

export default defineComponent({
  name: 'App',
  components: {
    Footer
  }
});
</script>

<style>

main {
  top: 0;
  overflow-x: hidden;
}


footer {
  background-color: var(--accent-dark);
}

</style>
