import Image from "next/image"
import mailIcon from "@/assets/img/mailIcon.png"
import downloadIcon from "@/assets/img/downloadIcon.png"
import circleMazeBt from '@/assets/img/circle-maze-bottom.png'
import gitHubIcon from '@/assets/img/GitHub-logo.png'
import Link from "next/link"
import Tr from "@/lib/Translation/Translation";
import { useContext } from "react"
import { LangageContext } from "@/hooks/contextProvider"
import { mulish } from "@/lib/Fonts/googleFonts"

export default function Footer() {

    const { langage } = useContext(LangageContext);

    return(
        <div className={`flex flex-col md:flex-row w-full justify-center items-center border-t-8 border-double border-yellowTheme bg-redTitle ${mulish.className}`}>
            {/* remerciements/gitHub */}
            <div className="flex items-center left-0 md:p-0 py-4">
                <Image src={circleMazeBt} width={150} height={150} alt="circleMazeBt" className="w-1/3 sm:w-1/8" />
                <div className="flex-col">
                    <p className="text-white px-4 text "><Tr target="ft_tx" /></p>
                    <Link href="https://github.com/lemuth/lemuth_portfolio" target="_blank" rel="noopener noreferrer" className="flex w-full justify-center pt-4">
                        <Image src={gitHubIcon} width={55} height={55} alt="gitHubIcon" className="bg-red-300 rounded-lg p-1 border-2 border-opacity-0 hover:border-opacity-100 border-white" />
                    </Link>
                </div>
            </div>
            {/* liens mail */}
            <div className="flex-col md:w-1/2 w-full md:p-0 p-4  md:border-r-2 border-r-0 border-b-2 md:border-b-0 md:border-l-2 border-l-0 border-t-2 md:border-t-0 border-white">
                <p className="text-white w-full text-center pb-4"><Tr target="ft_mail" /></p>
                <div className="flex justify-center items-center py-2 rounded-lg">
                    <Image src={mailIcon} width={25} height={25} alt="phoneIcon" className="bg-white rounded-md" />
                    <a
                        className="text-white pl-6"
                        href="mailto:gilles.saley@gmail.com"
                    >
                        {"gilles.saley@gmail.com"}
                    </a>
                </div>
            </div>
            {/* liens vers CV */}
            <div className="flex-col w-full md:w-1/6 md:p-0 p-4 border-white">
                <p className="text-white pb-4 text-center"><Tr target="ft_cv" /></p>
                <div className="flex w-full justify-center py-2">
                    {
                        langage === 'fr' ?
                            <Link href="./pdf/gilles_saley-cv 2024.pdf" target="_blank" rel="noopener noreferrer" className="border-2 border-opacity-0 hover:border-opacity-100 border-white rounded-full">
                                <Image src={downloadIcon} width={45} alt="downloadIcon" />
                            </Link>
                        :
                            <Link href="./pdf/gilles_saley-cv 2024-en.pdf" target="_blank" rel="noopener noreferrer" className="border-2 border-opacity-0 hover:border-opacity-100 border-white rounded-full">
                                <Image src={downloadIcon} width={45} alt="downloadIcon" />
                            </Link>
                    }
                </div>
            </div>
        </div>
    )
}