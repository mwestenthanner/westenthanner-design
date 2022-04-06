<template>
<div id="screen">

    <div class="circle blur light gradient-yellow bounce-horizontal"></div>
    <div class="circle blur dark gradient-blue"></div>
    <div class="circle blur mid gradient-red bounce-vertical"></div>

    <div class="codetext">
      <p class="line line-1">function adipscing(...elit) {</p>
      <p class="line line-2">if (!elit.sit) {</p>
      <p class="line line-3">return [];</p>
      <p class="line line-4">}<br><br></p>
      <p class="line line-5">const sed = elit[0];</p>
      <p class="line line-6">return eiusmod.tempor(sed) ? lorem : [sed];</p>
      <p class="line line-7">}</p>
    </div>

    <div class="square">
      <svg viewBox="0 0 400 400">
        <g class="bounce-small item-to">
          <path class="draw" d="M389.87,200l-189.87,-189.87l-189.87,189.87l189.87,189.87l189.87,-189.87Z"/>
        </g>
      </svg>
    </div>

    <div class="arrow">
      <router-link to="#about">
      <svg viewBox="0 0 50 400">
        <g class="bounce-small item-to">
          <path class="draw" d="M25.069,16.047l-0,367.906l-8.773,-20.819l17.408,0l-8.635,20.819" />
        </g>
      </svg>
      </router-link>
    </div>

    <div class="circle gradient-fill"></div>
    <div class="circle dashed">
      <svg viewBox="0 0 400 400">
        <circle cx="200" cy="200" r="197.938"/>
      </svg>
    </div>

    <div class="claim">
        <h2>design und code -<br> aus der region.</h2>
    </div>

    <div class="grid">
      <svg viewBox="0 0 400 300">
        <path d="M67.308,64.904l-0,180" />
        <path d="M134.231,36.635l-0,233.653" />
        <path d="M25.58,218.077l320.598,-0" />
        <path d="M201.154,22.5l-0,233.654" />
        <path d="M17.791,151.154l355.502,-0" />
        <path d="M268.077,43.846l-0,219.808" />
        <path d="M35.965,84.231l318.001,-0" />
      <path d="M335,32.019l-0,212.885"/>
      </svg>
    </div>

</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({

});
</script>

<style scoped>

.codetext {
  font-family: 'Roboto Mono', monospace;
  position: absolute;
  font-size: 80%;
  top: 20vh;
  right: 15vw;
  opacity: 0.3;
}

.arrow {
  position: absolute;
  height: 40vh;
  bottom: -5vh;
  right: 5vh;
  overflow: visible;
}

.square {
  position: absolute;
  height: 15rem;
  top: 30vh;
  right: 30vw;
}

.grid {
  position: absolute;
  height: 20rem;
  top: 55vh;
  right: 25vw;
  opacity: 0.2;
  animation: blink 15s ease infinite;
}

.square svg, .arrow svg, .grid svg {
  fill: none;
  stroke: black;
  width: 80%;
  height: 80%;
  stroke-width: 2px;
}

.arrow svg {
  stroke-width: 1px;
}

.gradient-yellow {
    width: 30vw;
    top: -10vw;
    right: 30vw;  
}


.gradient-red {
    width: 40vw;
    top: 5vw;
    right: 10vw;  
    animation: change-color 10s ease infinite;
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
    animation: rotate 40s linear infinite;
}

.dashed svg {
  width: 100%;
  height: 100%;
  stroke: black;
  fill: none;
  stroke-dasharray: 20;
}

.gradient-fill {
    width: 20rem;
    height: 20rem;
    right: 5rem;
    top: 50%;
    background-image: radial-gradient(circle at center 0%, var(--accent-light) 0px,  transparent 70%);
    animation: rotate 25s linear infinite reverse;
}

.claim {
    position: absolute;
    right: 28%;
    top: 55%;
    font-weight: 600;
    font-size: 200%;
}

.item-to {
  animation-duration: 10s;
  animation-iteration-count: infinite;
  transform-origin: bottom;
}

.draw {
  stroke-dasharray: 1200;
  stroke-dashoffset: 10;
  animation: draw 15s ease-in-out alternate infinite;
}

.bounce-vertical {
    animation-name: bounce-vertical;
    animation-timing-function: ease;
}

.bounce-small {
    animation-name: bounce-small;
    animation-timing-function: ease;
}

.bounce-horizontal {
    animation-name: bounce-horizontal;
    animation-timing-function: ease;
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@keyframes blink {
  0%, 100% {
    opacity: 0.2;
  }
  50% {
    opacity: 0.05;
  }
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

@keyframes bounce-small {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(5vh);
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

@keyframes draw {
  from {
    stroke-dashoffset: 1200;
  }
  to {
    stroke-dashoffset: 0;
  }
}

@keyframes type {
  from {
    width: 0;
  }
  to {
    width: 45rem;
  }
}

</style>