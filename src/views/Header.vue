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
  position: absolute;
  z-index: 1;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 3rem;
  box-sizing: border-box;
  background-color: transparent;
}

</style>
