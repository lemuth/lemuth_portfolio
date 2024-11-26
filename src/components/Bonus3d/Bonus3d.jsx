import Image from "next/image";
import Link from "next/link";

export default function Bonus3d(props){

    const { lg, tr } = props

    return(
        <div className="flex flex-col justify-center items-center w-full relative pt-20">
            <div className="flex flex-col justify-center w-[100%] md:w-[80%] items-center p-6 relative">
                
                <h1 className="w-full mb-10 text-4xl text-redTitle font-semibold text-center">{tr("bonus_title", lg)}</h1>

                <div className="flex flex-wrap items-stretch justify-center">
                    <Link href={{pathname: '/ImageViewer', query: {id:0}}} className="flex justify-center items-center bg-white hover:bg-yellowTheme">
                        <div className="relative inline-block p-2">
                            <Image width={256} height={194} src="/images/TP-street_project.jpg" alt="cyberStreet" draggable="false" className="shadow-[8px_10px_16px_rgba(0,0,0,0.35)]" />
                            <div className="absolute top-0 left-0 w-full h-full bg-[rgba(255, 255, 255, 0)]" />
                        </div>
                    </Link>
                    <Link href={{pathname: '/ImageViewer', query: {id:1}}} className="flex justify-center items-center bg-white hover:bg-yellowTheme">
                        <div className="relative inline-block p-2">
                            <Image width={256} height={194} src="/images/TeakCell-vue-interieur-final.jpg" alt="tekCellInt" draggable="false" className="shadow-[8px_10px_16px_rgba(0,0,0,0.35)]" />
                            <div className="absolute top-0 left-0 w-full h-full bg-[rgba(255, 255, 255, 0)]" />
                        </div>
                    </Link>
                    <Link href={{pathname: '/ImageViewer', query: {id:2}}} className="flex justify-center items-center bg-white hover:bg-yellowTheme">
                        <div className="relative inline-block p-2">
                            <Image width={356} height={194} src="/images/TeakCell-vue exterieur-final.jpg" alt="tekCellExt" draggable="false" className="shadow-[8px_10px_16px_rgba(0,0,0,0.35)]" />
                            <div className="absolute top-0 left-0 w-full h-full bg-[rgba(255, 255, 255, 0)]" />
                        </div>
                    </Link>
                    <Link href={{pathname: '/ImageViewer', query: {id:3}}} className="flex justify-center items-center bg-white hover:bg-yellowTheme">
                        <div className="relative inline-block p-2">
                            <Image width={259} height={194} src="/images/MTF-filaire.jpg" alt="mecha" draggable="false" className="shadow-[8px_10px_16px_rgba(0,0,0,0.35)]" />
                            <div className="absolute top-0 left-0 w-full h-full bg-[rgba(255, 255, 255, 0)]" />
                        </div>
                    </Link>
                    <Link href={{pathname: '/ImageViewer', query: {id:4}}} className="flex justify-center items-center bg-white hover:bg-yellowTheme">
                        <div className="relative inline-block p-2">
                            <Image width={259} height={194} src="/images/TP-street_in_fire.jpg" alt="leftfordead" draggable="false" className="shadow-[8px_10px_16px_rgba(0,0,0,0.35)]" />
                            <div className="absolute top-0 left-0 w-full h-full bg-[rgba(255, 255, 255, 0)]" />
                        </div>
                    </Link>
                    <Link href={{pathname: '/ImageViewer', query: {id:5}}} className="flex justify-center items-center bg-white hover:bg-yellowTheme">
                        <div className="relative inline-block p-2">
                            <Image width={274} height={194} src="/images/CM-moonoeuf-02.jpg" alt="cmMoonOeuf" draggable="false" className="shadow-[8px_10px_16px_rgba(0,0,0,0.35)]" />
                            <div className="absolute top-0 left-0 w-full h-full bg-[rgba(255, 255, 255, 0)]" />
                        </div>
                    </Link>
                    <Link href={{pathname: '/ImageViewer', query: {id:6}}} className="flex justify-center items-center bg-white hover:bg-yellowTheme">
                        <div className="relative inline-block p-2">
                            <Image width={343} height={194} src="/images/CM-vestiaire-01.jpg" alt="cmVestiaire" draggable="false" className="shadow-[8px_10px_16px_rgba(0,0,0,0.35)]" />
                            <div className="absolute top-0 left-0 w-full h-full bg-[rgba(255, 255, 255, 0)]" />
                        </div>
                    </Link>
                    <Link href={{pathname: '/ImageViewer', query: {id:7}}} className="flex justify-center items-center bg-white hover:bg-yellowTheme">
                        <div className="relative inline-block p-2">
                            <Image width={343} height={194} src="/images/CM-bureau-02.jpg" alt="moonersDesk" draggable="false" className="shadow-[8px_10px_16px_rgba(0,0,0,0.35)]" />
                            <div className="absolute top-0 left-0 w-full h-full bg-[rgba(255, 255, 255, 0)]" />
                        </div>
                    </Link>
                    <Link href={{pathname: '/ImageViewer', query: {id:8}}} className="flex justify-center items-center bg-white hover:bg-yellowTheme">
                        <div className="relative inline-block p-2 ">
                            <video width={259} height={194} autoPlay loop className="shadow-[8px_10px_16px_rgba(0,0,0,0.35)]">
                                <source src="/images/CM-cerveau vid.mp4" type="video/mp4" />
                            </video>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}