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

export default function AutresInfo(props) {
    const { lg, tr } = props
    return (
            <div className="flex flex-col justify-center items-center w-full relative">
                <div className="flex flex-col md:flex-row justify-center w-[100%] md:w-[80%] items-center p-6 relative">
                    <div className="w-full m-4 py-5 justify-center items-center relative bg-cover">
                        <div className="flex w-full border-b-2 pt-4 justify-end">
                            <p className="flex items-center md:text-3xl text-xl font-semibold">{tr("aa_title", lg)}</p>
                            <Image src={addLogo} width={85} alt="addLogo" />
                        </div>
                        <div className={`flex-col w-full font-light text-end p-0 sm:p-6 text-sm md:text-base ${playwriteHRLijeva.className}`}>
                            <p className="py-1 px-0 sm:px-2">- {tr("aa_p_one_one", lg)}</p>
                            <p className="py-1 px-0 sm:px-2">- {tr("aa_p_one_two", lg)}</p>
                            <p className="py-1 px-0 sm:px-2">- {tr("aa_p_one_three", lg)}</p>
                            <p className="py-1 px-0 sm:px-2">- {tr("aa_p_one_four", lg)}</p>
                            <p className="text-sm px-0 sm:px-2">{tr("aa_p_one_four_bis", lg)}</p>
                            <p className="py-1 px-0 sm:px-2">- {tr("aa_p_one_five", lg)}</p>
                            <p className="py-1 px-0 sm:px-2">- {tr("aa_p_one_six", lg)}</p>
                            <p className="py-1 px-0 sm:px-2">{tr("aa_p_one_six_bis", lg)}</p>
                        </div>
                    </div>
            
                    <div className=" w-full  m-4 py-5 justify-center items-center relative bg-cover">
                        <div className="flex w-full border-b-2 pt-4 justify-end">
                            <p className="flex items-center md:text-3xl text-xl font-semibold">{tr("aa_title", lg)}</p>
                            <Image src={soustractLogo} width={85} alt="addLogo" />
                        </div>
                        <div className={`flex-col w-full font-light text-end p-0 sm:p-6 text-sm md:text-bas ${playwriteHRLijeva.className}`}>
                            <p className="py-1 px-0 sm:px-2">- {tr("aa_p_two_one", lg)}</p>
                            <p className="py-1 px-0 sm:px-2">- {tr("aa_p_two_two", lg)}</p>
                            <p className="py-1 px-0 sm:px-2">- {tr("aa_p_two_three", lg)}</p>
                            <p className="py-1 px-0 sm:px-2">{tr("aa_p_two_four", lg)}</p>
                        </div>
                    </div>
                    <div className="transition transform hover:animate-bounce relative sm:absolute sm:left-[45%] bottom-[-40px] rotate-6 z-10">
                        <Image src={stano} width={150} alt="stano" />
                    </div>

                </div>
            </div>
    )
}