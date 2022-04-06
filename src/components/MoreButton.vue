<template>
<div class="more-button">
    <a href="#">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
            <path d="M15.31,6.85a1,1,0,0,0,1,1h6.51L6.17,24.5a1,1,0,0,0,1.41,1.41L24.21,9.28v6.46a1,1,0,1,0,2,0v-9a.9.9,0,0,0-.9-.9h-9A1,1,0,0,0,15.31,6.85Z"/>
        </svg>
    </a>
</div>
</template>

<script lang="ts">
import { defineComponent} from 'vue';

export default defineComponent({

});
</script>

<style scoped>

.more-button {
    display: flex;
    flex-direction: row-reverse;
}

a {
    background-color: var(--accent-dark);
    border: none;
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    cursor: pointer;
}

svg {
    stroke: white;
    stroke-linecap: round;
    stroke-width: 2px;
    width: 1rem;
    height: 1rem;
    padding: 1rem;
    transform: rotate(0deg);
    transition: 0.3s ease;
}

.more-button:hover svg {
    transform: rotate(-20deg);
    transition: 0.3s ease;
}

</style>