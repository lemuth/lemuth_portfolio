import Image from "next/image";
import Carousel from "../Carousel/Carousel"
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
import kenny from "@/assets/img/kenny.png"

const experiencesData = [
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
        annee: 2020,
        periode:"2020",
        type: "Freelance",
        duree_fr: "1an",
        duree_en: "1year",
        intitule: "Tecnilud Manager",
        prez_fr: "Application de gestion des interventions des techniciens de la société Tecnilud",
        prez_en: "Application for managing interventions by technicians at Tecnilud",
        technos: [{name:'React-Native', level: '3'}, {name:'ExpressJs', level: '2'}, {name: 'NodeJs', level: 2, color: "#5EAC46"}],
        images: [tecnilud1, tecnilud2, tecnilud3],
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
        annee: 2023,
        periode:"2023",
        type: "Freelance",
        duree_fr: "3mois",
        duree_en: "3months",
        intitule: "Peuch Configurator",
        prez_fr: "Création d'un showroom virtuel en 3D permettant la personnalisation d'un habillage d'ascenseur parmi les options disponibles",
        prez_en: "Creation of a 3D virtual showroom allowing customized elevator cladding selection from available options",
        technos: [{name:'NextJs', level: '3'}, {name:'React', level: '3'}, {name:'ThreeJs', level: '2'}, {name: '3DsMax', level:'3'}],
        link: "https://peuch-configurator-tgmlf.ondigitalocean.app/",
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
        link: "https://www.les-maitres-acousticiens.fr/",
    },
]

export default function Experiences(props){

    const { lg, tr } = props
    const options = { direction: 'rtl' }

    return (
        <div className="flex flex-col justify-center items-center w-full relative">
            <div className="md:w-[65%] w-full flex-col justify-center items-center p-6 md:mt-40 mt-5 shadow-xl relative">
                <Carousel lg={lg} tr={tr} slides={experiencesData.sort((a,b) => {return b.annee - a.annee})} options={options} />
                <div className="absolute left-[-20px] bottom-8 ease-in duration-100 transition transform hover:-translate-y-10 hover:translate-x-3">
                    <Image src={kenny} width={150} alt="kenny" />
                </div>
            </div>
        </div>
    )
}