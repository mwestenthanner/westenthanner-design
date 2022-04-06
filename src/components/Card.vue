<template>
<div class="card" v-on:mouseover="hoverIn()" v-on:mouseleave="hoverOut()">

    <Transition>
    <div class="overlay" :class="secondaryColor" v-if="hover">
        <h3>{{ project.name }}</h3>
        <p><router-link to="">Mehr lesen</router-link></p>
    </div>
    </Transition>

    <div class="image" :class="[color, hover ? 'hover-effect' : 'no-effect']">
        <img :src="`${publicPath}img/projects/${project.img}`" alt="Card image">
    </div>

</div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';

export default defineComponent({
    props: {
        project: {
            type: Object,
            required: true
        }
    },
    setup() {

        let color = ref('');
        let secondaryColor = ref('');
        let hover = ref(false);

        function randomColor() {

            const delimiter = Math.floor(Math.random() * 3);

            if (delimiter == 0) {
                color.value = 'dark';
                secondaryColor.value = 'light';
            } else if (delimiter == 1) {
                color.value = 'mid';
                secondaryColor.value = 'dark';
            } else  {
                color.value = 'light';
                secondaryColor.value = 'mid';
            }

        }

        function hoverIn() {
            hover.value = true;
        }

        function hoverOut() {
            hover.value = false;
        }

        onMounted(() => {
            randomColor();
        })

        return {
            color,
            secondaryColor,
            hover,
            hoverIn,
            hoverOut,
            publicPath: process.env.BASE_URL
        }
    }

});
</script>

<style scoped>

.card {
    aspect-ratio: 1 / 1;
    max-width: 20rem;
    height: auto;
    position: relative;
    overflow: hidden;
}

.image {
    padding: 1rem;
}

.card img {
    max-height: 100%;
    max-width: 100%;  
    transform: scale(1, 1);
    transition: 1s ease;  
}

.overlay {
    position: absolute;
    height: 40%;
    width: 80%;
    margin-left: 10%;
    margin-bottom: 10%;
    z-index: 2;
    bottom: 0;
    padding: 1.5rem;
    box-sizing: border-box;
    font-family: 'Roboto Mono', monospace;
    color: white;
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.overlay a {
    color: white;
}

.overlay a:after {
    content: "";
    display: inline-block;
    height: 1rem;
    width: 1.5rem;
    padding-top: 2px;
    margin-left: 0.5rem;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/Pjxzdmcgdmlld0JveD0iMCAwIDMyIDMyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHN0eWxlPSJmaWxsOndoaXRlOyI+PHRpdGxlLz48ZyBkYXRhLW5hbWU9IkxheWVyIDIiIGlkPSJMYXllcl8yIj48cGF0aCBkPSJNMjIsOWExLDEsMCwwLDAsMCwxLjQybDQuNiw0LjZIMy4wNmExLDEsMCwxLDAsMCwySDI2LjU4TDIyLDIxLjU5QTEsMSwwLDAsMCwyMiwyM2ExLDEsMCwwLDAsMS40MSwwbDYuMzYtNi4zNmEuODguODgsMCwwLDAsMC0xLjI3TDIzLjQyLDlBMSwxLDAsMCwwLDIyLDlaIi8+PC9nPjwvc3ZnPg==);
    transition: all 0.3s ease;
}  

.overlay a:hover:after {
    margin-left: 1rem;
    transition: all 0.3s ease;
}

.hover-effect {
    filter: grayscale(100%);
    transform: scale(1.5, 1.5);
    transition: 0.5s ease; 
}

.no-effect {
    transform: scale(1, 1);
    filter: none;
    transition: 0.5s ease; 
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

</style>