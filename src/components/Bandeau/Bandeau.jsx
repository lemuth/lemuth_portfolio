import Image from "next/image";
import circleMazeTop from "@/assets/img/circle-maze-top.png"
import { didactGhotic, arsenal, beginner } from "@/lib/Fonts/fonts"

export default function Bandeau(props){

    const { lg, tr } = props

    return (
        <div className={`flex flex-col sm:flex-row justify-center sm:justify-between items-center w-full bg-yellowTheme`}>
            <div className={`flex flex-row sm:flex-col w-full sm:w-[350px] ${didactGhotic.className} justify-center sm:justify-center`}>
                <p className={`sm:w-full w-1/2 text-center uppercase font-bold text-5xl text-redTitle`}>gilles</p>
                <p className={`sm:w-full w-1/2 text-center sm:text-end font-bold text-6xl text-redTitle ${beginner.className}`}>Saley</p>
            </div>
            <div className="flex justify-center items-center">
                <div className="relative sm:absolute right-0 sm:right-[78px]">
                    <h1 className="text-redTitle text-xl md:text-3xl">{tr("bandeau_title", lg)}</h1>
                    <p className={`text-end line leading-[14px] text-redTitle text-[8px] ${arsenal.className} hover:cursor-zoom-in hover:text-[14px]`}>{tr("bandeau_subtitle", lg)}</p>
                </div>
            </div>
            {/* Image circleMaze */}
            <Image src={circleMazeTop} width={150} height={150} alt="circle-maze" className="hidden sm:flex" />
        </div>
    )
}