import Image from "next/image";
import { useRef, useState } from "react"
import { Arsenal } from "next/font/google";
import SPScene from "@/components/spScene/spScene"
import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei";
import arrow from "@/assets/img/arrow.png"
import target from "@/assets/img/target.png"
import rideauLat from "@/assets/img/rideau_lateral.png"
import rideauTop from "@/assets/img/rideau_top.png"
import leftMouse from "@/assets/img/left_mouse.png"
import rightMouse from "@/assets/img/right_mouse.png"
import moletteMouse from "@/assets/img/molette_mouse.png"
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
import snowballIcon from "@/assets/img/snowball.png"

// fonts
const arsenal = Arsenal({
    subsets: ['latin'],
    weight: '400'
})

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

export default function CanvasScene(props) {

    const { lg, tr }                                = props
    const [ leftPannelStatus, setLeftPannelStatus ] = useState(true)
    const [ openingLat, setOpeningLat ]             = useState(false)
    const [ openingTop, setOpeningTop ]             = useState(false)
    const [ isOpen, setIsOpen ]                     = useState(false)
    const [ activePannel, setActivePannel ]         = useState({isActive: false, id:null})
    const orbitRef                                  = useRef()
    const spAudioTheme                              = useRef()
    const stageCurtainAudio                         = useRef()

    function start(){
        setOpeningLat(true)
        stageCurtainAudio.current.play()
        setTimeout(() => {
            setOpeningTop(true)
            }, 800);
        setTimeout(() => {
            setIsOpen(true)
            spAudioTheme.current.play()
        }, 1000);
    }

    return (
        <div>
            <div className="flex min-h-0 min-w-0 w-full h-[350px] relative">   
                <Canvas shadows camera= {{fov: 35, position:[-1.2844773379841994,1.4958643022203553e-15,24.39552610485493]}}>
                    <color attach={"background"} args={["#d8d8d8"]} />
                    <OrbitControls
                        makeDefault
                        minPolarAngle={0}
                        maxPolarAngle={Math.PI / 2}
                        target={[0, 0, 0]}
                        ref={orbitRef}
                    />
                    <rectAreaLight width={60} height={60} intensity={1} position={[-10, 10, 20]} />
                    <ambientLight intensity={0.5} />
                    <SPScene activePannel={activePannel} setActivePannel={setActivePannel} />
                </Canvas>
                {/* Helper Left pannel */}
                <div className={`flex items-center absolute top-2 left-2 ${arsenal.className} rounded-lg bg-black/45 backdrop-blur-md ${leftPannelStatus ? "transition-all duration-200 ease-in translate-x-0" : " transition-all duration-200  ease-out translate-x-[-95%]"} `}>
                    <div className={`flex-col p-4 border-r-2 border-yellowTheme text-white`}>
                        <div className="flex pb-2 justify-between items-center">
                            <Image src={leftMouse} width={35} alt="leftMouse" />
                            <p className="pl-4">{tr("cs_hlp_rotate", lg)}</p>
                        </div>
                        <div className="flex pb-2 justify-between items-center">
                            <Image src={rightMouse} width={35} alt="rightMouse" />
                            <p className="pl-4">{tr("cs_hlp_move", lg)}</p>
                        </div>
                        <div className="flex pb-2 justify-between items-center">
                            <Image src={moletteMouse} width={35} alt="moletteMouse" />
                            <p className="pl-4">{tr("cs_hlp_zoom", lg)}</p>
                        </div>
                        <button
                            className="flex w-full justify-center items-center bg-yellowTheme rounded-lg py-1 text-black  active:bg-yellow-500 shadow-md shadow-gray-800"
                            onClick={() => orbitRef.current.reset()}
                        >
                            {tr("cs_hlp_reset", lg)}
                            <Image className="ml-2" src={target} width={25} alt="target" />
                        </button>
                    </div>
                    <button
                        className="h-[150px]"
                        onClick={() => leftPannelStatus ? setLeftPannelStatus(false) : setLeftPannelStatus(true)}>
                        {
                            leftPannelStatus ?
                            <Image src={arrow} width={25} alt="arrow" className={`px-2 ${leftPannelStatus}`} />
                            :
                            <p className="px-2 text-redTitle font-semibold">?</p>
                        }
                    </button>
                </div>
                {/* Helper Right pannel */}
                <div>
                    {
                        activePannel.isActive &&
                        pannelData.map((data, key) => {
                            if(data.id === activePannel.id){
                                let content = `content` + `_${lg}`
                                return(
                                    <div
                                        key={key}
                                        className={`hidden items-center sm:flex sm:absolute top-1/4 right-2 ${arsenal.className} rounded-lg bg-black/45 backdrop-blur-md `}
                                    >
                                        <div className={`flex-col p-4 text-white`}>
                                            <div className="flex pb-2 justify-between items-center border-b-2 border-white">
                                                <Image src={data.img} width={35} alt="leftMouse" />
                                                <p>{data.title}</p>
                                            </div>
                                            <div className="py-2 w-full flex-col">
                                                <p className="max-w-64">{data[`${content}`]}</p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                        })
                    }
                </div>
                {/* Rideau */}
                <div className={`flex absolute w-full h-full ${isOpen ? 'hidden' : 'show'}`} onClick={() => start()}>
                    <button className={`px-8 py-4 bg-white text-gray-500 shadow-lg shadow-black ${arsenal.className} animate-pulse rounded-lg absolute top-[45%] md:left-[48%] left-[35%] z-20 ${openingLat && "hidden"}`}>{tr("cs_curtain_btn", lg)}</button>
                    <Image src={rideauTop} alt="rideauLateralTop" className={`w-1/2 h-1/6 absolute z-10 ${openingTop && "transition-all duration-400 ease-in translate-y-[-100%]"}`} />
                    <Image src={rideauTop} alt="rideauLateralTop" className={`w-1/2 h-1/6 absolute z-10 right-0 ${openingTop && "transition-all duration-400 ease-in translate-y-[-100%]"}`} />
                    <Image src={rideauLat} alt="rideauLateralLeft" className={`w-1/2 h-full ${openingLat && "transition-all duration-1000 ease-in translate-x-[-100%]"}`} />
                    <Image src={rideauLat} alt="rideauLateralRight" className={`w-1/2 h-full ${openingLat && "transition-all duration-1000 ease-in translate-x-[100%]"}`}  />
                </div>
                {/* Sound */}
                <audio src="./sound/south_park_bus_stop.mp3" ref={spAudioTheme} />
                <audio src="./sound/open_stage_curtain.mp3" ref={stageCurtainAudio} />
            </div>
            {/* Helper Bottom pannel */}
            <div>
                {
                    activePannel.isActive &&
                    pannelData.map((data, key) => {
                        if(data.id === activePannel.id){
                            let content = `content` + `_${lg}`
                            return(
                                <div
                                    key={key}
                                    className={`flex  sm:hidden items-center top-1/4 right-2 ${arsenal.className} rounded-lg bg-black/45 backdrop-blur-md `}
                                >
                                    <div className={`flex-col p-4 text-white`}>
                                        <div className="flex pb-2 justify-between items-center border-b-2 border-white">
                                            <Image src={data.img} width={35} alt="leftMouse" />
                                            <p>{data.title}</p>
                                        </div>
                                        <div className="py-2 w-full flex-col">
                                            <p className="max-w-64 text-sm sm:text-base ">{data[`${content}`]}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    })
                }
            </div>
        </div>
    )
}