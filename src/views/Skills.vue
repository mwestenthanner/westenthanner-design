<template>
<div id="skills">

    <div class="content">
        <ol>
            <li>
                <div class="list-item">
                    <h3>Web Design</h3>
                    <p>Ich designe Deinen Webauftritt, konzipiere nutzerfreundliche Designs und versehe sie mit der notwendigen Funktion. Als ausgebildete Softwarejournalistin bin ich zudem Expertin, was Nutzer und deren Anforderungen betrifft.</p>
                    <MoreButton></MoreButton>
                </div>
            </li>
            <li>
                <div class="list-item">
                    <h3>Web- und App-Entwicklung</h3>
                    <p>Ob einfache Website, Online-Shop oder funktionale Web-App: Als Webentwicklerin arbeite ich an verschiedensten Projekten und begleite alle Schritte vom Konzept bis hin zum Startschuss.</p>
                    <MoreButton></MoreButton>
                </div>
            </li>
            <li>
                <div class="list-item">
                    <h3>Grafikdesign</h3>
                    <p>Nicht nur im digitalen Bereich greife ich Dir mit meinen Designkenntnissen unter die Arme, sondern konzipiere auch Werbematerial, Flyer oder Social-Media-Grafiken.</p>
                    <MoreButton></MoreButton>
                </div>
            </li>
        </ol>
    </div>

    <div class="title">
        <h3>das kann ich so</h3>
        <h2>Meine Themengebiete</h2>
        <svg viewBox="0 0 200 50" >
            <path d="M179.216,26.142l-159,0l15.566,6.56l0,-13.016l-15.566,6.456" />
        </svg>
    </div>

</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MoreButton from '../components/MoreButton.vue'

export default defineComponent({
    components: {
        MoreButton
    }
});
</script>

<style scoped>

#skills {
    margin: 8rem 6rem 6rem 6rem;
    display: grid;
    grid-template-columns: 1fr 60%;
}

.title {
    margin-bottom: 3rem;
    display: flex;
    flex-direction: row-reverse;
    max-height: 4rem;
    align-items: center;
}

.title svg {
    fill: none;
    stroke: black;
    stroke-linecap: square;
    width: 15rem;
}

.title h2::after {
    padding: 2rem;
    content: '//'
}

ol {
 list-style-type: none;
 counter-reset: elementcounter;
 padding-left: 0;
}

li:before {
 content: counter(elementcounter) "/ ";
 counter-increment: elementcounter;
 font-weight: bold;
}

li {
    border-top: 1px black solid;
    margin-bottom: 2rem;
    padding: 2rem;
    display: grid;
    grid-template-columns: 1fr 90%;
    grid-gap: 2rem;
}

.list-item {
    display: flex;
    flex-direction: column;
    gap: 2rem;
}

.list-item h3 {
    font-size: 200%;
}


</style>