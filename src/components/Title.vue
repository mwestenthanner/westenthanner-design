<template>
<div class="site-logo">
    <img src="../../public/logo.svg" alt="Westenthanner Design Logo" class="title-img" >
    <h1>westenthanner<span class="code-style">design</span></h1>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({

});
</script>

<style scoped>

.site-logo {
    display: flex;
    gap: 1rem;
    align-items: center;
}

h1 {
    line-height: 0.8;
}

.code-style::before {
    content: '<';
}

.code-style::after {
    content: '>';
}
.code-style {
    display: block;
    font-family: 'Roboto Mono', monospace;
    font-weight: 300;
}

.title-img {
    max-height: 4rem;
    width: auto;
}

</style>