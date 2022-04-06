<template>
<div id="about">

    <div class="profile">

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

        <div class="circle light"></div>

        <img src="../../public/img/profile.png" alt="Marianne Westenthanner">

    </div>

    <div class="content">
    <h2>
        <svg class="text-line">
            <text fill="none" x="160" y="90">hi, ich bin Marianne</text>
        </svg>
    </h2>
    <p>Ich bin Webentwicklerin, ausgebildete Journalistin und Designerin. Ob Du eine neue Website brauchst, Grafiken oder gar eine App – wende Dich einfach an mich.</p>
    <div class="cta">
        <a class="button-link" href="mailto:info@westenthanner-design.com">Contact me</a>
    </div>
    </div>

</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({

});
</script>

<style scoped>

#about {
    margin: 6rem;
    display: grid;
    grid-template-columns: 30% 1fr;
}

.profile {
    max-height: 40vh;
}

.profile img {
    max-width: 70%;
    position: relative;
    top: -35rem;
    left: 15%;
}

.profile .circle {
    width: 40%;
    position: relative;
    left: 60%;
    top: -10rem;
}
.grid {
    height: 20rem;
    width: 20rem;
    opacity: 0.2;
    stroke: black;
    position: relative;
}

.text-line {
    width: 100%;
}

.text-line text {
    font-size: 48pt;
    stroke: black;
    stroke-dasharray: 600;
    stroke-dashoffset: 600;
    animation: dash 5s ease-in-out alternate infinite;
}

.content p {
    max-width: 70%;
    margin-left: 15%;
    text-align: center;
    font-size: 120%;
    line-height: 1.5em;
}

.cta {
    margin-top: 3rem;
    text-align: center;
}

@keyframes dash {
  to {
    stroke-dashoffset: 0;
  }
}

</style>