import Image from "next/image"
import portrait from "@/assets/img/portrait_gilles.jpg"
import trombone from "@/assets/img/trombone.png"
import mailIcon from "@/assets/img/mailIcon.png"
import mysterion from "@/assets/img/mysterion.png"

export default function Presentation(props){

    const { lg, tr } = props

    return(
        <div className="flex flex-col justify-center items-center w-full relative">
            <div className="flex flex-col justify-center w-full md:w-[65%] p-4 md:p-16 mt-20 pb-20 md:pb-32 shadow-xl mb-32 md:mb-0 pt-0 md:pt-32">
                {/* Block title */}
                <div className="w-full pb-4 text-4xl text-redTitle font-semibold">{tr("prez_title", props.lg)}</div>
                {/* Block content */}
                <div className="w-full">
                    <Image
                        src={portrait}
                        width={85}
                        height={85}
                        alt="portrait"
                        className="rounded-full float-left m-4 shadow-md shadow-redTitle"
                    />
                    <div className="md:text-xl text-base">
                        <p className="pb-2">{tr('prez_p_one', lg)}</p>
                        <p className="pb-2">{tr('prez_p_two', lg)}</p>
                        <p className="pb-2">{tr('prez_p_three', lg)}</p>
                        <p>{tr('prez_p_four', lg)} </p>
                    </div>
                </div>
                {/* Rappel Contact */}
                <div className="hidden md:block md:absolute z-10 top-0 right-10 bg-yellowTheme rotate-12">
                    <Image src={trombone} width={45} alt="trombone" className="translate-x-28 translate-y-[-1.2rem]" />
                    <Image src={mysterion} width={100} alt="mysterion" className="rotate-12 float-right pr-4 duration-500 transition transform scale-100 hover:scale-125" />
                    <div className="m-6">
                        <p className="pb-4 text-lg">@Contact:</p>
                        <div className="flex duration-500 transition transform scale-100 hover:scale-125">
                            <Image src={mailIcon} width={25} alt="phoneIcon" />
                            <a href="mailto:gilles.saley@gmail.com">{"gilles.saley@gmail.com"}</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}