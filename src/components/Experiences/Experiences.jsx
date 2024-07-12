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
        duree: "1an",
        intitule: "Léry-Pose en Normandie",
        prez: "Application pour la base de loisirs nautique de Lery-Pose en Normandie. Application en direction des visiteurs du parc, utilisant la géo-localisation et mise en avant des activités du parc",
        technos: [{name:'Javascript', level: '4'}, {name:'Leaflet', level: '3'}, {name:'Cordova', level: '2'}],
        images: [ lery1, lery2, lery3 ],
    },
    {
        annee: 2018,
        periode:"2018",
        type: "Employé",
        duree: "6mois",
        intitule: "Magnolia.fr",
        prez: "Mise en place du design de la v2 du CRM maison de la société Magnolia.fr",
        technos: [{name:'Javascript', level: '2'}, {name:'Twig', level: '3'}, {name:'Php', level: '2'}, {name: 'Symfony', level: 3}],
        images: [magnolia],
    },
    {
        annee: 2019,
        periode:"2019",
        type: "Freelance",
        duree: "1an",
        intitule: "Shopping Winner",
        prez: "Application de mise en relation entre commerçants locaux et clients. Maintenance et corrections avant lancement de la V1. Développement de fonctionnalités supplémentaires ( module de paiement, localisation GPS, etc...)",
        technos: [{name:'Javascript', level: '4'}, {name:'Angular', level: '3'}, {name: 'Sql', level: 3}],
        images: [shoppingW1, shoppingW2, shoppingW3],
    },
    {
        annee: 2020,
        periode:"2020",
        type: "Freelance",
        duree: "1an",
        intitule: "Tecnilud Manager",
        prez: "Application de gestion d'interventions des techniciens de la société Tecnilud",
        technos: [{name:'React-Native', level: '3'}, {name:'ExpressJs', level: '2'}, {name: 'NodeJs', level: 2, color: "#5EAC46"}],
        images: [tecnilud1, tecnilud2, tecnilud3],
    },
    {
        annee: 2021,
        periode:"2021",
        type: "Freelance",
        duree: "2mois",
        intitule: "Betech",
        prez: "Petite application pour un bureau d'étude en électricité, permet l'échange d'informations en temps réel sur les détails d'un chantier pour optimiser la communication entre le bureau d'étude et les opérateurs sur le terrain",
        technos: [{name:'React-Native', level: '3'}, {name:'Firebase', level: '2'}],
        images: [betech1, betech2],
    },
    {
        annee: 2022,
        periode:"2022-2023",
        type: "Freelance",
        duree: "1an",
        intitule: "Evalli",
        prez: "Application (PWA) de coaching Sportif et bien-être. Réécriture de la V1, de Flutter à React, refonte complète de l'interface. Conception et intégration du design/UX. Ajouts de fonctionnalités",
        technos: [{name:'NextJs', level: '3'}, {name:'React', level: '3'}, {name:'Redux', level: '2'}, {name: 'Tailwind', level: 3}],
        images: [evalli1, evalli2, evalli3]
    },
    {
        annee: 2023,
        periode:"2023",
        type: "Freelance",
        duree: "3mois",
        intitule: "Peuch Configurator",
        prez: "Création d'un Show-Room virtuel en 3D, qui permet la création personnalisée d'un habillage d'ascenseur parmi les options disponibles",
        technos: [{name:'NextJs', level: '3'}, {name:'React', level: '3'}, {name:'ThreeJs', level: '2'}, {name: '3DsMax', level:'3'}],
        link: "https://peuch-configurator-tgmlf.ondigitalocean.app/",
    },
    {
        annee: 2024,
        periode:"2024",
        type: "Freelance",
        duree: "1mois",
        intitule: "Les Maîtres acousticiens",
        prez: "Création d'un site web pour une société d'installation de matériel audio sur véhicule de luxe",
        technos: [{name:'NextJs', level: '4'}, {name:'React', level: '4'}, {name:'Tailwind', level: '3'}],
        link: "https://www.les-maitres-acousticiens.fr/",
    },
]

export default function Experiences(){

    const options = { direction: 'rtl' }

    return (
        <div className="md:w-[65%] w-full flex-col justify-center items-center p-6 md:mt-40 mt-5 shadow-xl relative">
            <Carousel slides={experiencesData.sort((a,b) => {return b.annee - a.annee})} options={options} />
            <div className="absolute left-[-20px] bottom-8 ease-in duration-100 transition transform hover:-translate-y-10 hover:translate-x-3">
                <Image src={kenny} width={150} alt="kenny" />
            </div>
        </div>
    )
}