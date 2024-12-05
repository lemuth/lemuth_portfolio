import Image from "next/image"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import changeIcon from "@/assets/img/nextPict.png"
import closeIcon from "@/assets/img/close.png"
import Link from "next/link"
import { Edu_VIC_WA_NT_Beginner } from "next/font/google"
import { pictureListe } from "@/components/Data/Data"

const beginner = Edu_VIC_WA_NT_Beginner({
    subsets: ['latin'],
    weight: '400'
})

export default function ImageViewerPage(){

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

            updateOrientation(mediaQuery);
            mediaQuery.addEventListener("change", updateOrientation);

            return () => mediaQuery.removeEventListener("change", updateOrientation);
        }
    }, [orientation]);



    function switchImage(action){
        //Prevent multiple Click
        if(isFading) return

        const currentIndex = currentImage.id
        const nextImage = action === "preview"
            ? pictureListe[currentIndex !== 0 ? currentIndex - 1 : pictureListe.length - 1]
            : pictureListe[currentIndex !== pictureListe.length - 1 ? currentIndex + 1 : 0]

        setNewImage(nextImage)
        setIsFading(true)
        setTimeout(() => {
            setCurrentImage(nextImage)
            setIsFading(false)
        }, 500);

    }

    return(
        <div className="flex flex-col justify-center items-center bg-black">
            <div className={`flex ${orientation === 'portrait' ? 'flex-col' : 'flex-row'} justify-center items-center w-[80%] relative`}>
                <Image
                    alt="image précedente"
                    src={changeIcon}
                    width={65}
                    height={65}
                    className={`absolute z-20 ${orientation === "landscape" ? "right-5" : "bottom-10 left-5"} rotate-180 absolute z-10 left-5 hover:scale-125 active:scale-95 transition-transform duration-150`}
                    onClick={() => switchImage("preview")}
                />
                <div className="flex justify-center items-center relative w-full h-screen bg-black overflow-hidden">
                    <div className={`z-10 absolute inset-0 flex-col justify-center items-center transition-opacity duration-500 ease-in-out ${isFading ?  "opacity-0" : "opacity-100"}`}>
                        <div className={`absolute inset-0 ${orientation === "portrait" && "top-10"} flex justify-center`}>
                            <p className={`text-green-500 text-center text-2xl ${beginner.className}`}>{currentImage.title}</p>
                        </div>
                        {
                            currentImage.type === "img" ?
                                <Image
                                    src={currentImage.path[0]}
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
                        <div className={`z-0 absolute inset-0 flex-col justify-center items-center`}>
                            <div className={`absolute inset-0 ${orientation === "portrait" && "top-10"} flex justify-center`}>
                                <p className={`text-green-500 text-center text-2xl ${beginner.className}`}>{newImage.title}</p>
                            </div>
                            {
                                newImage.type === "img" ?
                                    <Image
                                        src={newImage.path[0]}
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
                                            src={newImage.path}
                                            type="video/mp4"
                                        />
                                    </video>
                            }
                        </div>
                    }
                </div>            
                <Image
                    alt="image suivante"
                    src={changeIcon}
                    width={65}
                    height={65}
                    className={`${orientation === "landscape" ? "absolute z-10 right-5" : "absolute bottom-10 right-5"} hover:scale-125 active:scale-95 transition-transform duration-150`}
                    onClick={() => switchImage("next")}
                />
                <Link href={'/'}>
                    <Image
                        alt="fermer imageView"
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