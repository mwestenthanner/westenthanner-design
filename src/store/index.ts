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
            img: 'bakes.png',
            categories: [
                'Web Design',
                'Web Development'
            ]
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
            img: 'Frigo.png',
            categories: [
                'Web Design',
                'Web Development'
            ]
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
            img: 'findagame.png',
            categories: [
                'Web Design',
                'Web Development'
            ]
        },
        {
            name: 'Bräu z\'Loh Onlineshop',
            description: 'Für die kleine Brauerei aus meiner Region habe ich einen Online-Shop entwickelt, in dem sowohl Brauprodukte als auch Merchandise verkauft werden.',
            stack: [
                'WordPress',
                'WooCommerce'
            ],
            url: 'https://shop.braeuzloh.de/',
            img: 'Braeu.png',
            categories: [
                'Web Design',
                'Web Development'
            ]
        },
        {
            name: 'Hofmetzgerei Sippl',
            description: 'Für die kleine Hofmetzgerei nahe Schwindegg, die 2021 eröffnet hat, habe ich die Gestaltung des Logos sowie einiger Teasergrafiken übernommen. Die beiden gezeigten Tiere sind handgezeichnet, zur besseren Verwendung in allen Größen ist das Logo zudem rein vektorbasiert.',
            stack: [
                'Grafikdesign',
                'WordPress'
            ],
            url: 'https://www.facebook.com/hofmetzgereisippl',
            img: 'Sippl.png',
            categories: [
                'Grafikdesign'
            ]
        },
        {
            name: 'Angular Bakery',
            description: 'In der Angular Bakery finden sich Rezepte aus den verschiedensten Kategorien, die man filtern, sortieren und drucken kann. Das Projekt ist ein reines Frontend und ist derzeit nur mit Beispieldaten gefüllt.',
            stack: [
                'Angular'
            ],
            url: 'https://angular-bakery.netlify.app/',
            img: 'Bakery.png',
            categories: [
                'Web Design',
                'Web Development'
            ]
        },
        {
            name: 'Feuerwehr Schwindkirchen',
            description: 'Eine Website auf WordPress-Basis für die Feuerwehr Schwindkirchen – hier werden unter anderem Einsatzberichte und aktuelle Ereignisse aus dem Verein veröffentlicht.',
            stack: [
                'WordPress'
            ],
            url: 'https://ffwschwindkirchen.de/',
            img: 'ffwskn.png',
            categories: [
                'Web Development'
            ]
        },
        {
            name: 'Feuerwehr Schwindegg',
            description: 'Eine Website auf WordPress-Basis für die Feuerwehr Schwindegg – hier werden unter anderem Einsatzberichte und aktuelle Ereignisse aus dem Verein veröffentlicht.',
            stack: [
                'WordPress'
            ],
            url: 'https://ff-schwindegg.de/',
            img: 'ffwswgg.png',
            categories: [
                'Web Development'
            ]
        },
        {
            name: 'Feuerwehrkalender 2020',
            description: 'Die Feuerwehrfrauen aus Schwindegg und Schwindkirchen hatten 2020 bereits zum 3. Mal einen Kalender geplant. Neben Layout und Druck habe ich das Design des Kalenders konzeptioniert sowie einen Online-Shop für die Kalender eingerichtet. Das Geld kam u.a. der Aktion Paulinchen e.V. zugute.',
            stack: [
                'Grafikdesign',
                'WordPress'
            ],
            url: 'http://kalender.ff-schwindegg.de/',
            img: 'Kalender.png',
            categories: [
                'Web Development',
                'Grafikdesign'
            ]
        }
    ],

    categoryList: [
        {
            name: 'Web Design',
            description: [
                'Ich designe Deinen Webauftritt, konzipiere nutzerfreundliche Designs und versehe sie mit der notwendigen Funktion. Dabei stimme ich mich in jedem Projektschritt mit Dir ab.',
                'Als ausgebildete Softwarejournalistin bin ich zudem Expertin, was Nutzer und deren Anforderungen betrifft - ich habe mehrere Jahre Erfahrung im Testen verschiedenster Programme und Apps und kann Dir so einige Informationen zu Deiner Zielgruppe verraten.'
            ],
            img: 'frigo.png'
        },
        {
            name: 'Web Development',
            description: [
                'Als Webentwicklerin . Ich habe Medieninformatik studiert und arbeite bereits seit mehreren Jahren mit aktuellen Webtechnologien, sodass ich Dir mit bestem Rat zur Seite stehen kann. Zuerst arbeiten wir gemeinsam aus, was Deine Anforderungen sind und wie wir sie am besten umsetzen.',
                'Einfache Websites realisiere ich mit WordPress. Das hat den Vorteil, dass Du vollen Zugriff auf die Seite hast und Artikel, Seiten oder Bilder selbst publizieren kannst. Bei Fragen stehe ich Dir jedoch stets zur Seite. Auch Onlineshops lassen sich mit WordPress aufsetzen.',
                'Ich nehme auch umfangreichere Projekte an und baue Webanwendungen - also Programme, die komplett im Browser laufen. Das reicht von einfachen Apps wie meinem Back-Rechner Better Bakes, mit dem man Backformen und Zutatenmengen umrechnen kann, bis hin zu komplizierten Anwendungen mit Datenbanken und mehreren Nutzern. Dabei arbeite ich meist mit Vue, einem Javascript-Framework. Dank verschiedener Technologien kannst Du meine Vue-Apps sogar auf dem Smartphone installieren.'
            ],
            img: 'frigo.png'
        },        
        {
            name: 'Grafikdesign',
            description: [
                'Neben Entwicklungsprojekten stehe ich Dir auch als Grafikdesignerin zur Seite und erstelle zum Beispiel Werbematerial wie Flyer und Plakate, aber auch Teaserbilder oder Grafiken, die Du im Web oder auf Instagram, Facebook & Co. einsetzen kannst.',
                'Ich arbeite mit der Affinity Suite, Photoshop sowie After Effects. Damit konzeptioniere ich nicht nur druckfertige Produkte und Social-Media-Grafiken, sondern begleite Dich bei allen Schritten bis zur Lieferung des fertigen Werbeprodukts.',
                'Bei Vereinen oder Unternehmen lohnt es sich zudem, eine sogenannte Corporate Identity zu entwickeln. Dabei legen wir passende Farben, Schriften und eine Bildsprache fest, die zu Deiner Nutzergruppe passen.'  
            ],
            img: 'frigo.png'
        }, 
    ]
    
})


const getProjects = computed(() => state.value.projectList);
const getCategories = computed(() => state.value.categoryList);

export {
    getProjects,
    getCategories
}