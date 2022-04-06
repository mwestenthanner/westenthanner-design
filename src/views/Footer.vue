<template>
<footer>
    <div class="column column-1">
        <Title class="footer"></Title>
    </div>
    <div class="column column-2">
        <p>Westenthanner Design</p><br>
        <p>Marianne Westenthanner</p>
        <p>Wendelsteinstr. 13</p>
        <p>84419 Schwindegg</p>
        <div class="cta">
            <a class="button-link" href="mailto:info@westenthanner-design.com">Schreib mir</a>
        </div>
    </div>
    <div class="column column-3">
        <div class="block">
            <p><router-link to="/impressum">Impressum</router-link></p>
            <p><router-link to="/datenschutz">Datenschutzerklärung</router-link></p>
        </div>
        <p>© 2022 Westenthanner Design</p>
    </div>
</footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Title from '../components/Title.vue'

export default defineComponent({
    components: {
        Title
  }
});
</script>

<style scoped>

footer {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    font-family: 'Roboto Mono', monospace;
    color: white;
    line-height: 1.5em;
    padding: 6rem;
}

.column:not(:last-child) {
    margin-right: 6rem;
}

.cta {
    margin-top: 3rem;
}

.column-3 {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

</style>