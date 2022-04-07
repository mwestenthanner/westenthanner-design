<template>
    <nav :class="{expanded: isExpanded}">
        <button :class="{expanded: isExpanded}" type="button" @click="expand()">☰</button>
        <ul v-if="isExpanded">
            <li><router-link to="/#about">Über mich</router-link></li>
            <li><router-link to="/#projects">Projekte</router-link></li>
            <li><router-link to="/#skills">Leistungen</router-link></li>
            <div class="cta">
                <a class="button-link" href="mailto:info@westenthanner-design.com">Contact me</a>
            </div>
        </ul>
    </nav>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';


export default defineComponent({
  setup() {

    const isExpanded = ref(false);

    function expand() {
        isExpanded.value = !isExpanded.value;
    }

    return {
      isExpanded,
      expand
    }
  }
});
</script>

<style scoped>

nav {
    position: relative;
    width: 30%;
    height: 100vh;
    display: flex;
    flex-direction: row-reverse;
    align-items: flex-start;
    justify-content: space-between;
    padding: 3rem;
    right: 0;
}

.expanded {
    background-color: var(--accent-dark);
    color: white;
    position: fixed;
}

button {
    border: none;
    background-color: transparent;
    font-size: 150%;
}

ul {
    width: 100%;
    margin-top: 5rem;
}

ul li {
    list-style-type: none;
    text-align: right;
    margin-bottom: 1rem;
    font-size: 130%;
}

ul li a {
    color: white;
}

ul li::after {
    margin-left: 0.5rem;
    content: '*/';
    opacity: 0.4;
}

.cta {
    margin-top: 3rem;
    text-align: center;
}

</style>