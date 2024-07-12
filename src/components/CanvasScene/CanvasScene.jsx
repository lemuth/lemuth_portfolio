import Image from "next/image";
import { useRef, useState } from "react"
import { Arsenal } from "next/font/google";
import SPScene from "../spScene/spScene"
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
        content: 'Javascript et le langage principal dans tous mes projets depuis que je code. J\'aime suivre ses nombreuses évolutions et adapter mon code en conséquences.',
    },
    {
        id: 2,
        img: photoshopIcon,
        title: 'Photoshop',
        level: 3,
        content: 'J\'utilisais Photoshop avant de savoir coder ! Détourage, modifications, format d\'images, je connais assez bien Photoshop pour me sentir libre dans mon travail.',
    },
    {
        id: 3,
        img: sqlIcon,
        title: 'SQL',
        level: 4,
        content: 'Le Sql est un langage que j\'ai souvent utilisé dans ma pratique du développement-web.',
    },
    {
        id:4,
        img: mongoIcon,
        title: 'MongoDB',
        level: 3,
        content: 'Je n\'ai travaillé que sur des projets perso avec MongoDB, mais son format javascript friendly me permet de l\'appréhender rapidement.',
    },
    {
        id: 5,
        img: nextIcon,
        title: 'NextJs',
        level: 3,
        content: 'Je travaille sur tous mes projets depuis deux ans avec NextJs. Il est vite devenu un incontournable pour moi.',
    },
    {
        id: 6,
        img: htmlIcon,
        title: 'Html',
        level: 4,
        content: 'Je pratique le langage Html depuis le début de mon aventure de codeur. Je suis sûr que je n\'en connais pas toutes les subtilités, mais on se connait bien lui et Moi.'
    },
    {
        id: 7,
        img: threeIcon,
        title: 'ThreeJs',
        level: 2,
        content: 'J\'aime particulièrement la 3d puisque je modélise mes propres meshs et conçois mes textures, ThreeJs me permet de mettre mes compétences en 3D au service du web.',
    },
    {
        id: 8,
        img: typescriptIcon,
        title: 'TypeScript',
        level: 2,
        content: 'J\'ai intégré Typescript dans mes derniers projets perso. Je ne suis pas encore familier avec, mais j\'en connais les Bases.',
    },
    {
        id: 9,
        img: reactIcon,
        title: 'React',
        level: 4,
        content: 'J\'intègre React dans tout mes projets depuis 4 ans, j\'ai l\'habitude de manipuler ses Hooks, et j\'aime également la library Redux.',
    },
    {
        id: 10,
        img: tailwindIcon,
        title: 'Tailwind',
        level: 3,
        content: 'Je travaille avec Tailwind dans tous mes projets depuis 2 ans.',
    },
    {
        id: 11,
        img: cssIcon,
        title: 'CSS',
        level: 4,
        content: 'Je pratique le css depuis le début de mon code, j\'ai une préférence pour les Flex-box',
    },
    {
        id: 12,
        img: nodeIcon,
        title: 'NodeJs',
        level: 3,
        content: 'Je pratique les serveurs NodeJs depuis 5 ans. Je connais bien ExpressJs, Firebase, et ai un peu pratiqué récemment un contexte NestJs.',
    },
]

const SnowballsDisplay = ({count}) =>{
    return <div className="flex justify-center items-center">
        {
            Array.from({ length: count }, (e, i) => {
                return(
                    <Image
                        key={i}
                        src={snowballIcon}
                        width={15}
                        height={15}
                        alt={`snowball + ${e}`}
                    />
                )
            })
        }
        <p>/5</p>
    </div>
}

export default function CanvasScene() {

    const [ leftPannelStatus, setLeftPannelStatus ] = useState(true)
    const [ openingLat, setOpeningLat ]             = useState(false)
    const [ openingTop, setOpeningTop ]             = useState(false)
    const [ isOpen, setIsOpen ]                     = useState(false)
    const [ activePannel, setActivePannel ]         = useState({isActive: false, id:null})
    const orbitRef            = useRef()
    const spAudioTheme        = useRef()
    const stageCurtainAudio   = useRef()

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
                        <p className="pl-4">Rotation</p>
                    </div>
                    <div className="flex pb-2 justify-between items-center">
                        <Image src={rightMouse} width={35} alt="rightMouse" />
                        <p className="pl-4">Déplacement</p>
                    </div>
                    <div className="flex pb-2 justify-between items-center">
                        <Image src={moletteMouse} width={35} alt="moletteMouse" />
                        <p className="pl-4">Zoom</p>
                    </div>
                    <button
                        className="flex w-full justify-center items-center bg-yellowTheme rounded-lg py-1 text-black  active:bg-yellow-500 shadow-md shadow-gray-800"
                        onClick={() => orbitRef.current.reset()}
                    >
                        Reset camera
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
                                return(
                                    <div
                                        key={key}
                                        className={`flex items-center absolute top-1/4 right-2 ${arsenal.className} rounded-lg bg-black/45 backdrop-blur-md ${leftPannelStatus ? "transition-all duration-200 ease-in translate-x-0" : " transition-all duration-200  ease-out translate-x-[-95%]"} `}
                                    >
                                        <div className={`flex-col p-4 text-white`}>
                                            <div className="flex pb-2 justify-between items-center border-b-2 border-white">
                                                <Image src={data.img} width={35} alt="leftMouse" />
                                                <p>{data.title}</p>
                                            </div>
                                            <div className="py-4 w-full flex-col">
                                                <SnowballsDisplay count={data.level} />
                                                <p className="max-w-64 pt-4">{data.content}</p>
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
                <button className={`px-8 py-4 bg-white text-gray-500 shadow-lg shadow-black ${arsenal.className} animate-pulse rounded-lg absolute top-[45%] left-[48%] z-20 ${openingLat && "hidden"}`}>Ouvrir</button>
                <Image src={rideauTop} alt="rideauLateralTop" className={`w-1/2 h-1/6 absolute z-10 ${openingTop && "transition-all duration-400 ease-in translate-y-[-100%]"}`} />
                <Image src={rideauTop} alt="rideauLateralTop" className={`w-1/2 h-1/6 absolute z-10 right-0 ${openingTop && "transition-all duration-400 ease-in translate-y-[-100%]"}`} />
                <Image src={rideauLat} alt="rideauLateralLeft" className={`w-1/2 h-full ${openingLat && "transition-all duration-1000 ease-in translate-x-[-100%]"}`} />
                <Image src={rideauLat} alt="rideauLateralRight" className={`w-1/2 h-full ${openingLat && "transition-all duration-1000 ease-in translate-x-[100%]"}`}  />
            </div>
            {/* Sound */}
            <audio src="/sound/south_park_bus_stop.mp3" ref={spAudioTheme} />
            <audio src="/sound/open_stage_curtain.mp3" ref={stageCurtainAudio} />
        </div>
    )
}