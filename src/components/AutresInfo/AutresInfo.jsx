import Image from "next/image"
import addLogo from "@/assets/img/addLogo.png"
import soustractLogo from "@/assets/img/soustractLogo.png"
import stano from "@/assets/img/stano.png"
import { playwriteHRLijeva } from "@/lib/Fonts/Fonts"
import Tr from "@/lib/Translation/Translation";

export default function AutresInfo() {

    return (
            <div className="flex flex-col justify-center items-center w-full relative">
                <div className="flex flex-col md:flex-row justify-center w-[100%] md:w-[80%] items-center p-6 relative">
                    <div className="w-full m-4 py-5 justify-center items-center relative bg-cover">
                        <div className="flex w-full border-b-2 pt-4 justify-end">
                            <p className="flex items-center md:text-3xl text-xl font-semibold"><Tr target="aa_title" /></p>
                            <Image src={addLogo} width={85} alt="addLogo" />
                        </div>
                        <div className={`flex-col w-full font-light text-end p-0 sm:p-6 text-sm md:text-base ${playwriteHRLijeva.className}`}>
                            <p className="py-1 px-0 sm:px-2">- <Tr target="aa_p_one_one" /></p>
                            <p className="py-1 px-0 sm:px-2">- <Tr target="aa_p_one_two" /> </p>
                            <p className="py-1 px-0 sm:px-2">- <Tr target="aa_p_one_three" /></p>
                            <p className="py-1 px-0 sm:px-2">- <Tr target="aa_p_one_four" /></p>
                            <p className="text-sm px-0 sm:px-2"><Tr target="aa_p_one_four_bis" /></p>
                            <p className="py-1 px-0 sm:px-2">- <Tr target="aa_p_one_five" /></p>
                            <p className="py-1 px-0 sm:px-2">- <Tr target="aa_p_one_six" /></p>
                            <p className="py-1 px-0 sm:px-2"><Tr target="aa_p_one_six_bis" /></p>
                        </div>
                    </div>
            
                    <div className=" w-full  m-4 py-5 justify-center items-center relative bg-cover">
                        <div className="flex w-full border-b-2 pt-4 justify-end">
                            <p className="flex items-center md:text-3xl text-xl font-semibold"><Tr target="aa_title" /></p>
                            <Image src={soustractLogo} width={85} alt="addLogo" />
                        </div>
                        <div className={`flex-col w-full font-light text-end p-0 sm:p-6 text-sm md:text-bas ${playwriteHRLijeva.className}`}>
                            <p className="py-1 px-0 sm:px-2">- <Tr target="aa_p_two_one" /></p>
                            <p className="py-1 px-0 sm:px-2">- <Tr target="aa_p_two_two" /></p>
                            <p className="py-1 px-0 sm:px-2">- <Tr target="aa_p_two_three" /></p>
                            <p className="py-1 px-0 sm:px-2"><Tr target="aa_p_two_four" /></p>
                        </div>
                    </div>
                    <div className="transition transform hover:animate-bounce relative sm:absolute sm:left-[45%] bottom-[-40px] rotate-6 z-10">
                        <Image src={stano} width={150} alt="stano" />
                    </div>

                </div>
            </div>
    )
}