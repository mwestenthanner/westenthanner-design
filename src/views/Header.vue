<template>
<header>
  <Title></Title>
  <Menu></Menu>
</header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Title from '../components/Title.vue'
import Menu from '../components/Menu.vue'

export default defineComponent({
  name: 'App',
  components: {
    Title,
    Menu
  }
});
</script>

<style>

header {
  display: flex;
  justify-content: space-between;
  margin: 3rem;
}

</style>
