import { ref, computed } from "vue";

const state = ref({

    projectList: [
        {
            name: 'Better Bakes',
            description: 'Better Bakes ist dein Helfer beim Backen. Damit lassen sich Backformen, Zutatenmengen und Temperaturen kinderleicht umrechnen. Als Progressive Web App (PWA) kann man die Website auch auf dem Smartphone installieren.',
            stack: [
                'Vue 3',
                'Typescript'
            ],
            url: 'https://better-bakes.netlify.app/',
            img: 'bakes.png'
        },
        {
            name: 'FRIGO',
            description: 'Better Bakes ist dein Helfer beim Backen. Damit lassen sich Backformen, Zutatenmengen und Temperaturen kinderleicht umrechnen. Als Progressive Web App (PWA) kann man die Website auch auf dem Smartphone installieren.',
            stack: [
                'Vue 3',
                'Typescript'
            ],
            url: 'https://better-bakes.netlify.app/',
            img: 'Frigo.png'
        },
        {
            name: 'Bräu z\'Loh Onlineshop',
            description: 'Better Bakes ist dein Helfer beim Backen. Damit lassen sich Backformen, Zutatenmengen und Temperaturen kinderleicht umrechnen. Als Progressive Web App (PWA) kann man die Website auch auf dem Smartphone installieren.',
            stack: [
                'WordPress',
                'WooCommerce'
            ],
            url: 'https://better-bakes.netlify.app/',
            img: 'Braeu.png'
        },
        {
            name: 'Bakery',
            description: 'Better Bakes ist dein Helfer beim Backen. Damit lassen sich Backformen, Zutatenmengen und Temperaturen kinderleicht umrechnen. Als Progressive Web App (PWA) kann man die Website auch auf dem Smartphone installieren.',
            stack: [
                'Angular'
            ],
            url: 'https://better-bakes.netlify.app/',
            img: 'Bakery.png'
        },
        {
            name: 'Feuerwehr Schwindkirchen',
            description: 'Better Bakes ist dein Helfer beim Backen. Damit lassen sich Backformen, Zutatenmengen und Temperaturen kinderleicht umrechnen. Als Progressive Web App (PWA) kann man die Website auch auf dem Smartphone installieren.',
            stack: [
                'WordPress'
            ],
            url: 'https://better-bakes.netlify.app/',
            img: 'ffwskn.png'
        },
        {
            name: 'Feuerwehr Schwindegg',
            description: 'Better Bakes ist dein Helfer beim Backen. Damit lassen sich Backformen, Zutatenmengen und Temperaturen kinderleicht umrechnen. Als Progressive Web App (PWA) kann man die Website auch auf dem Smartphone installieren.',
            stack: [
                'Vue 3',
                'Typescript'
            ],
            url: 'https://better-bakes.netlify.app/',
            img: 'ffwswgg.png'
        }
    ]
    
})


export const getProjects = computed(() => state.value.projectList);