import Image from "next/image"
import mailIcon from "@/assets/img/mailIcon.png"
import downloadIcon from "@/assets/img/downloadIcon.png"
import circleMazeBt from '@/assets/img/circle-maze-bottom.png'
import gitHubIcon from '@/assets/img/GitHub-logo.png'

export default function Footer() {
    return(
        <div className="flex flex-col md:flex-row w-full justify-center items-center bg-redTitle mt-20">
            {/* remerciements/gitHub */}
            <div className="flex items-center left-0 md:p-0 py-4">
                <Image src={circleMazeBt} width={150} height={150} alt="circleMazeBt" className="" />
                <div className="flex-col">
                    <p className="text-white px-4 text ">Ce site a été fait avec amour par mes soins, de la modélisation 3d à la réalisation du site, <strong>merci de votre visite !</strong></p>
                    <div className="flex w-full justify-center pt-4">
                        <Image src={gitHubIcon} width={55} height={55} alt="gitHubIcon" className="bg-red-300 rounded-lg p-1" />
                    </div>
                </div>
            </div>
            {/* liens mail */}
            <div className="flex-col md:w-1/2 w-full md:p-0 p-4  md:border-r-2 border-r-0 border-b-2 md:border-b-0 md:border-l-2 border-l-0 border-t-2 md:border-t-0 border-white">
                <p className="text-white font-semibold text-xl w-full text-center pb-4">{"N'ésitez pas à me recontacter directement par e-mail"}</p>
                <div className="flex w-full justify-center items-center py-2">
                    <Image src={mailIcon} width={25} height={25} alt="phoneIcon" className="bg-white rounded-md" />
                    <a
                        className="text-white pl-6 text-center"
                        href="mailto:gilles.saley@gmail.com"
                    >
                        {"gilles.saley@gmail.com"}
                    </a>
                </div>
            </div>
            {/* liens vers CV */}
            <div className="flex-col w-full md:w-1/6 md:p-0 p-4 border-white">
                <p className="text-white font-semibold text-xl pb-4 text-center">{"Télécharger mon CV"}</p>
                <div className="flex w-full justify-center py-2">
                    <a href="/img/Gilles Saley-cv 2024.pdf" target="_blank" rel="noopener noreferrer">
                        <Image src={downloadIcon} width={45} alt="downloadIcon" />
                    </a>
                </div>
            </div>
        </div>
    )
}