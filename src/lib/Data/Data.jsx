
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

const translator = {
    "fr": {
        lg_button: "English version 🇬🇧",
        bandeau_title: "Développeur Front-End",
        bandeau_subtitle: "Mais un peu Full Stack aussi",
        cs_hlp_rotate: "Rotation",
        cs_hlp_move: "Déplacement",
        cs_hlp_zoom: "Zoom",
        cs_hlp_reset: "Reset Camera",
        cs_curtain_btn: "Ouvrir",
        prez_title: "Pour me présenter",
        prez_p_one: "Vous êtes à la recherche d'un développeur front-end pour rejoindre votre équipe?",
        prez_p_two: "Un développeur passionné par ce qu'il fait et aimant relever des défis divers ? Je suis peut-être celui que vous recherchez.",
        prez_p_three: "Pour me présenter rapidement, j'ai eu plusieurs vies professionnelles et me suis passionné pour le code il y a 7/8 ans. Je me suis ensuite installé en freelance et ai développé principalement des applications pour des sociétés locales désireuses de mettre à jour leurs process internes. Je me suis toujours attaché à évoluer au fil du temps dans ma technologie de prédilection, le JavaScript.",
        prez_p_four: "Je souhaite aujourd\'hui rejoindre une équipe pour continuer à évoluer, partager nos connaissances et répondre aux besoins des clients, bien sûr ! Si mon profil correspond à ce que vous recherchez, n'hésitez pas à me contacter !",
        carousel_title: "Mes Projets les plus Notables",
        carousel_duree: "Durée",
        carousel_link: "Lien vers le site",
        pp_title: "Vous avez dit Projets Personnels ? ",
        pp_intro: "Je mène de nombreux projets personnels depuis que je code. C'est une excellente manière de concrétiser des idées tout en approfondissant mes connaissances ou en me formant sur des technologies qui m'attirent.",
        pp_intro_2: "Beaucoup de ces projets n'ont pas été menés à terme, car ils avaient pour principal objectif d'explorer des problématiques techniques ou d'appréhender de nouvelles technologies. Voici toutefois quelques exemples :",
        pp_one_title: "Un convertisseur d'images en Node.js :",
        pp_one_content: "Je travaillais alors pour une entreprise de BTP qui devait régulièrement envoyer des photos sur des serveurs distants pour la gestion de ses dossiers. J'ai donc mis au point un convertisseur d'images capable de traiter à la volée toutes les images contenues dans un dossier afin d'alléger la charge de transfert lors de leur envoi sur les serveurs.",
        pp_two_title: "Gibiti :",
        pp_two_content: "Mon association de jeux de plateau a décidé de déclarer la guerre aux joueurs trop lents. J'ai donc créé une application en React Native pour chronométrer le temps de jeu de chaque participant durant une partie, à la manière d'un timer d'échecs, mais adapté aux jeux impliquant plusieurs joueurs. En fin de partie, l'application applique des malus de points aux joueurs ayant dépassé le temps imparti et enregistre les détails de la partie pour en conserver un historique. À titre personnel, je ne cautionne pas ce type de pratique, mais l'outil a été apprécié.",
        pp_three_title: "Projets sur Unity :",
        pp_three_intro: "Passionné de jeux vidéo depuis longtemps, j'ai lancé plusieurs projets sur le moteur Unity. Parmi les plus notables :",
        pp_three_one: "Un jeu de parcours en 3D",
        pp_three_two: "Un shoot-em-up classique",
        pp_three_three: "Un tactical RPG en 2D",
        pp_three_four: "Mon préféré reste un jeu en VR où l'on évolue dans un environnement 3D inspiré des mondes virtuels des œuvres cyberpunk.",
        pp_four_title: "Sofa (en cours de développement) :",
        pp_four_content_one: "Souhaitant me familiariser avec la conception de logiciels, j'ai choisi le langage Java pour m'entraîner. Avec un ami développeur ( ",
        pp_four_content_two: " ), nous avons entrepris de créer un outil pour gérer une large bibliothèque de films. Le principe est le suivant : Grâce à l'API de ChatGPT, Sofa récupère les fichiers vidéo d'un dossier indiqué par l'utilisateur. Sur la base des noms de ces fichiers, l'outil envoie des requêtes à l'API de The Movie Database pour identifier les films ou séries correspondants et remplit une base de données intégrée. Cette base alimente ensuite une interface visuelle qui permet de sélectionner un film parmi la liste, d'obtenir des informations sur celui-ci et de le visionner. Il ne reste plus qu'à s'installer confortablement dans son sofa pour profiter du spectacle !",
        aa_title: "Les petits",
        aa_p_one_one: "Un niveau B2 en Anglais",
        aa_p_one_two: "Très sociable pour un Dév",
        aa_p_one_three: "Autodidacte, apprentissage continu",
        aa_p_one_four: "A combattu des dragons dans sa jeunesse",
        aa_p_one_four_bis: "( en lancant des dés )",
        aa_p_one_five: "Est prêt à se déplacer",
        aa_p_one_six: "Irréprochable à la pause café",
        aa_p_one_six_bis: "sur les dernières séries",
        aa_p_two_one: "A la tête dur",
        aa_p_two_two: "Pas d'expèriences de très gros projet",
        aa_p_two_three: "Supporter mes références sur les années 90",
        aa_p_two_four: "J'ai beau chercher je n'en vois pas d'autres...",
        bonus_title: "En bonus, quelques créations 3D de votre serviteur !",
        ft_tx: "Ce site a été fait avec amour par mes soins, de la modélisation 3D à la réalisation du site. Merci de votre visite !",
        ft_mail: "N'hésitez pas à me recontacter directement par e-mail",
        ft_cv: "Télécharger mon CV",
    },
    "en": {
        lg_button: "version Française 🇫🇷",
        bandeau_title: "Front-End Developer",
        bandeau_subtitle: "But a bit Full Stack too",
        cs_hlp_rotate: "Rotate",
        cs_hlp_move: "Move",
        cs_hlp_zoom: "Zoom",
        cs_hlp_reset: "Reset Camera",
        cs_curtain_btn: "Open",
        prez_title: "Introducing myself",
        prez_p_one: "Are you looking for a front-end developer to join your team? ",
        prez_p_two: "A developer who is passionate about their work and enjoys tackling various challenges? I might be the one you're searching for.",
        prez_p_three: "To introduce myself briefly, I have had multiple professional experiences and became passionate about coding 7-8 years ago. I then became a freelancer and primarily developed applications for local companies looking to update their internal processes. I have always strived to evolve over time in my preferred technology, JavaScript.",
        prez_p_four: "I now wish to join a team to continue growing, share my knowledge, and meet clients' needs, of course! If my profile matches what you're looking for, feel free to contact me!",
        carousel_title: "My Most Notable Projects",
        carousel_duree: "Duration",
        carousel_link: "Link to the website",
        pp_title: "Did you say personal projects ?",
        pp_intro: "I have been working on many personal projects since I started coding. It's an excellent way to bring ideas to life while deepening my knowledge or learning about technologies that interest me.",
        pp_intro_2: "Many of these projects were not completed, as their primary goal was to explore technical challenges or experiment with new technologies. However, here are some examples:",
        pp_one_title: "An image converter in Node.js :",
        pp_one_content: "At the time, I was working for a construction company that needed to regularly upload photos to remote servers for file management. I developed an image converter that processed all images in a folder on the fly to reduce the transfer load when sending them to the servers.",
        pp_two_title: "Gibiti :",
        pp_two_content: "My board game association decided to tackle the issue of slow players. I created an application in React Native to time each player's turn during a game, similar to a chess timer but adapted for games involving multiple players. At the end of the game, the application assigns penalty points to players who exceeded their allotted time and records the game details for historical tracking. Personally, I don't endorse such practices, but the tool was well-received.",        aa_title: "The little",
        pp_three_title: "Unity projects:",
        pp_three_intro: "As a long-time video game enthusiast, I've launched several projects using the Unity engine. Among the most notable are:",
        pp_three_one: "A 3D parkour game",
        pp_three_two: "A classic shoot-em-up",
        pp_three_three: "A 2D tactical RPG",
        pp_three_four: "My favorite is a VR game where players explore a 3D environment inspired by the virtual worlds depicted in cyberpunk literature.",
        aa_p_one_one: "B2 Level in English",
        pp_four_title: "Sofa (currently in development):",
        pp_four_content: "Wanting to familiarize myself with software design, I chose Java as my programming language. Together with a fellow developer (Laurent Desjardins), I started working on a tool to manage my large movie library. The concept is as follows: Using the ChatGPT API, Sofa scans the video files in a user-specified folder. Based on the file names, it sends requests to The Movie Database API to identify the corresponding movies or series and populates a local database. This database is then used to power a visual interface that allows users to select a movie from the list, view detailed information, and play the video. All that's left is to sit back and enjoy the movie on your sofa !",
        pp_four_content_one: "Wanting to familiarize myself with software design, I chose Java as my programming language. Together with a fellow developer ( ",
        pp_four_content_two: " ), I started working on a tool to manage a large movie library. The concept is as follows: Using the ChatGPT API, Sofa scans the video files in a user-specified folder. Based on the file names, it sends requests to The Movie Database API to identify the corresponding movies or series and populates a local database. This database is then used to power a visual interface that allows users to select a movie from the list, view detailed information, and play the video. All that's left is to sit back and enjoy the movie on your sofa!",
        aa_p_one_two: "Very sociable for a Dev",
        aa_p_one_three: "Self-taught, continuous learning",
        aa_p_one_four: "Fought dragons in his youthg",
        aa_p_one_four_bis: "( Rolling dice )",
        aa_p_one_five: "Is ready to move",
        aa_p_one_six: "Impeccable when discussing",
        aa_p_one_six_bis: "the latest series over coffee",
        aa_p_two_one: "Have a hard head",
        aa_p_two_two: "No experience with very large projects",
        aa_p_two_three: "Tolerate my 90s references",
        aa_p_two_four: "No matter how much I search, I don't see any others...",
        bonus_title: "As a bonus, a few 3D creations from yours truly !",
        ft_tx: "This site was made with love by myself, from 3D modeling to website development. Thank you for visiting!",
        ft_mail: "Feel free to contact me directly by email",
        ft_cv: "Download my CV",
    },
}

export {pictureListe, experiencesData, pannelData, translator}