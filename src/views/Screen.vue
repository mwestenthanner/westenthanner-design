<template>
<div id="screen">

    <div class="circle gradient"></div>
    <div class="circle dashed"></div>
    <div class="claim">
        <h2>design und code -<br> aus der region.</h2>
    </div>

</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({

});
</script>

<style scoped>

#screen {
background-image:
    radial-gradient(circle at 100% 0%, var(--accent-dark) 0px, var(--accent-dark) 200px, transparent 40%),
    radial-gradient(circle at 65% 40%, var(--accent-mid) 0px, transparent 40%),
    radial-gradient(circle at center 0%, var(--accent-light) 0px, var(--accent-light) 10%, transparent 40%);
}

.circle {
    width: 20rem;
    height: 20rem;
    border-radius: 50%;
    position: absolute;
}

.dashed {
    right: 9rem;
    top: 40%;
    border: var(--accent-dark) 2px dashed;
    animation: rotation 40s linear infinite;
}

.gradient {
    right: 5rem;
    top: 50%;
    background-image: radial-gradient(circle at center 0%, var(--accent-light) 0px, var(--accent-light) 30%, transparent 70%);
    animation: rotation 25s linear infinite reverse;
}

.claim {
    position: absolute;
    right: 20%;
    top: 60%;
    font-family: 'Roboto Mono';
    font-size: 150%;
    overflow: hidden; /* Ensures the content is not revealed until the animation */
    border-right: .15em solid transparent; /* The typwriter cursor */
    white-space: nowrap; /* Keeps the content on a single line */
    margin: 0 auto; /* Gives that scrolling effect as the typing happens */
    letter-spacing: .15em; /* Adjust as needed */
}

@keyframes rotation {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@keyframes typing {
  from { width: 0 }
  to { width: 100% }
}

@keyframes blinking {
  from, to { border-color: transparent }
  50% { border-color: orange; }
}


</style>