<template>
<router-link to="/">
<div class="site-logo">
    <svg class="title-img" viewBox="0 0 600 600">
        <g>
            <path d="M41.789,347.084l0,-306.104l247.43,0" />
            <path d="M555.376,250.073l0,306.104l-247.429,-0" />
        </g>
    </svg>
    <h1>westenthanner<span class="code-style">design</span></h1>
</div>
</router-link>
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
    padding: 3rem;
}

h1 {
    line-height: 0.8;
}

.code-style::before {
    content: '';
}

.code-style::after {
    content: '*';
}
.code-style {
    display: block;
    font-family: 'Roboto Mono', monospace;
    font-style: italic;
    font-weight: 300;
}

.title-img {
    height: 4rem;
    stroke-width: 4rem; 
    width: auto;
    stroke: black;
    fill: none;
}

.footer .title-img {
    stroke: white;
}

</style>