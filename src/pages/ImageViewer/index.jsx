import Image from "next/image"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import changeIcon from "@/assets/img/nextPict.png"
import closeIcon from "@/assets/img/close.png"
import Link from "next/link"
import {Arsenal, Edu_VIC_WA_NT_Beginner, Didact_Gothic} from "next/font/google"

const beginner = Edu_VIC_WA_NT_Beginner({
    subsets: ['latin'],
    weight: '400'
})

export default function ImageViewerPage(){

    const pictureListe = [
        {id:0, type: "img", path: "/lemuth_portfolio/images/TP-street_project.jpg", width: 2048, height: 1556, title: "Cyber Street", prez: "ruelle inspiration cyberpunk"},
        {id:1, type: "img", path: "/lemuth_portfolio/images/TeakCell-vue-interieur-final.jpg", width: 2048, height: 1536, title: "Bungalow Intérieur", prez: "bungalow pour la société teakCell vue interieur"},
        {id:2, type: "img", path: "/lemuth_portfolio/images/TeakCell-vue exterieur-final.jpg", width: 2048, height: 1536, title: "Bungalow Extérieur", prez: "bungalow pour la société teakCell vue exterieur"},
        {id:3, type: "img", path: "/lemuth_portfolio/images/MTF-filaire.jpg", width: 2880, height: 2160, title: "Mécha Filaire", prez: "mecha vue graphique"},
        {id:4, type: "img", path: "/lemuth_portfolio/images/TP-street_in_fire.jpg", width: 1280, height: 960, title: "Last Night in VDR", prez: "projet de map pour le jeu leftfordead"},
        {id:5, type: "img", path: "/lemuth_portfolio/images/CM-moonoeuf-02.jpg", width: 3508, height: 2480, title: "CM-MoonOeuf", prez: "création pour le film croquemeurtre MoonOeuf"},
        {id:6, type: "img", path: "/lemuth_portfolio/images/CM-vestiaire-01.jpg", width: 2956, height: 1672, title: "CM-vestiaire", prez: "création pour le film croquemeurtre vestiaire"},
        {id:7, type: "img", path: "/lemuth_portfolio/images/CM-bureau-02.jpg", width: 1280, height: 723, title: "CM-Bureau", prez: "création pour le film croquemeurtre bureau"},
        {id:8, type: "vid", path: "/lemuth_portfolio/images/CM-cerveau vid.mp4", width: 1280, height: 723, title: "Fauteuil des réflexions", prez: ""},
    ]
    const router = useRouter()
    const { id } = router.query
    const [ currentImage , setCurrentImage ] = useState(() => pictureListe[Number(id) || 0])
    const [ newImage , setNewImage ] = useState(null)
    const [isFading, setIsFading] = useState(false)
    const [orientation, setOrientation] = useState("portrait");

    useEffect(() => {
        if (typeof window !== "undefined") {
            const mediaQuery = window.matchMedia("(orientation: portrait)");
            const updateOrientation = (e) => setOrientation(e.matches ? "portrait" : "landscape");

            // Détecter l'orientation initiale
            updateOrientation(mediaQuery);

            // Ajouter un écouteur pour les changements d'orientation
            mediaQuery.addEventListener("change", updateOrientation);

            console.log(orientation)
            // Nettoyer l'écouteur
            return () => mediaQuery.removeEventListener("change", updateOrientation);
        }
    }, [orientation]);



    function switchImage(action){
        if(isFading) return

        const currentIndex = currentImage.id
        const nextImage = action === "preview"
            ? pictureListe[currentIndex !== 0 ? currentIndex - 1 : pictureListe.length - 1]
            : pictureListe[currentIndex !== pictureListe.length - 1 ? currentIndex + 1 : 0]

        setNewImage(nextImage)
        setIsFading(true)

        setTimeout(() => {
            setCurrentImage(nextImage)
            setNewImage(null)
            setIsFading(false)
        }, 500);

    }

    return(
        <div className="flex flex-col justify-center items-center bg-black">
            <div className={`flex ${orientation === 'portrait' ? 'flex-col' : 'flex-row'} justify-center items-center w-[80%] relative`}>
                <Image
                    alt="prev"
                    src={changeIcon}
                    width={65}
                    height={65}
                    className={`${orientation === "landscape" ? "absolute z-10 right-5" : "absolute bottom-10 left-5"} rotate-180 absolute z-10 left-5 hover:scale-125 active:scale-95 transition-transform duration-150`}
                    inv
                    onClick={() => switchImage("preview")}
                />
                <div className="flex justify-center items-center relative w-full h-screen bg-black overflow-hidden">
                    <div className={`absolute inset-0 flex-col justify-center items-center transition-opacity duration-500 ${isFading ?  "opacity-0" : "opacity-100"}`}>
                        <div className={`absolute inset-0 ${orientation === "portrait" && "top-10"} flex justify-center`}>
                            <p className={`text-green-500 text-center text-2xl ${beginner.className}`}>{currentImage.title}</p>
                        </div>
                        {
                            currentImage.type === "img" ?
                                <Image
                                    src={currentImage.path}
                                    alt={currentImage.prez}
                                    width={currentImage.width}
                                    height={currentImage.height}
                                    className="object-contain w-full h-full"
                                />
                            :
                                <video
                                    autoPlay
                                    loop
                                    className="object-contain w-full h-full"
                                >
                                    <source
                                        src={currentImage.path}
                                        type="video/mp4"
                                    />
                                </video>
                        }
                    </div>
                    {
                        newImage &&
                        <div className={`absolute inset-0 flex justify-center items-center transition-opacity duration-500 ${isFading ?  "opacity-0" : "opacity-100"}`}>
                            
                            {
                                newImage.type === "img" ?
                                    <Image
                                        src={newImage.path}
                                        alt={newImage.prez}
                                        width={newImage.width}
                                        height={newImage.height}
                                        className="object-contain w-full h-full"
                                    />
                                :
                                    <video
                                        autoPlay
                                        loop
                                        className="object-contain w-full h-full"
                                    >
                                        <source
                                            src={currentImage.path}
                                            type="video/mp4"
                                        />
                                    </video>
                            }
                        </div>
                    }
                </div>            
                <Image
                    alt="next"
                    src={changeIcon}
                    width={65}
                    height={65}
                    className={`${orientation === "landscape" ? "absolute z-10 right-5" : "absolute bottom-10 right-5"} hover:scale-125 active:scale-95 transition-transform duration-150`}
                    onClick={() => switchImage("next")}
                />
                <Link href={'/'}>
                    <Image
                        alt="close"
                        src={closeIcon}
                        width={35}
                        height={35}
                        className={`absolute z-10 top-2 ${orientation === "landscape" ? "right-5" : "right-0"} hover:scale-125 active:scale-95 transition-transform duration-150`}
                    />
                </Link>
            </div>
        </div>
    )
}