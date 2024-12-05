import Image from "next/image";
import Carousel from "../Carousel/Carousel"
import kenny from "@/assets/img/kenny.png"
import { experiencesData } from "../Data/Data";

export default function Experiences(props){

    const { lg, tr } = props
    const options = { direction: 'rtl' }

    return (
        <div className="flex flex-col justify-center items-center w-full relative md:mt-40 mt-5">
            {/* Block title */}
            <h2 className="w-full pb-4 text-4xl text-redTitle font-semibold text-center">{tr("carousel_title", props.lg)}</h2>
            <div className="md:w-[65%] w-full flex-col justify-center items-center p-6  shadow-xl relative">
                <Carousel lg={lg} tr={tr} slides={experiencesData} options={options} />
                <div className="absolute left-0 md:left-[-20px] bottom-8 ease-in duration-100 transition transform hover:-translate-y-10 hover:translate-x-3">
                    <Image src={kenny} width={150} alt="kenny" className="hidden md:flex" />
                    <Image src={kenny} width={90} alt="kenny" className="flex md:hidden" />
                </div>
            </div>
        </div>
    )
}