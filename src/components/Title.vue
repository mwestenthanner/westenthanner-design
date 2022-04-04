<template>
<header>
    <img src="../../public/logo.svg" alt="Westenthanner Design Logo" class="title-img" >
    <h1>westenthanner<span class="code-style">design</span></h1>
</header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({

});
</script>

<style scoped>

header {
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

}

.title-img {
    max-height: 4rem;
    width: auto;
}

</style>