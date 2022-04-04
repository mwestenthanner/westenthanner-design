<template>
<div id="main">
  <Title></Title>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Title from '../components/Title.vue'

export default defineComponent({
  name: 'App',
  components: {
    Title
  }
});
</script>

<style>

</style>
