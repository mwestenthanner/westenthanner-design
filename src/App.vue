<template>
  <Header></Header>
  <ScrollButton></ScrollButton>
  <router-view/>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Header from './views/Header.vue'
import ScrollButton from './components/ScrollButton.vue'

export default defineComponent({
  name: 'App',
  components: {
    Header,
    ScrollButton
  }
});
</script>

<style>
#app {
  font-family: "Trap", Arial, sans-serif;
}
</style>
