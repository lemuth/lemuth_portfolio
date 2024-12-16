
// pictureListe
import streetProject from "@/assets/img/bonus/TP-street_project.jpg"
import tcInt from "@/assets/img/bonus/TeakCell-vue-interieur-final.jpg"
import tcExt from "@/assets/img/bonus/TeakCell-vue-exterieur-final.jpg"
import mecha from "@/assets/img/bonus/MTF-filaire.jpg"
import lfd from "@/assets/img/bonus/TP-street_in_fire.jpg"
import moonoeuf from "@/assets/img/bonus/CM-moonoeuf-02.jpg"
import vestiaire from "@/assets/img/bonus/CM-vestiaire-01.jpg"
import bureau from "@/assets/img/bonus/CM-bureau-02.jpg"

// experiencesData
import lery1 from "@/assets/img/projets/lery-poses-design-intro.jpg"
import lery2 from "@/assets/img/projets/lery-poses-design-tools.jpg"
import lery3 from "@/assets/img/projets/lery-poses-design-details.jpg"
import magnolia from "@/assets/img/projets/magnolia-logo.png"
import shoppingW1 from "@/assets/img/projets/shopping-winner-1.jpg"
import shoppingW2 from "@/assets/img/projets/shopping-winner-2.jpg"
import shoppingW3 from "@/assets/img/projets/shopping-winner-3.jpg"
import tecnilud1 from "@/assets/img/projets/tecnilud-1.jpg"
import tecnilud2 from "@/assets/img/projets/tecnilud-2.jpg"
import tecnilud3 from "@/assets/img/projets/tecnilud-3.jpg"
import betech1 from "@/assets/img/projets/betech-1.jpg"
import betech2 from "@/assets/img/projets/betech-2.jpg"
import evalli1 from "@/assets/img/projets/evalli-1.jpg"
import evalli2 from "@/assets/img/projets/evalli-2.jpg"
import evalli3 from "@/assets/img/projets/evalli-3.jpg"
import lma from "@/assets/img/projets/screen_lma.jpg"
import peuch from "@/assets/img/projets/peuch.jpg"

// pannelData
import jsIcon from "@/assets/img/JavaScript-logo.png"
import photoshopIcon from "@/assets/img/Photoshop_CC_icon.png"
import sqlIcon from "@/assets/img/sql_logo.png"
import mongoIcon from "@/assets/img/mongodb_logo.png"
import nextIcon from "@/assets/img/nextjs_logo.png"
import htmlIcon from "@/assets/img/html_logo.png"
import threeIcon from "@/assets/img/three-js-logo.png"
import typescriptIcon from "@/assets/img/Typescript_logo_2020.svg.png"
import reactIcon from "@/assets/img/react-logo.png"
import tailwindIcon from "@/assets/img/tailwind_logo.png"
import cssIcon from "@/assets/img/css_logo.png"
import nodeIcon from "@/assets/img/node_logo.png"

const pictureListe = [
    {id:0, type: "img", path: [streetProject], width: 2048, height: 1556, widthMin: 256, heightMin: 194, title: "Cyber Street", prez: "ruelle inspiration cyberpunk"},
    {id:1, type: "img", path: [tcInt], width: 2048, height: 1536, widthMin: 256, heightMin: 194, title: "Bungalow Intérieur", prez: "bungalow pour la société teakCell vue interieur"},
    {id:2, type: "img", path: [tcExt], width: 2048, height: 1536, widthMin: 356, heightMin: 194, title: "Bungalow Extérieur", prez: "bungalow pour la société teakCell vue exterieur"},
    {id:3, type: "img", path: [mecha], width: 2880, height: 2160, widthMin: 259, heightMin: 194, title: "Mécha Filaire", prez: "mecha vue graphique"},
    {id:4, type: "img", path: [lfd], width: 1280, height: 960, widthMin: 259, heightMin: 194, title: "Last Night in VDR", prez: "projet de map pour le jeu leftfordead"},
    {id:5, type: "img", path: [moonoeuf], width: 3508, height: 2480, widthMin: 274, heightMin: 194, title: "CM-MoonOeuf", prez: "création pour le film croquemeurtre MoonOeuf"},
    {id:6, type: "img", path: [vestiaire], width: 2956, height: 1672, widthMin: 343, heightMin: 194, title: "CM-vestiaire", prez: "création pour le film croquemeurtre vestiaire"},
    {id:7, type: "img", path: [bureau], width: 1280, height: 723, widthMin: 343, heightMin: 194, title: "CM-Bureau", prez: "création pour le film croquemeurtre bureau"},
    {id:8, type: "vid", path: "/lemuth_portfolio/video/CM-cerveau-vid.mp4", width: 1280, height: 723, widthMin: 259, heightMin: 194, title: "Fauteuil des réflexions", prez: ""},
]

