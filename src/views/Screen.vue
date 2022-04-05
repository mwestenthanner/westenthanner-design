<template>
<div id="screen">
    <div class="circle blur light gradient-yellow"></div>
    <div class="circle blur dark gradient-blue"></div>
    <div class="circle blur mid gradient-red"></div>
    <div class="circle gradient-fill"></div>
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

.gradient-yellow {
    width: 30vw;
    top: -10vw;
    right: 30vw;  
    animation: bounce-horizontal 8s ease infinite;
}


.gradient-red {
    width: 40vw;
    top: 5vw;
    right: 10vw;  
    animation: 
      bounce-vertical 10s ease infinite,
      change-color 10s ease infinite;
}


.gradient-blue {
    width: 50vw;
    top: -20vw;
    right: -15vw;  
}

.circle {
    position: absolute;
}

.dashed {
    width: 20rem;
    height: 20rem;
    right: 9rem;
    top: 40%;
    border: black 1px dashed;
    animation: rotation 40s linear infinite;
}

.gradient-fill {
    width: 20rem;
    height: 20rem;
    right: 5rem;
    top: 50%;
    background-image: radial-gradient(circle at center 0%, var(--accent-light) 0px,  transparent 70%);
    animation: rotation 25s linear infinite reverse;
}

.claim {
    position: absolute;
    right: 20%;
    top: 55%;
    font-weight: 600;
    font-size: 200%;
    overflow: hidden; /* Ensures the content is not revealed until the animation */
    border-right: .15em solid transparent; /* The typwriter cursor */
    white-space: nowrap; /* Keeps the content on a single line */
    margin: 0 auto; /* Gives that scrolling effect as the typing happens */

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

@keyframes bounce-vertical {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(20vh);
  }
  100% {
    transform: translateY(0);
  }
}

@keyframes bounce-horizontal {
  0% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(-10vw);
  }
  100% {
    transform: translateX(0);
  }
}

@keyframes change-color {
  0%, 100% {
    background-color: var(--accent-mid);
  }
  50% {
    background-color: rgb(255, 88, 88);
  }
}


</style>