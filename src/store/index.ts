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
            description: 'Mit Frigo wird der Haushalt ein Leichtes: Die Web-App vereinfacht den Überblick über Vorräte, Rezepte und Einkaufsliste. Ein Wochenplan-Feature hilft dabei, das Essen für kommende Tage vorzuplanen. Mit Warnungen, wenn vorhandene Lebensmittel ablaufen, kann man zudem rechtzeitig reagieren und die Lebensmittel aufbrauchen.',
            stack: [
                'Vue 3',
                'Typescript',
                'Node.js',
                'MongoDB'
            ],
            url: 'https://github.com/mwestenthanner/frigo-mevn',
            img: 'Frigo.png'
        },
        {
            name: 'find a game',
            description: 'Der Xbox Game Pass zählt aktuell über 500 Spiele - mit find a game lassen sich diese einfach nach Genres, Spieldauer und anderen Kriterien filtern, um neue Favoriten zu entdecken.',
            stack: [
                'Vue 3',
                'Typescript',
                'Netlify Functions',
                'Airtable'
            ],
            url: 'https://gamepass-find-a-game.netlify.app/',
            img: 'findagame.png'
        },
        {
            name: 'Bräu z\'Loh Onlineshop',
            description: 'Für die kleine Brauerei aus meiner Region habe ich einen Online-Shop entwickelt, in dem sowohl Brauprodukte als auch Merchandise verkauft werden.',
            stack: [
                'WordPress',
                'WooCommerce'
            ],
            url: 'https://shop.braeuzloh.de/',
            img: 'Braeu.png'
        },
        {
            name: 'Angular Bakery',
            description: 'In der Angular Bakery finden sich Rezepte aus den verschiedensten Kategorien, die man filtern, sortieren und drucken kann. Das Projekt ist ein reines Frontend und ist derzeit nur mit Beispieldaten gefüllt.',
            stack: [
                'Angular'
            ],
            url: 'https://angular-bakery.netlify.app/',
            img: 'Bakery.png'
        },
        {
            name: 'Feuerwehr Schwindkirchen',
            description: 'Eine Website auf WordPress-Basis für die Feuerwehr Schwindkirchen – hier werden unter anderem Einsatzberichte und aktuelle Ereignisse aus dem Verein veröffentlicht.',
            stack: [
                'WordPress'
            ],
            url: 'https://ffwschwindkirchen.de/',
            img: 'ffwskn.png'
        },
        {
            name: 'Feuerwehr Schwindegg',
            description: 'Eine Website auf WordPress-Basis für die Feuerwehr Schwindegg – hier werden unter anderem Einsatzberichte und aktuelle Ereignisse aus dem Verein veröffentlicht.',
            stack: [
                'WordPress'
            ],
            url: 'https://ff-schwindegg.de/',
            img: 'ffwswgg.png'
        }
    ]
    
})


export const getProjects = computed(() => state.value.projectList);