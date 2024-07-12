import Image from "next/image"
import localFont from 'next/font/local'
import addLogo from "@/assets/img/addLogo.png"
import soustractLogo from "@/assets/img/soustractLogo.png"
import stano from "@/assets/img/stano.png"

const playwriteHRLijeva = localFont({
    src: "../../assets/fonts/PlaywriteHRLijeva-VariableFont_wght.ttf",
    weight: '400',
    display: 'swap',
})

export default function AutresInfo() {
    return (
            <div className="flex flex-col md:flex-row justify-center w-[100%] md:w-[80%] items-center p-6 mt-20 md:mt-40 relative">
                <div className="md:w-[450px] md:h-[518px] w-full h-[556px] m-4 py-10 justify-center items-center relative  bg-cover">
                    <div className="flex w-full border-b-2 pt-4 justify-end">
                        <p className="flex items-center md:text-3xl text-xl font-semibold">Les petits</p>
                        <Image src={addLogo} width={85} alt="addLogo" />
                    </div>
                    <div className={`flex-col w-full font-light text-end p-6 text-sm md:text-base ${playwriteHRLijeva.className}`}>
                        <p className="py-1 px-2">- Un niveau B2 en Anglais</p>
                        <p className="py-1 px-2">- Très sociable pour un Dév</p>
                        <p className="py-1 px-2">- Autodidacte, apprentissage continue</p>
                        <p className="py-1 px-2">- À combattu des dragons dans sa jeunesse</p>
                        <p className="text-sm px-2">( en lancant des dés )</p>
                        <p className="py-1 px-2">- Est prèt à se déplacer</p>
                        <p className="py-1 px-2">- Irréprochable à la pose café </p>
                        <p className="py-1 px-2">sur les dernières séries</p>
                    </div>
                </div>
        
                <div className="md:w-[450px] md:h-[518px] w-full h-[556px] m-4 px-8 py-10 justify-center items-center relative  bg-cover">
                    <div className="flex w-full border-b-2 pt-8 justify-end">
                        <p className="flex items-center md:text-3xl text-xl font-semibold">Les petits</p>
                        <Image src={soustractLogo} width={85} alt="addLogo" />
                    </div>
                    <div className={`flex-col w-full font-light text-end p-2 md:p-6  text-sm md:text-bas ${playwriteHRLijeva.className}`}>
                        <p className="py-1 px-2">- A la tête dur</p>
                        <p className="py-1 px-2">{"- Pas d'expèriences de très gros projet"}</p>
                        <p className="py-1 px-2">- Supporter mes références sur les années 90</p>
                        <p className="py-1 px-2">{"- J'ai beau chercher je n'en vois pas d'autres..."}</p>
                    </div>
                </div>

                <div className="transition transform hover:animate-bounce absolute left-[45%] bottom-[-40px] rotate-6 z-10">
                    <Image src={stano} width={150} alt="stano" />
                </div>
            </div>
    )
}