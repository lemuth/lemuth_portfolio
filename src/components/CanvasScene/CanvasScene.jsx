import Image from "next/image";
import { useContext, useRef, useState } from "react"
import { arsenal } from "@/lib/Fonts/googleFonts";
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
import { pannelData } from "../../lib/Data/Data";
import Tr from "@/lib/Translation/Translation";
import { LangageContext } from "@/hooks/contextProvider"

export default function CanvasScene() {
    const { langage } = useContext(LangageContext);
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
                            <p className="pl-4"><Tr target="cs_hlp_rotate" /></p>
                        </div>
                        <div className="flex pb-2 justify-between items-center">
                            <Image src={rightMouse} width={35} alt="rightMouse" />
                            <p className="pl-4"><Tr target="cs_hlp_move" /></p>
                        </div>
                        <div className="flex pb-2 justify-between items-center">
                            <Image src={moletteMouse} width={35} alt="moletteMouse" />
                            <p className="pl-4"><Tr target="cs_hlp_zoom" /></p>
                        </div>
                        <button
                            className="flex w-full justify-center items-center bg-yellowTheme rounded-lg py-1 text-black  active:bg-yellow-500 shadow-md shadow-gray-800"
                            onClick={() => orbitRef.current.reset()}
                        >
                            <Tr target="cs_hlp_reset" />
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
                                let content = `content` + `_${langage}`
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
                    <button className={`px-8 py-4 bg-white text-gray-500 shadow-lg shadow-black ${arsenal.className} animate-pulse rounded-lg absolute top-[45%] md:left-[48%] left-[35%] z-20 ${openingLat && "hidden"}`}><Tr target="cs_curtain_btn" /></button>
                    <Image src={rideauTop} alt="rideauLateralTop" className={`w-1/2 h-1/6 absolute z-10 ${openingTop && "transition-all duration-400 ease-in translate-y-[-100%]"}`} />
                    <Image src={rideauTop} alt="rideauLateralTop" className={`w-1/2 h-1/6 absolute z-10 right-0 ${openingTop && "transition-all duration-400 ease-in translate-y-[-100%]"}`} />
                    <Image src={rideauLat} alt="rideauLateralLeft" className={`w-1/2 h-full ${openingLat && "transition-all duration-1000 ease-in translate-x-[-100%]"}`} />
                    <Image src={rideauLat} alt="rideauLateralRight" className={`w-1/2 h-full ${openingLat && "transition-all duration-1000 ease-in translate-x-[100%]"}`}  />
                </div>
                {/* Sound */}
                <audio src="/lemuth_portfolio/sound/south_park_bus_stop.mp3" ref={spAudioTheme} />
                <audio src="/lemuth_portfolio/sound/open_stage_curtain.mp3" ref={stageCurtainAudio} />
            </div>
            {/* Helper Bottom pannel */}
            <div>
                {
                    activePannel.isActive &&
                    pannelData.map((data, key) => {
                        if(data.id === activePannel.id){
                            let content = `content` + `_${langage}`
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