const experiencesData = [
    {
        annee: 2020,
        periode:"2020",
        type: "Freelance",
        duree_fr: "1an",
        duree_en: "1year",
        intitule: "Tecnilud Manager",
        prez_fr: "Application de gestion des interventions des techniciens de la société Tecnilud",
        prez_en: "Application for managing interventions by technicians at Tecnilud company",
        technos: [{name:'React-Native', level: '3'}, {name:'ExpressJs', level: '2'}, {name: 'NodeJs', level: 2, color: "#5EAC46"}],
        images: [tecnilud1, tecnilud2, tecnilud3],
    },
    {
        annee: 2017,
        periode:"2017",
        type: "Freelance",
        duree_fr: "1an",
        duree_en: "1year",
        intitule: "Léry-Pose en Normandie",
        prez_fr: "Application pour la base de loisirs nautique de Léry-Poses en Normandie. Application destinée aux visiteurs du parc, utilisant la géolocalisation et mettant en avant les activités du parc",
        prez_en: "Application for the Léry-Poses nautical leisure center in Normandy. An application aimed at park visitors, using geolocation and highlighting park activities",
        technos: [{name:'Javascript', level: '4'}, {name:'Leaflet', level: '3'}, {name:'Cordova', level: '2'}],
        images: [ lery1, lery2, lery3 ],
    },
    {
        annee: 2023,
        periode:"2023",
        type: "Freelance",
        duree_fr: "3mois",
        duree_en: "3months",
        intitule: "Peuch Configurator",
        prez_fr: "Création d'un showroom virtuel en 3D permettant la personnalisation d'un habillage d'ascenseur parmi les options disponibles",
        prez_en: "Creation of a 3D virtual showroom allowing customized elevator cladding selection from available options",
        technos: [{name:'NextJs', level: '3'}, {name:'React', level: '3'}, {name:'ThreeJs', level: '2'}, {name: '3DsMax', level:'3'}],
        images: [peuch],
        link: "https://www.ets-peuch.fr/",
    },
    {
        annee: 2019,
        periode:"2019",
        type: "Freelance",
        duree_fr: "1an",
        duree_en: "1year",
        intitule: "Shopping Winner",
        prez_fr: "Application de mise en relation entre commerçants locaux et clients. Maintenance et corrections avant le lancement de la V1. Développement de fonctionnalités supplémentaires (module de paiement, localisation GPS, etc.)",
        prez_en: "Application connecting local merchants with customers. Maintenance and bug fixes before the launch of V1. Development of additional features (payment module, GPS localization, etc.)",
        technos: [{name:'Javascript', level: '4'}, {name:'Angular', level: '3'}, {name: 'Sql', level: 3}],
        images: [shoppingW1, shoppingW2, shoppingW3],
    },
    {
        annee: 2022,
        periode:"2022-2023",
        type: "Freelance",
        duree_fr: "1an",
        duree_en: "1year",
        intitule: "Evalli",
        prez_fr: "Application (PWA) de coaching sportif et bien-être. Réécriture de la V1, de Flutter à React, refonte complète de l'interface. Conception et intégration du design/UX. Ajout de fonctionnalités",
        prez_en: "Sports and wellness coaching Progressive Web App (PWA). Rewriting of V1 from Flutter to React, complete redesign of the interface. Design and UX integration. Addition of features",
        technos: [{name:'NextJs', level: '3'}, {name:'React', level: '3'}, {name:'Redux', level: '2'}, {name: 'Tailwind', level: 3}],
        images: [evalli1, evalli2, evalli3]
    },
    {
        annee: 2024,
        periode:"2024",
        type: "Freelance",
        duree_fr: "1mois",
        duree_en: "1month",
        intitule: "Les Maîtres acousticiens",
        prez_fr: "Création d'un site web pour une société spécialisée dans l'installation de matériel audio sur véhicules de luxe",
        prez_en: "Creation of a website for a company specializing in installing audio equipment in luxury vehicles",
        technos: [{name:'NextJs', level: '4'}, {name:'React', level: '4'}, {name:'Tailwind', level: '3'}],
        images: [lma],
        link: "https://www.les-maitres-acousticiens.fr/",
    },
    {
        annee: 2021,
        periode:"2021",
        type: "Freelance",
        duree_fr: "2mois",
        duree_en: "2months",
        intitule: "Betech",
        prez_fr: "Petite application pour un bureau d'études en électricité, permettant l'échange d'informations en temps réel sur les détails d'un chantier pour optimiser la communication entre le bureau d'études et les opérateurs sur le terrain",
        prez_en: "Small application for an electrical engineering office, enabling real-time exchange of information on project details to optimize communication between the office and field operators",
        technos: [{name:'React-Native', level: '3'}, {name:'Firebase', level: '2'}],
        images: [betech1, betech2],
    },
    {
        annee: 2018,
        periode:"2018",
        type: "Employé",
        duree_fr: "6mois",
        duree_en: "6months",
        intitule: "Magnolia.fr",
        prez_fr: "Mise en place du design de la version 2 du CRM interne de la société Magnolia.fr",
        prez_en: "Implementation of the design for version 2 of Magnolia.fr's in-house CRM",
        technos: [{name:'Javascript', level: '2'}, {name:'Twig', level: '3'}, {name:'Php', level: '2'}, {name: 'Symfony', level: 3}],
        images: [magnolia],
    },

]

