<template>
<Transition>
<button @click="scrollToTop" v-if="visible">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" height="24" viewBox="0 0 24 24" width="24">
    <path d="M19.0173 15L12.0173 7.99999L5.01732 15" />
    </svg>
</button>
</Transition>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';

export default defineComponent({

    setup() {

        let visible = ref(false);

        function scrollToTop()  {
            window.scroll({
                top: 0, 
                left: 0, 
                behavior: 'smooth'
            });
        }

        function setVisible() {
            if (window.pageYOffset > 500) {
                visible.value = true;
            } else visible.value = false;
        }

        onMounted(() => {
            console.log('mounted')
            window.addEventListener("scroll", setVisible, true)
        })

        return {
            scrollToTop,
            visible
        }
    }

});
</script>

<style scoped>

button {
    background-color: var(--accent-dark);
    border: none;
    height: 4rem;
    width: 4rem;
    border-radius: 4rem;
    position: fixed;
    bottom: 4rem;
    right: 4rem;
    cursor: pointer;
}

svg {
    stroke: white;
    stroke-linecap: round;
    stroke-width: 2px;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.3s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

</style>