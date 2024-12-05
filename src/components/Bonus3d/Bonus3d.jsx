import Image from "next/image";
import Link from "next/link";
import { pictureListe } from "../Data/Data";
import cartman from "@/assets/img/occulus_cartman.png"

export default function Bonus3d(props){

    const { lg, tr } = props

    return(
        <div className="flex flex-col justify-center items-center w-full relative pt-10">
            <div className="flex flex-col justify-center w-full md:w-[80%] items-center p-6 relative">
                
                <h2 className="w-full mb-10 text-4xl text-redTitle font-semibold text-center">{tr("bonus_title", lg)}</h2>

                <div className="flex flex-wrap items-stretch justify-center">
                    {
                        pictureListe.map((item) => {
                            if(item.type === 'img'){
                                return(
                                    <Link key={item.id} href={{pathname: '/ImageViewer', query: {id:item.id}}} className="flex justify-center items-center bg-transparent hover:bg-yellowTheme">
                                        <div className="relative inline-block p-2">
                                            <Image width={item.widthMin} height={item.heightMin} src={item.path[0]} alt={item.prez} draggable="false" className="shadow-[8px_10px_16px_rgba(0,0,0,0.35)]" />
                                            <div className="absolute top-0 left-0 w-full h-full bg-[rgba(255, 255, 255, 0)]" />
                                        </div>
                                    </Link>
                                )
                            } else if(item.type === 'vid'){
                                return(
                                    <Link key={item.id} href={{pathname: '/ImageViewer', query: {id: item.id}}} className="flex justify-center items-center bg-transparent hover:bg-yellowTheme">
                                        <div className="relative inline-block p-2 ">
                                            <video width={item.widthMin} height={item.heightMin} autoPlay loop className="shadow-[8px_10px_16px_rgba(0,0,0,0.35)]">
                                                <source src={item.path} type="video/mp4" />
                                            </video>
                                        </div>
                                    </Link>
                                )
                            }
                        })
                    }
                    
                </div>
                <div className="relative sm:right-[33%] transition transform duration-150 hover:animate-pulse -rotate-6 z-10">
                    <Image src={cartman} width={150} alt="cartman" />
                </div>
            </div>
        </div>
    )
}