const pannelData =[
    {
        id: 1,
        img: jsIcon,
        title: 'JavaScript',
        level: 4,
        content_fr: 'JavaScript est le langage principal dans tous mes projets depuis que je code. J\'aime suivre ses nombreuses évolutions et adapter mon code en conséquence.',
        content_en: 'JavaScript has been the main language in all my projects since I started coding. I enjoy following its many evolutions and adapting my code accordingly.',
    },
    {
        id: 2,
        img: photoshopIcon,
        title: 'Photoshop',
        level: 3,
        "content_fr": "J'utilisais Photoshop avant de savoir coder ! Détourage, modifications, formats d'images, je connais assez bien Photoshop pour me sentir libre dans mon travail.",
        "content_en": "I used Photoshop before I knew how to code! Clipping, modifications, image formats, I know Photoshop well enough to feel free in my work.",
    },
    {
        id: 3,
        img: sqlIcon,
        title: 'SQL',
        level: 4,
        content_fr: "Le SQL est un langage que j'ai souvent utilisé dans ma pratique du développement web.",
        content_en: "SQL is a language that I have often used in my web development practice.",
    },
    {
        id:4,
        img: mongoIcon,
        title: 'MongoDB',
        level: 3,
        content_fr: "Je n'ai travaillé que sur des projets personnels avec MongoDB, mais son format JavaScript-friendly me permet de l'appréhender rapidement.",
        content_en: "I have only worked on personal projects with MongoDB, but its JavaScript-friendly format allows me to grasp it quickly.",
    },
    {
        id: 5,
        img: nextIcon,
        title: 'NextJs',
        level: 3,
        content_fr: "Je travaille sur tous mes projets depuis deux ans avec Next.js. Il est vite devenu un incontournable pour moi.",
        content_en: "I have been working on all my projects with Next.js for the past two years. It quickly became essential for me.",
    },
    {
        id: 6,
        img: htmlIcon,
        title: 'Html',
        level: 4,
        content_fr: "Je pratique le langage HTML depuis le début de mon aventure de codeur. Je suis sûr que je n'en connais pas toutes les subtilités, mais on se connaît bien, lui et moi.",
        content_en: "I have been using HTML since the beginning of my coding journey. I'm sure I don't know all its subtleties, but we know each other well.",
    },
    {
        id: 7,
        img: threeIcon,
        title: 'ThreeJs',
        level: 2,
        content_fr: "J'aime particulièrement la 3D puisque je modélise mes propres meshes et conçois mes textures. Three.js me permet de mettre mes compétences en 3D au service du web.",
        content_en: "I particularly love 3D as I model my own meshes and design my textures. Three.js allows me to bring my 3D skills to the web.",
    },
    {
        id: 8,
        img: typescriptIcon,
        title: 'TypeScript',
        level: 2,
        content_fr: "J'ai intégré TypeScript dans mes derniers projets personnels. Je ne suis pas encore familier avec tous ses aspects, mais j'en connais les bases.",
        content_en: "I have integrated TypeScript into my recent personal projects. I'm not yet familiar with all its aspects, but I know the basics.",
    },
    {
        id: 9,
        img: reactIcon,
        title: 'React',
        level: 4,
        content_fr: "J'intègre React dans tous mes projets depuis 4 ans, j'ai l'habitude de manipuler ses Hooks, et j'apprécie également la bibliothèque Redux.",
        content_en: "I have been using React in all my projects for the past 4 years, I'm used to working with its Hooks, and I also enjoy using the Redux library.",
    },
    {
        id: 10,
        img: tailwindIcon,
        title: 'Tailwind',
        level: 3,
        content_fr: "Je travaille avec Tailwind dans tous mes projets depuis 2 ans.",
        content_en: "I have been working with Tailwind in all my projects for 2 years.",
    },
    {
        id: 11,
        img: cssIcon,
        title: 'CSS',
        level: 4,
        content_fr: "Je pratique le CSS depuis mes débuts en programmation, j'ai une préférence pour les flexbox.",
        content_en: "I have been practicing CSS since the beginning of my coding journey, and I have a preference for flexbox.",
    },
    {
        id: 12,
        img: nodeIcon,
        title: 'NodeJs',
        level: 3,
        content_fr: "Je pratique Node.js depuis 5 ans. Je connais bien Express.js, Firebase, et j'ai récemment exploré un peu Nest.js.",
        content_en: "I have been working with Node.js for 5 years. I am familiar with Express.js, Firebase, and have recently dabbled a bit in Nest.js.",
    },
]

export {pictureListe, experiencesData, pannelData}