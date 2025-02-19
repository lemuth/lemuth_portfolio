import { Canvas } from "@react-three/fiber";
import { Suspense, useContext } from "react";
import BaseScene from "./BaseScene";
import { BookUi } from "./BookUi";
import Tr from "@/lib/Translation/Translation";
import Image from "next/image";
import cartman from "@/assets/img/occulus_cartman.png"
import UseWindowsSize from "@/hooks/useWindowsSize"

export default function BookScene(){

    const {width, height} = UseWindowsSize()

    return (
        <div className={`flex flex-col justify-center items-center w-full h-[145vh] ${ width > 1470 && "px-40"} bg-redTitle`}>
            <h2 className={`w-full ${width > 996 ? "text-4xl" : "text-xl"} text-yellowTheme font-semibold text-center`}>
                <Tr target="bonus_title" />
            </h2>
            <div className="w-full h-[75vh] border-x-4 border-yellowTheme">
                <Canvas shadows camera={{ position: [-0.5, 1, 4], fov: 45 }} gl={{ toneMappingExposure: 0.4 }}>
                    <group position-y={0}>
                        <Suspense fallback={null}>
                            <BaseScene />
                        </Suspense>
                    </group>
                </Canvas>
            </div>
            <BookUi />
            <div className={`relative ${width > 996 && "bottom-52 sm:right-[40%]  "} transition transform duration-150 hover:animate-pulse -rotate-6 z-10`}>
                <Image src={cartman} width={150} alt="cartman" />
            </div>
        </div>
    )
}